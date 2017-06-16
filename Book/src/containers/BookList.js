import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BookActions from '../actions/BookActions'

class BookList extends Component {

    bookListItems() {
        const { books, selectBook } = this.props;
        return books.map(book => {
            return(
                <li
                    key={ book.title }
                    className="list-group-item"
                    onClick={() => selectBook(book) }
                >
                    {book.title}
                </li>
            )
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
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

const mapDispatchToProps = (dispatch) => {
    return{
        getAllBook: () => { dispatch( BookActions.getAllBook() ) },
        selectBook: (book) => { dispatch( BookActions.selectBook(book)) }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);