import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;