import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BookActions from '../../actions/BookActions'

class BookList extends Component {

    bookListItems() {
        const { books } = this.props;
        return books.map(book => {
            return(
                <li key={book.title}>
                    {book.title}
                </li>
            )
        });
    }


    render(){
        return (
            <ul>
                {this.bookListItems()}
            </ul>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.book
    }
};

const mapActionToProps = (dispatch) => {
    return{
        getAllBook:() => { dispatch( BookActions.getAllBook() ) }
    }
};


export default connect(mapStateToProps, mapActionToProps)(BookList);