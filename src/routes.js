const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
} = require('./handler');

const routes = [
    //add books route
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    //get all books route
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    //get books by id route
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    //edit books route
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    //delete books
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    }

];

module.exports = routes;