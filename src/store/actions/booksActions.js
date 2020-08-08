import db from '../../services/api'

const booksRef = db.collection('books')

export function getBooks() {
    return (dispatch) => {
        booksRef.onSnapshot((docs) => {
            const booksTmp = []
            docs.forEach((doc) => {
                if (!doc.data().reserved) {
                    booksTmp.push(doc.data())
                }
            })

            dispatch({ type: 'GET_BOOKS', payload: booksTmp })
        })
    }
}

export function getBook(books, id) {
    return (dispatch) => {
        console.log('quantidade de books: ' + books.length)
        console.log('id do book que eu quero: ' + id)

        if (books.length) {
            const book = books.find((book) => book.id === id)
            dispatch({ type: 'GET_BOOK', payload: book })
        } else {
            booksRef
                .doc(id)
                .get()
                .then((doc) =>
                    dispatch({ type: 'GET_BOOK', payload: doc.data() })
                )
        }
    }
}
