// Nit: remove Component since it's not used
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const IndexBooks = () => {

    // Nit: I would set this as an empty array because this will become an array after the setBook call
    const [books, setBooks] = useState(null)

    useEffect(() => {
        axios(apiUrl + '/books')
        .then(res => {
            setBooks(res.data.books)
        })
        .catch(console.error)
    }, [])
    
    // Nit: When working with boolean checks it's best to put them in some kind of easy to read var that says what it's checking for. This will help you in the future and other devs diving in your code. 
    const shouldRenderBooks = books === null || books.length === 0

  return (
		<Layout>
			<h1>Current Books</h1>
			<ul>
				{shouldRenderBooks ? (
					<h3>no books in the library!</h3>
				) : (
					books.map((book) => {
						return (
							<li key={book._id}>
								<Link to={`/books/${book._id}`}>{book.title}</Link>
							</li>
						)
					})
				)}
			</ul>
		</Layout>
	)
}

export default IndexBooks