import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE
} from '../actions/types';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Production-Ready MicroServices',
            count: 2,
            subtotal: 64,
        },
        {
            id: 2,
            name: 'Learning React',
            count: 3,
            subtotal: 123,
        },
    ],
    orderTotal: 187,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };

        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
