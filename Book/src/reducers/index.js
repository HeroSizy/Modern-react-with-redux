import { combineReducers } from 'redux';
import BookReducer from  './BookReducer'
import ActiveBookReducer from './ActiveBookReducer'

const rootReducer = combineReducers({
    book: BookReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
