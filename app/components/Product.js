var React = require('react');
var CartActions = require('../actions/CartActions');

//  product view
var Product = React.createClass({
    getInitialState:function(){
        return {
            isCase: false,
            isBottle: true,
            price: 0,
            bottleQuantity: 0,
            caseQuantity: 0
        }
    },

    setBottleQuantity: function(event){
        var bottleQuantity = event.target.value;
    this.setState({isCase: false, isBottle: true});
    this.setState({bottleQuantity: bottleQuantity, caseQuantity: 0});
    },

    setCaseQuantity: function(event){
        var caseQuantity = event.target.value;
    this.setState({bottleQuantity: 0, caseQuantity: caseQuantity});
    this.setState({isCase: true, isBottle: false});

    },
    // Add item to cart via Actions
    addToCart: function (event) {

        var price = 0,
        quantity = 0,
        type = 'bottle';

        if(this.state.isCase){
            type = 'case';
            price =  this.props.selected.casePrice;
            quantity = this.state.caseQuantity;
        }else{
            type = 'bottle';
            price =  this.props.selected.bottlePrice;
            quantity = this.state.bottleQuantity;
        }

        // console.log("this.props.product.name  "+this.props.product.name);
        var update = {
            name: this.props.product.name,
            type: type,
            price: price,
            quantity:quantity
        };
        var cartProduct = this.props.product.id;

        CartActions.addToCart(cartProduct, update);
        CartActions.updateCartVisible(true);
    },

    // Select product variation via Actions
    selectVariant: function (event) {
        CartActions.selectProduct(event.target.value);
    },

    // Render product View
    render: function () {
        var ats = 10
        // (this.props.selected.id in this.props.cartitems) ?
        // this.props.selected.inventory - this.props.cartitems[this.props.selected.id].quantity :
        //   this.props.selected.inventory;

        return (
            <div id="productItem" className="col-sm-4 col-md-4">
                <div className="col-sm-4">
                    <div className="row">
                        <img width="100px" height="auto"
                            src={this.props.product.image}
                            alt={this.props.product.name}/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="caption">
                        <h3>{this.props.product.name}</h3>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 border-dotted">
                            <div className="bottle">Bottle</div>
                            <div className="price">${this.props.selected.bottlePrice}</div>
                            <div className="quantity">
                                <div className="input-group">
                                    <input ref='bottleQuantity' name='bottleQuantity' className="form-control"
                                        value={this.state.bottleQuantity} onChange={this.setBottleQuantity} />
                                    <label htmlFor="bottleQuantity">Qty</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div className="case">Case</div>
                            <div className="price">${this.props.selected.casePrice}</div>
                            <div className="quantity">
                                <div className="input-group">
                                    <input ref='caseQuantity' name='caseQuantity' className="form-control"
                                        value={this.state.caseQuantity} onChange={this.setCaseQuantity}/>
                                    <label htmlFor="caseQuantity">Qty</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row actions">
                        <div className="col-xs-6">
                            <button className="btn btn-details" type="button"
                                role="button">Details</button>
                        </div>
                        <div className="col-xs-6">
                            <button className="btn btn-cart" type="button"
                                role="button" onClick={this.addToCart}
                                disabled={ats > 0 ? '' : 'disabled'}>
                                {ats > 0 ? 'Add To Cart' : 'Sold Out'} </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Product;
