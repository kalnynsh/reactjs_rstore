import {
    BOOKS_LOADED
} from './types';

const booksLoaded = (newBooks) => {
    return {
        type: BOOKS_LOADED,
        payload: newBooks,
    }
};

export {
    booksLoaded
};