import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zipcode: ''
		};
	}

handleZipChange = (e) => {
		this.setState({ zipcode: e.target.value });
	}

handleSearch = (e) => {
	e.preventDefault();
	console.log("Zip was submitted!", this.state);
	axios.post('http://localhost:3001/getusersnearby', {zipcode: this.state.zipcode})
	.then(res => {
		const results = res.data;
		console.log('results from axios call', res.data);
	})
	.catch(err => {
		console.log('ERROR', err);
	});
}


	render() {
	
		return (
			<div>
				<h2>Search for nearby Mentors</h2>
				<form onSubmit = {this.handleSearch}>
					<div>
						<input name = "Zipcode" placeholder = "What is your Zipcode?" value = {this.state.zipcode} onChange = {this.handleZipChange} />
					</div>
					<input type = "submit" value = "Search!" className = "button" />
				</form>
			</div>
	
	
		);


	}
}

export default Search;

