import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const Persist = (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'OPTO_ROOM',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducers;
};

export default Persist;
