import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    BOOK_ADDED_TO_CART
} from '../actions/types';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 187,
};

const updateItem = (book, item = {}) => {
    // If item = {}, use defaults { id = book.id, ...}
    const {
        id = book.id,
        count = 0,
        title = book.title,
        subtotal = 0
    } = item;

    return {
        id,
        title,
        count: count + 1,
        subtotal: subtotal + book.price,
    };
};

const updateCartItems = (cartItems, item, idx) => {

    if (idx < 0) {
        return [
            ...cartItems,
            item,
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
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

        case BOOK_ADDED_TO_CART:
            const bookId = action.payload;
            const book = state.books.find((item) => item.id === bookId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);

            const item = state.cartItems[itemIndex];  // -1, item=undefined

            const newItem = updateItem(book, item);

            return {
                ...state,
                cartItems: updateCartItems(
                                state.cartItems,
                                newItem,
                                itemIndex
                            ),
            };

        default:
            return state;
    }
};

export default reducer;
