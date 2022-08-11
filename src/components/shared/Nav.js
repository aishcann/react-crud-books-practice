import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = {
  width: '300px',
	display: 'flex',
	justifyContent: 'space-between',
};

const link = {
  color: 'white',
  fontWeight: 500,
  textDecoration: 'none',
  border: '1px solid white',
  padding: '8px',
  borderRadius: '10px'
}

const Nav = () => (
	<nav className='nav' style={nav}>
		<NavLink to='/' style={link}>
			Home
		</NavLink>
		<NavLink to='/books' style={link}>
			Books
		</NavLink>
		<NavLink to='/create-book' style={link}>
			Create Book
		</NavLink>
	</nav>
);

export default Nav;
