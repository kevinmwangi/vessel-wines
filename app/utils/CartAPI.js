var CartActions = require('../actions/CartActions');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getProductData: function () {
    var data = JSON.parse(localStorage.getItem('products'));
    CartActions.receiveProduct(data);
  }

};
