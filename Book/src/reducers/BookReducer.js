import {BookActionType} from '../actions'
import redux from 'redux'

const BookReducer = (state, action) => {
    switch(action.type){
        case BookActionType.GET_ALL_BOOKS:
            return(
                [
                    {title: 'Harry Potter'},
                    {title: 'JavaScript: The Good Part'},
                    {title: 'The Dark Tower'},
                    {title: 'Eloquent Ruby'}
                ]
            )
        default:
            return [
                {title: 'Harry Potter', pages: 101},
                {title: 'JavaScript: The Good Part', pages: 34},
                {title: 'The Dark Tower', pages: 87},
                {title: 'Eloquent Ruby', pages: 1}
            ];
    }
};

export default BookReducer