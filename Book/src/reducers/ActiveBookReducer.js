import { BookActionType } from '../actions'

const ActiveBookReducer = (state = null, action) => {
    switch (action.type){

        case BookActionType.SELECT_BOOK:
            return action.book;

        default:
            return state;
    }
};

export default ActiveBookReducer