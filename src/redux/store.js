import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReduser';

const middleware = [thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducers, composeEnhancers);
export default store;
