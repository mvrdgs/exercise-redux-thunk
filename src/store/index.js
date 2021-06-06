// Importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Importe o redux-thunk
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Aplique o middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
