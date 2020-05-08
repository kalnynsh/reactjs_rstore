import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded } = this.props;

        bookstoreService.getBooks()
            .then((data) => {
                booksLoaded(data);
            })
        ;
    }

    render() {
        const { books, loading } = this.props;

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

const mapStateToProps = ({books, loading}) => {
    return {
        books,
        loading
    };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
