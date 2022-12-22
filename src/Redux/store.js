// import { configureStore } from '@reduxjs/toolkit'
// import initialPayloadReducer from './Reducer/initialPayloadReducer';


// export const store = configureStore({
//     reducer: {
//         "initial": initialPayloadReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// })
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

// export default store;






