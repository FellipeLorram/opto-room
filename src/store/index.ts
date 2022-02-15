import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './Modules/reduxPersist';

import rootReducer from './Modules/rootReducers';
import rootSaga from './Modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers(rootReducer), {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
