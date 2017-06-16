import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BookActions from '../actions/BookActions'

class BookDetail extends Component {



    render(){
        const { book } = this.props;

        if(book === null){
            return(
                <div>
                    Waiting for book to be selected...
                </div>
            )
        }
        return(
            <div>
                <h3>Book Detail</h3>
                <div>Title: {book.title}</div>
                <div>Pages: {book.pages}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }
};


export default connect(mapStateToProps)(BookDetail)