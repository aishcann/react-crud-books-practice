// Nit: add spaces around useState and useEffect
import React, {useState, useEffect} from 'react'
// Nit: add ending space around Link
import { Redirect, Link} from 'react-router-dom'
import Layout from './../shared/Layout'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const ShowBook = (props) => {

    // Nit: Since in IndexBook you saved the intial state var you should carry that over here
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
        // handle error correctly here. Message the user
        .catch(console.error)
    }, [id])

    const deleteBook = () => {
        axios.delete(`${apiUrl}/books/${id}`)
        // can remove the `res` since it's not used here
        .then(res => {
            setBook({
                deleted: true
            })
        })
        // handle error correctly here. Message the user
        .catch(console.error)

    }

    if (book.deleted) {
        return <Redirect to ={`/books`} />
    }

  return (
		<Layout>
			<h1>Book Details</h1>
            {/** Since this is a single check here and it's a bang check I would say this wouldn't need a seperate var that is named. Although I will say that constistancy is really big in code so if eveywhere else in your code you have pulled out the boolean checks and named them then you should do it here */}
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