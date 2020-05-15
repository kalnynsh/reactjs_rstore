import {
    createStore,
    applyMiddleware,
} from 'redux';

import reducer from './reducers';

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    console.log('Done:', action.type,', with state:', getState());

    return next(action);
};

const stringMiddleware = () => (next) => (action) => {

    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }

    return next(action);
};

const store = createStore(
    reducer,
    applyMiddleware(stringMiddleware, logMiddleware)
);

store.dispatch('TEST_ACTION');

export default store;
