var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.js');
var ProductList = require('./ProductList.js');
var Cart = require('./Cart');

// Method to retrieve state from Stores
function getCartState() {
  return {
    products: ProductStore.getProducts(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

// Define main Controller View
var CartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function () {
    return (
      <div className="cart-app">
        <Cart products={this.state.cartItems}
            count={this.state.cartCount}
            total={this.state.cartTotal}
            visible={this.state.cartVisible}/>

        <ProductList products={this.state.products}
                    cartitems={this.state.cartItems}
                    selectedProduct={this.state.selectedProduct}/>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = CartApp;
