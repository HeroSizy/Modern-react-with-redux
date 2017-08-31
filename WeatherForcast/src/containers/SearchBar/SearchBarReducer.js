import {type as SearchBarActionType} from './SearchBarAction'

const SearchBarReducer = (state = [], action) => {

    switch(action.type){
        case SearchBarActionType.FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
};


export default SearchBarReducer