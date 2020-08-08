const INITIAL_STATE = {
    books: [],
    book: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, books: action.payload }
        case 'GET_BOOK':
            return { ...state, book: action.payload }
        default:
            return state
    }
}
