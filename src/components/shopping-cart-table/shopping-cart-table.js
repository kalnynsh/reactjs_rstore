import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart,
} from '../../actions';

const ShoppingCartTable = (
    { items, total, onIncrease, onDecrease, onDelete }
) => {
    const renderRow = (item, idx) => {
        const { id, title, count, subtotal } = item;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${subtotal}</td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-sm btn-outline-success"
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-sm btn-outline-warning"
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id) }
                        className="btn btn-sm btn-outline-danger"
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal,
    };
}

/* Full version
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            return dispatch( bookAddedToCart(id) );
        },

        onDecrease: (id) => {
            return dispatch( bookRemovedFromCart(id) );
        },

        onDelete: (id) => {
            return dispatch( allBooksRemovedFromCart(id) );
        },
    };
};
*/

// Object version
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)
                        (ShoppingCartTable);
