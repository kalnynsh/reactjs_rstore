import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchBooks, bookAddedToCart } from '../../actions';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((item) => {
                    return <li key={item.id}>
                            <BookListItem
                                book={item}
                                onAddedToCart={() => onAddedToCart(item.id)}
                            />
                        </li>;
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCartDone } = this.props;

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        if (loading) {
            return <Spinner />;
        }

        return <BookList books={books} onAddedToCart={onAddedToCartDone} />;
    }
}

const mapStateToProps = ( { bookList: {books, loading, error} } ) => {
    return {
        books,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCartDone: (id) => dispatch(bookAddedToCart(id)),
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
