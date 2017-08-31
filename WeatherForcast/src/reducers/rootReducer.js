import { combineReducers } from 'redux';
import SearchBarReducer from '../containers/SearchBar/SearchBarReducer'

const rootReducer = combineReducers({
    weather: SearchBarReducer
});

export default rootReducer;
