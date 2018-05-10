import React, { Component } from 'react';

class MentorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: '',
			description: ''
		};
	}
	
	fieldChange = (e) => {
		this.setState({ experience: e.target.value });
	}
	
	descriptionChange = (e) => {
		this.setState({ description: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Mentor form created!", this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit = {this.handleSubmit}>
					<div>
						<input name = "Field" placeholder = "Write your field of expertise" value = {this.state.field} onChange = {this.fieldChange} />
					</div>
					<div>
						<input name = "Description" value = {this.state.description} onChange = {this.descriptionChange} />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>
			</div>
	
	
		);
	}
}

export default MentorForm;