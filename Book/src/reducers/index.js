import { combineReducers } from 'redux';
import BookReducer from  './BookReducer'

const rootReducer = combineReducers({
    book: BookReducer
});

export default rootReducer;
