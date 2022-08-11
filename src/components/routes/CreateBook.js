import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'
import BookForm from './../shared/BookForm'
import apiUrl from './../../apiConfig'

const CreateBook = () => {

    const initialState = {
        book: {
            title: '',
            author:''
        },
        createdId: null
    }
        
    

    const [book, setBook] = useState(initialState)

    const handleChange = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        //send headers to axios call
        //no need to send headers with GET requests, as it is the default for axios calls
        //will send a request object

        axios({
            method: 'POST',
            url: `${apiUrl}/books`,
            data: { book }
        })
            .then( res => {
                console.log(res.data.book)
                setBook({...book,
                    createdId: res.data.book._id
                })
                console.log(book)
            })
            .catch(() => {
                alert('something went wrong. please try again.')
            })
        }

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
				<h1 style={headerText}>Edit Book</h1>
				<BookForm
					book={book}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					cancelPath={'/books'}
				/>
			</div>
		</Layout>
	);
}

export default CreateBook