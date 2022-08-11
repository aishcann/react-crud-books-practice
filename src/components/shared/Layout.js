import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './../../App.css';


const div = {
	backgroundColor: 'black',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: 'white',
	paddingBottom: '15px',
};

const Layout = (props) => (
	<div>
		<div className='header' style={div}>
			<h1>IcePops Library</h1>
			<Nav />
		</div>

		{props.children}

		<Footer />
	</div>
);

export default Layout;
