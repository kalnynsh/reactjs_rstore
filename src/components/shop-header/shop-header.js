import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="row shop-header">
            <a className="logo text-dark" href="#">R-Store</a>
            <a  href="#" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                &nbsp;{numItems} items (${total})
            </a>
        </header>
    );
};

export default ShopHeader;