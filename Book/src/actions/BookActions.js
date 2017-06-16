
export const type = {
    GET_ALL_BOOKS: 'GET_ALL_BOOKS',
    SELECT_BOOK: 'SELECT_BOOK'
};


export const getAllBook = () => {
    return {
        type : type.GET_ALL_BOOKS
    }
};

export const selectBook = (book) => {
    console.log(`Book has been selected: <${book.title}>`);
    return {
        type: type.SELECT_BOOK,
        book
    }
};