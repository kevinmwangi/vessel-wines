var React = require("react");
var Product = require("./Product");
var _ = require('lodash');

module.exports = React.createClass({
    getInitialState:function(){
        return {
            currentPosition: 0,
            hasMoreItems: true,
            page_size: 10
        }
    },

    loadItems(page) {
        var myProducts = [];
        myProducts = this.props.products;
        var productsNumber = this.props.products.length;
        var currentPosition = this.state.currentPosition;
        var i = currentPosition;
        for( ;i < productsNumber ; i++){
            var product =  this.props.products[i];
            myProducts.push(product);
        }

        if(i === productsNumber){
            this.setState({hasMoreItems : false});
        }
        this.setState({products : myProducts});
        this.setState({currentPosition : i});

        // console.log(" i "+i+"currentPosition "+currentPosition+" productsNumber "+productsNumber);
        //this.setState();
    },

    componentDidMount:function(){

        //Use smooth scrolling when clicking on navigation
        $('.item-row a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') ===
            this.pathname.replace(/^\//,'') &&
            location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top-5+2
                    }, 500);
                    return false;
                } //target.length
            } //click function
        }); //smooth scrolling
    },

    render:function(){

        var items = [];
        this.props.products.map((product, index) => {
            items.push(
                <Product
                    key={index}
                    product={product}
                    cartitems={this.props.cartItems}
                    selected={this.props.selectedProduct}/>
            );
        });

        items = _.chunk(items, 3).map(function(group, index) {
            var rowId = index + 1;
            return <div id={"item"+index} className="row item-row" key={index}>{group}<a className="row-anchor" href={"#item"+ rowId}><span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a></div>
        });

        return(
            <div className="container">
                <div className='row'>
                    {items}
                </div>
            </div>
        )
    }
});
