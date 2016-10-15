var Dispatcher = require("../dispatcher/Dispatcher");
var CartConstants = require('../constants/CartConstants');
var _ = require('underscore');

// Define action methods
var CartActions = {

  // Receive inital product data
  receiveProduct: function (data) {
    Dispatcher.handleAction({
      actionType: CartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function (index) {
    Dispatcher.handleAction({
      actionType: CartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function (cartProduct, update) {
    Dispatcher.handleAction({
      actionType: CartConstants.CART_ADD,
      cartProduct: cartProduct,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function (cartProduct) {
    Dispatcher.handleAction({
      actionType: CartConstants.CART_REMOVE,
      cartProduct: cartProduct
    })
  },

  // Update cart visibility status
  updateCartVisible: function (cartVisible) {
    Dispatcher.handleAction({
      actionType: CartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = CartActions;
