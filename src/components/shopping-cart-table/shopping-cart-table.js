import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Production-Ready MicroServices</td>
                        <td>2</td>
                        <td>$32</td>
                        <td>
                            <button className="btn btn-sm btn-outline-success">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-sm btn-outline-warning">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Total: $64
            </div>
        </div>
    );
};

export default ShoppingCartTable;
