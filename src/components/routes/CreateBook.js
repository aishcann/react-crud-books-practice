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
                setBook({...book,
                    createdId: res.data.book._id
                })
            })
            .catch(() => {
                alert('something went wrong. please try again.')
            })
        }

        const text = {
            fontSize: 24
        }

  return (
    <Layout>
        <h1 style={text}>Edit Book</h1>
        <BookForm 
            book={book}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            cancelPath={'/books'}
        />
    </Layout>
  )
}

export default CreateBook