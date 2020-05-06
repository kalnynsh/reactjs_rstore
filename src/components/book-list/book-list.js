import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import './book-list.css';

class BookList extends Component {
    state = {
        loading: false,
    };

    render() {
        const { books } = this.props;

        return (
            <ul>
                {
                    books.map((bookitem) => {
                        return <li key={bookitem.id}><BookListItem book={bookitem} /></li>;
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {
        books
    };
};

export default connect(mapStateToProps)(BookList);
