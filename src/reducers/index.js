import {
    BOOKS_LOADED
} from '../actions/types';

const booksInitList = [
    {
        id: 1,
        title: 'Production-Ready MicroServices',
        author: 'Susan J. Fowler'
    },
    {
        id: 2,
        title: 'Learning React',
        author: 'Kirupa Chinnathathambi'
    },
];

const initialState = {
    books: booksInitList,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case BOOKS_LOADED:
            return {
                books: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;