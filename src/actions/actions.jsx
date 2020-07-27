
export const getBooks = (data) => ({
    type: 'GET_BOOKS',
    data
})
export const getBook = (data) => ({
    type: 'GET_BOOK',
    data
})

export const addBook = (data) => ({
    type: 'ADD_BOOK',
    data
})
export const updateBook = (data, id) => ({
    type: 'UPDATE_BOOK',
    id,
    data
})
export const deleteBook = (id) => ({
    type: 'DELETE_BOOK',
    id
})