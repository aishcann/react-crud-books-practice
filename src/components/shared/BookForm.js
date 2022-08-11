import React from 'react'
import { Link } from 'react-router-dom'

// book form needs to have two inputs, a submit button, maybe a cancel button would be nice
// book form will use functions that are passed to it as props
// the book form will update state for its parent component

const form = {
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

const label = {
  fontSize: '20px',
  paddingBottom: '10px'
}

const input = {
  width: '500px',
  borderRadius: '20px'
}

const button = {
  width: '100px',
  height: '40px',
  marginTop: '20px',
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid white',
  borderRadius: '20px'
}

const BookForm = ({ book, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit} style={form}>
    <label style={label}>Title</label>
    <input
      style={input}
      placeholder="Some Book Title"
      value={book.title}
      name="title"
      onChange={handleChange}
    />
    <label style={label}>Author</label>
    <input
      style={input}
      placeholder="Some Author"
      value={book.author}
      name="author"
      onChange={handleChange}
    />
    <button type="submit" style={button}>Submit</button>
    <Link to={cancelPath}>
      <button style={button}>Cancel</button>
    </Link>
  </form>
)

export default BookForm
