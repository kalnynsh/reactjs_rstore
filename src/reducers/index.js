import {
    BOOKS_LOADED
} from '../actions/types';

const booksInitList = [];

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