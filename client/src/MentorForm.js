import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Search from './Search';


class MentorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: [],
			experience: ''
		};
	}
	
	fieldChange = (field) => {
		this.setState({ field });
	}
	
	experienceChange = (e) => {
		this.setState({ experience: e.target.value });
	}

render() {

		return (
			<div>
				<form onSubmit = {this.props.formSubmit}>	
					<div>
						<input name = "Experience" placeholder= "Enter short bio here" value = {this.state.experience} onChange = {this.experienceChange} />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>

			</div>

		);
	}
}

export default MentorForm;

