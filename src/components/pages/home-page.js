import React from 'react';
import BookList from '../book-list';
import BookstoreService from '../../services/bookstore-service';

const HomePage = () => {
    const booksService = new BookstoreService();
    const booksList = booksService.getBooks();

    return (
        <BookList books={booksList} />
    );
};

export default HomePage;
