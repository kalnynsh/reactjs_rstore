import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_FAILURE,
    BOOK_ADDED_TO_CART,
    BOOK_REMOVED_FROM_CART,
    ALL_BOOKS_REMOVED_FROM_CART,
} from '../actions/types';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 187,
};



const updateItem = (book, quantity, item = {}) => {
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
        count: count + quantity,
        subtotal: subtotal + book.price * quantity,
    };
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
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

const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;

    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];  // -1, item=undefined

    const newItem = updateItem(book, quantity, item);

    return {
        ...state,
        cartItems: updateCartItems(
                        cartItems,
                        newItem,
                        itemIndex
                    ),
    };
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
            return updateOrder(state, action.payload, 1);

        case BOOK_REMOVED_FROM_CART:
            return updateOrder(state, action.payload, -1);

        case ALL_BOOKS_REMOVED_FROM_CART:
            const { count } = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -count);

        default:
            return state;
    }
};

export default reducer;
