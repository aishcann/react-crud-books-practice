import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './../shared/Layout';
import axios from 'axios';
import apiUrl from './../../apiConfig';

const IndexBooks = () => {
	const [books, setBooks] = useState(null);

	useEffect(() => {
		axios(apiUrl + '/books')
			.then((res) => {
				setBooks(res.data.books);
			})
			.catch(() => {
				alert('something went wrong. please try again.');
			});
	}, []);

	const headerText = {
		color: 'white',
		fontSize: '24px',
		backgroundColor: 'black',
		marginTop: '10px',
		width: '200px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const ul = {
		backgroundColor: 'black',
		width: '600px',
		height: '600px',
		overflowY: 'scroll',
        listStyle: 'none',
        display: 'flex',
	};

	const li = {
		color: 'white',
		textDecoration: 'none',
        border: '1px solid white',
        borderRadius: '20px',
	};

	return (
		<Layout>
			<div>
				<h1 style={headerText}>Current Books</h1>
				<ul style={ul}>
					{books === null || books.length === 0 ? (
						<h3>no books in the library!</h3>
					) : (
						books.map((book) => {
							return (
								<li key={book._id}>
									<Link to={`/books/${book._id}`} style={li}>{book.title}</Link>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</Layout>
	);
};

export default IndexBooks;
