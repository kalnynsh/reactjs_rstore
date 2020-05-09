import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {
    booksLoaded,
    booksRequested,
    booksError,
} from '../../actions';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        if (loading) {
            return <Spinner />;
        }

        return (
            <ul className="book-list">
                {
                    books.map((bookitem) => {
                        return <li key={bookitem.id}><BookListItem book={bookitem} /></li>;
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: () => {
            dispatch(booksRequested());

            bookstoreService.getBooks()
                .then((data) => {
                    dispatch( booksLoaded(data) );
                })
                .catch((error) => {
                    dispatch( booksError(error) );
                });
        },
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
