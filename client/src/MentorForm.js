import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



class MentorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: [],
			experience: ''
		};
		this.fieldChange = this.fieldChange.bind(this)
		this.experienceChange = this.experienceChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}
	
	fieldChange = (field) => {
		console.log(field)
		this.setState({ field })
	}
	
	experienceChange = (e) => {
		this.setState({ experience: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log("Mentor form created!", this.state)
		console.log('user is', this.props.user);
		axios.post('http://localhost:3001/mentor', {
			userId: this.props.user.id, 
			field: this.state.field,
			experience: this.state.experience
		})
		.then(result => {
			console.log('Yay, it worked!', result)
		})
		.catch(err => {
			console.log('ERROR', err)
		});
	}


	render() {
		const { field } = this.state
		const value = field && field.value
		console.log("this is the field...")
		console.log(field)
		console.log("this is the field value...")
		console.log(field.value)
		console.log("this is the field value...")
		console.log(field.value)
		
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>	
					<Select.Creatable removeSelected = {false} displayValue= "Art" multi={true} name="form-field-name" value={field.label} onChange={this.fieldChange} options={ [{value: 'Photograhy', label: 'Photography'}, {value: 'Animation', label: 'Animation'}] } />
					<div>
						<input name = "Experience" placeholder= "Enter short bio here" value = {this.state.experience} onChange = {(e) => this.experienceChange(e)} />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>
			</div>

	
		);
	}
}

export default MentorForm;
