var React = require('react');
var CartActions = require('../actions/CartActions');

//  cart view
var Cart = React.createClass({

    // Hide cart via Actions
    closeCart: function () {
        CartActions.updateCartVisible(false);
    },

    // Show cart via Actions
    openCart: function () {
        CartActions.updateCartVisible(true);
    },

    // Remove item from Cart via Actions
    removeFromCart: function (cartProduct) {
        CartActions.removeFromCart(cartProduct);
        CartActions.updateCartVisible(false);
    },

    // Render cart view
    render: function () {
        var self = this, products = this.props.products;
        return (
            <div className="container">
                <div className="col-sm-4 col-md-4">
                    <ul id="filter" className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#filter-by" aria-controls="home" role="tab" data-toggle="tab">Show me</a>
                        </li>
                        <li role="presentation">
                            <a href="#show-all" aria-controls="profile" role="tab" data-toggle="tab">Show All</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="filter-by">
                            <span className="label label-default">White</span>
                            <span className="label label-default">Red</span>
                            <span className="label label-default">Sparkling</span>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="show-all">
                            <span className="label label-default">White</span>
                            <span className="label label-default">Red</span>
                            <span className="label label-default">Sparkling</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-8 mini-cart">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="row">
                                <div className="delivery-info">
                                    <p>Delivery Info</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="row">
                                {Object.keys(products).map(function (product) {
                                    return (
                                        <div className="items-in-cart" key={product}>
                                            <h1>{products[product].quantity}</h1>
                                            <p>{products[product].quantity >= 1? products[product].type + 's': products[product].type}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row vertical-align">
                                <div className="col-sm-8">
                                    {Object.keys(products).map(function (product) {
                                        return (
                                            <ul className="cart-list" key={product}>
                                                <li className="cart-list-item">
                                                    {products[product].quantity + ' x ' + products[product].name}
                                                </li>
                                                <li className="cart-list-item total">Total <span>${self.props.total}</span></li>
                                            </ul>
                                        )
                                    })}
                                </div>
                                <div className="col-sm-4">
                                    {Object.keys(products).map(function (product) {
                                        return (
                                            <div className="row" key={product}>
                                                <button type="button" className="btn btn-gray btn-block remove-item"
                                                    onClick={self.removeFromCart.bind(self, product)} aria-label="remove-item">
                                                    Empty Cart
                                                </button>
                                                <button type="button" className="btn btn-black btn-block view-cart" onClick={self.openCart}
                                                    disabled={Object.keys(self.props.products).length > 0 ? "" : "disabled"}>
                                                    Check Out
                                                    ({self.props.count})
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Cart;
