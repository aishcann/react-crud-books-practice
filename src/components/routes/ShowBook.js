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
        axios
            .delete(`${apiUrl}/books/${id}`)
            .then(() => {
                setBook({
                    deleted: true,
                });
            })
            .catch(() => {
                alert('something went wrong. please try again.');
            });
    }

    if (book.deleted) {
        return <Redirect to ={`/books`} />
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

        const show = {
            color: 'white',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '600px',
            height: '600px',
            borderRadius: '20px',
        };

        const button = {
            width: '200px',
            height: '40px',
            marginTop: '20px',
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            borderRadius: '20px',
        };


  return (
		<Layout>
			<div style={div}>
				<h1 style={headerText}>Book Details</h1>
				{!book.book ? (
					<h3>loading deets...</h3>
				) : (
					<div style={show}>
						<h3>{book.book.title}</h3>
						<p>Written By: {book.book.author}</p>
						<Link to={`/books/${id}/edit`}>
							<button style={button}>Update Book</button>
						</Link>
						<button onClick={deleteBook} style={button}>Delete This Book</button>
					</div>
				)}
			</div>
		</Layout>
	);
}

export default ShowBook