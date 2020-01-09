import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
	const [books, setBooks] = useState([
		{ title: 'Name of the wind', author: 'Patrick Rothfuss', id: 1 },
		{ title: 'The way of Kings', author: 'Brandon Sanderson', id: 2 },
		{ title: 'The final Empire', author: 'Jim Henderson', id: 3 },
		{ title: 'The hero of ages', author: 'Dummy Name', id: 4 }
	]);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};

	const removeBook = id => {
		setBooks(books.filter(book => book.id !== id));
	};

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
