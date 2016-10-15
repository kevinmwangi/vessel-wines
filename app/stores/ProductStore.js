var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var _ = require('underscore');

// Define initial data points
var _products = [], _selected = null;

// Method to load product data from mock API
function loadProductData(data) {
  _products = data;
  _selected = _products[0];
}

// Method to set the currently selected product variation
function setSelected(index) {
  _selected = _products[index];
}
// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {
  // Return Product data
  getProducts: function () {
    return _products;
  },
  // Return selected Product
  getSelected: function () {
    return _selected;
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
    // Respond to RECEIVE_DATA action
    case CartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    // Respond to SELECT__PRODUCT action
    case CartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  ProductStore.emitChange();
  return true;
});

module.exports = ProductStore;
