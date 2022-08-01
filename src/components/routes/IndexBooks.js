import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const IndexBooks = () => {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        axios(apiUrl + '/books')
        .then(res => {
            setBooks(res.data.books)
        })
        .catch(console.error)
    }, [])

  return (
    <Layout>
        <h1>Current Books</h1>
        <ul>
            {books === null || books.length === 0? <h3>no books in the library!</h3> : 
            books.map((book) => {
                return (
                    <li key={book._id}>
                        <Link to={`/books/${book._id}`}>{book.title}</Link>
                    </li>
                );
            })}
        </ul>
    </Layout>
  )
}

export default IndexBooks