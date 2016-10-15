var Dispatcher = require("../dispatcher/Dispatcher");
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var _ = require('underscore');

// Define initial data points
var _products = {}, _cartVisible = false;

// Add product to cart
function add(cartProduct, update) {
    // console.log(" cartProduct >> "+JSON.stringify(cartProduct));
    // console.log(" _products >> "+JSON.stringify(_products));
    // console.log(" update.quantity >> " + update.quantity);
    // console.log(" cartProduct.quantity >> " + cartProduct.quantity);

    update.quantity = cartProduct in _products ? _products[cartProduct].quantity + update.quantity : update.quantity;
    _products[cartProduct] = _.extend({}, _products[cartProduct], update)

}

// Set cart visibility
function setCartVisible(cartVisible) {
    _cartVisible = cartVisible;
}

// Remove item from cart
function removeItem(cartProduct) {
    delete _products[cartProduct];
}

// Extend Cart Store with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {
    // Return cart items
    getCartItems: function () {
        return _products;
    },
    // Return # of items in cart
    getCartCount: function () {
        // console.log(" >>> checking count ", JSON.stringify(_products));
        // console.log(" >>> count ", Object.keys(_products).length);
        return Object.keys(_products).length;
    },
    // Return cart cost total
    getCartTotal: function () {
        var total = 0;
        // console.log(" >>> _products ", JSON.stringify(_products));
        for (var product in _products) {
            // console.log(" >>> product ", JSON.stringify(product));
            // console.log(" _products.hasOwnProperty(product) ", _products.hasOwnProperty(product));
            // console.log("_products[product] ", _products[product]);

            if (_products.hasOwnProperty(product)) {
                total += _products[product].price * _products[product].quantity;
            }
        }
        return total.toFixed(2);
    },
    // Return cart visibility state
    getCartVisible: function () {
        return _cartVisible;
    },
    // Emit Change event
    emitChange: function () {
        this.emit('change');
    },
    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

// Register callback with Dispatcher
Dispatcher.register(function (payload) {
    var action = payload.action;
    var text;
    switch (action.actionType) {
        // Respond to CART_ADD action
        case CartConstants.CART_ADD:
            add(action.cartProduct,  action.update);
        break;
        // Respond to CART_VISIBLE action
        case CartConstants.CART_VISIBLE:
            setCartVisible(action.cartVisible);
        break;
        // Respond to CART_REMOVE action
        case CartConstants.CART_REMOVE:
            removeItem(action.cartProduct);
        break;
        default:
        return true;
    }
    // If action was responded to, emit change event
    CartStore.emitChange();
    return true;
});

module.exports = CartStore;
