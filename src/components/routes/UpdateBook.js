import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout'
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

  return (
		<Layout>
			<div style={div}>
				<h3 style={headerText}>Update Book</h3>
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
			</div>
		</Layout>
	);
}

export default UpdateBook