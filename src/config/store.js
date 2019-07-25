import thunk from 'redux-thunk';
import{createStore, applyMiddleware} from 'redux';
import rootReducers from './rootReducer'
const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)

export default store

