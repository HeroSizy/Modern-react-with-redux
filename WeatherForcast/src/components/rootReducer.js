import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBar/SearchBarReducer'

const rootReducer = combineReducers({
    weather: SearchBarReducer
});

export default rootReducer;
