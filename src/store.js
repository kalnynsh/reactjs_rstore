import {
    createStore,
    applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';

import { DELAYED_ACTION } from './actions/types';

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
    applyMiddleware(
        thunkMiddleware,
        stringMiddleware,
        logMiddleware
    )
);

const delayedActionCreator = (timout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: DELAYED_ACTION,
    }), timout);
};

store.dispatch(delayedActionCreator(3000));

// store.dispatch('TEST_ACTION');

export default store;
