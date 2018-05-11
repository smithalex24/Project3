import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css'

class MentorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: '',
			experience: ''
		};
	}
	
	fieldChange = (field) => {
		this.setState({ field });
	}
	
	experienceChange = (e) => {
		this.setState({ experience: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Mentor form created!", this.state);
		console.log('user is', this.props.user);
		axios.post('/mentor', {
			userId: this.props.user.id, 
			field: this.state.field,
			experience: this.state.experience
		})
		.then(result => {
			console.log('Yay, it worked!', result);
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}


	render() {
		const { field } = this.state;
		
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>	
					<Select.Creatable removeSelected = {false} displayValue= "Art" multi={true} name="form-field-name" value={field} onChange={this.fieldChange} options={ [{value: 'Photograhy', label: 'Photography'}, {value: 'Animation', label: 'Animation'}] } />
					<div>
						<input name = "Experience" placeholder= "Enter short bio here" value = {this.state.experience} onChange = {this.ExperienceChange} />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>
			</div>
	
		);
	}
}

export default MentorForm;
