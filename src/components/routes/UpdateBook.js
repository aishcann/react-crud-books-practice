import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Layout from './../shared/Layout'
import BookForm from './../shared/BookForm'
import apiUrl from '../../apiConfig'

const UpdateBook = (props) => {

    const initialState = {
			book: {
				title: '',
				author: '',
			},
			updated: false,
		};

    const [book, setBook] = useState(initialState);

    const id = props.match.params.id

    useEffect(() => {
        axios(`${apiUrl}/books/${id}`)
        .then(res => {
            setBook({
                book: {
                    title: res.data.book.title,
                    author: res.data.book.author
                }
            })
        })
    }, [id])

    const handleChange = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //send headers to axios call
        //no need to send headers with GET requests, as it is the default for axios calls
        //will send a request object

        axios({
            method: 'PATCH',
            url: `${apiUrl}/books/${id}`,
            data: { book },
        })
            .then(() => {
                setBook({ ...book, updated: true });
            })
            .catch(() => {
                alert('something went wrong. please try again.');
            });
    };

  return (
		<Layout>
			<h3>Update Book</h3>
			{!book.updated ? (
				<BookForm
					book={book}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					cancelPath={/books/ % { id }}
				/>
			) : (
				<Redirect to={`/books/${id}`} />
			)}
		</Layout>
	);
}

export default UpdateBook