import React, {useState, useEffect} from 'react'
import { Redirect, Link} from 'react-router-dom'
import Layout from './../shared/Layout'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const ShowBook = (props) => {

    const [book, setBook] = useState(
        {
            book: null,
            deleted: false
        }
    )

    const id = props.match.params.id

    useEffect(() => {
        axios(`${apiUrl}/books/${id}`)
        .then(res => {
            setBook({
                book: res.data.book
            })
        })
        .catch(console.error)
    }, [id])

    const deleteBook = () => {
        axios.delete(`${apiUrl}/books/${id}`)
        .then(res => {
            setBook({
                deleted: true
            })
        })
        .catch(console.error)

    }

    if (book.deleted) {
        return <Redirect to ={`/books`} />
    }

  return (
		<Layout>
			<h1>Book Details</h1>
			{!book.book ? (
				<h3>loading deets...</h3>
			) : (
				<div>
					<h3>{book.book.title}</h3>
                    <p>Written By: {book.book.author}</p>
                    <Link to={`/books/${id}/edit`}>
                        <button>Update Book</button>
                    </Link>
                    <button onClick={deleteBook}>Delete This Book</button>
				</div>
			)}
		</Layout>
	);
}

export default ShowBook