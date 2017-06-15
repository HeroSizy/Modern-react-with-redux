import React, {Component} from 'react'

class BookList extends Component {

	bookListItems() {
		return this.props.books.map(book = > {
		< li >

			<
			/ li >
			})
			}

			render() {
			return (
			< ul >
			{this.bookListItems()
			}
			</
			ul >
			)
			;
		}
			}
