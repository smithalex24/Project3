
import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zipcode: '',
			results: [
			{
				name: '',
				email: '',
				zipcode: ''
			}
			]
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
		console.log('this is res data: ', res.data)
		console.log('if i grabbed user 0: ', res.data[0].name )
		this.setState({
			// results : [{
				name : res.data.name,
				email: res.data.email
		
		})
		console.log('here is the state at the end of the call: ', this.state)
		console.log('res data name:', this.state.name)
		console.log('res data results:', this.state.results)
		console.log('res data email:', this.state.email)
		console.log('this is the state after call:', this.state);
		console.log('results from axios call', res.data);
	})
	.catch(err => {
		console.log('ERROR', err);
	});
}


	render() {

	
		return (
			<div>
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

