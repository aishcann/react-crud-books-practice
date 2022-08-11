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

	const div = {
		textAlign: 'center',
		position: 'absolute',
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		top: '150px',
		left: 0,
		right: 0,
		bottom: '150px',
	};

	const headerText = {
		color: 'white',
		fontSize: '24px',
		backgroundColor: 'black',
		marginTop: '10px',
		width: '600px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '20px',
	};

	const ul = {
		backgroundColor: 'black',
		width: '600px',
		height: '600px',
		overflowX: 'hidden',
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		borderRadius: '20px',
		lineHeight: '2.5',
	};

	const li = {
		color: 'white',
		textDecoration: 'none',
		border: '1px solid white',
		borderRadius: '20px',
		padding: '10px',
		cursor: 'pointer',
	};

	return (
		<Layout>
			<div style={div}>
				<h1 style={headerText}>Current Books</h1>
				<ul style={ul}>
					{books === null || books.length === 0 ? (
						<h3>no books in the library!</h3>
					) : (
						books.map((book) => {
							return (
								<li key={book._id}>
									<Link
										to={`/books/${book._id}`}
										style={li}>
										{book.title}
									</Link>
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
