var React = require('react');
var Render = require('react-dom').render;
var ProductData = require('./utils/ProductData');
var CartAPI = require('./utils/CartAPI');
var CartApp = require('./components/CartApp.js');

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render CartApp Controller View
Render(
  <CartApp />,
  document.getElementById('main')
);
