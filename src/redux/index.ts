import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { dashboardReducer } from './dashboard/dashboard.reducers';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    dahsboard: dashboardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware, logger];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    return store;
}
