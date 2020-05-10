import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchBooks } from '../../actions';

import './book-list.css';

const BookList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map((item) => {
                    return <li key={bookitem.id}><BookListItem book={item} /></li>;
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
        const { books, loading, error } = this.props;

        if (error) {
            return <ErrorIndicator error={error} />;
        }

        if (loading) {
            return <Spinner />;
        }

        return <BookList books={books} />;
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
        fetchBooks: fetchBooks(bookstoreService, dispatch),
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
