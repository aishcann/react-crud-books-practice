// home has nav, footer and state that changes component view.
import React, { Component } from 'react';
import Layout from '../shared/Layout';

// page state has function that will change to books, new or update based on what is clicked in the nav
export default class Home extends Component {
	render() {
		const text = {
			textAlign: 'center',
			height: '300px',
			width: '300px',
			backgroundColor: 'black',
			color: 'white',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			margin: 'auto',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			borderRadius: '20px'
		};
        
		return (
			<Layout>
				<div style={text}>
					<h4>Create.Read.Update.Delete.</h4>
				</div>
			</Layout>
		);
	}
}
