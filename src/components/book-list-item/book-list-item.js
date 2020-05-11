import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { id, title, author, price, coverImage } = book;

    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} width="140px" alt="Book`s cover" />
            </div>
            <div className="book-details">
                <span key={id} className="book-title">{ title }</span>
                <div className="book-author">{ author }</div>
                <div className="book-price ">${ price }</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;
