import React from 'react';

const footer = {
	position: 'absolute',
	bottom: 0,
	backgroundColor: 'black',
	width: '100%',
	textAlign: 'center',
	paddingTop: '10px',
  color: 'white'
};

const Footer = () => (
	<div className='footer' style={footer}>
		<p>Created by Aisha Cannon</p>
	</div>
);

export default Footer;
