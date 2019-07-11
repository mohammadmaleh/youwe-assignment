import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { dashboardReducer } from './dashboard/dashboard.reducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  form: formReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
