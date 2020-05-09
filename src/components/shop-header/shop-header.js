import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="row shop-header">
            <Link to="/" >
                <div className="logo text-dark" href="#">R-Store</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    &nbsp;{numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;