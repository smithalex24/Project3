import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Search from './Search';
import { Collapsible, CollapsibleItem, Input } from 'react-materialize'

const medicine = ['Dentistry', 'Gyno', 'Pediatrics']
// const Arts = ['Photography', 'Animation', 'Sculpture', 'Illustration', 'Theatre', 'Strathmore watercolor paper', "Moleskine watercolor journal"]
// const Law = ['Attorney', 'Prosecutor', 'Public Defender', 'Private Practice']
// const Tech = ['Extra-smooth Bristol board', 'Strathmore mixed media paper', 'Micron technical pens']


class MentorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: [],
			experience: ''
		};
	}
	
	fieldChange = (e) => {
		var newField = []
		newField.push(e.target.value)
		this.setState({field: newField});

	}
	
	experienceChange = (e) => {
		// console.log(e.target.value)
		this.setState({ experience: e.target.value });
	}

	formSubmit = (e) => {
		e.preventDefault();
		console.log("Mentor form created!", this.state);
		console.log('user is', this.props.user);
		// this.state.field.push(this.state.field);
		axios.post('http://localhost:3001/mentor', {
			userId: this.props.user.id, 
			// field: ['something here'],
			field: this.state.field,
			experience: this.state.experience
		})
		.then(result => {
			this.setState({ 
				field: result.data.field,
				experience: result.data.experience
			});
			console.log(result)
			console.log('Yay, it worked!', result);
		})
		.catch(err => {
			console.log('ERROR', err);
		});
		
	}

render() {

 var medicineMap = medicine.map((item,index) =>
     <div>
       <li key={index} className='fieldList'>
        <Input name='field' type='checkbox' value= {item} label= {item} className='filled-in style-checkbox' onChange={this.fieldChange} />
       </li>
       <br />
      </div>)




		return (
			<div>
				<form onSubmit = {this.formSubmit}>	
					<div>
						<Collapsible accordion name="Field" >
						  <CollapsibleItem header='Medicine' icon='arrow_drop_down_circle'>
						  	<ul>{medicineMap}</ul>
						  </CollapsibleItem>
						  <CollapsibleItem header="Gyno" icon='arrow_drop_down_circle'>
						  <ul><li>Gyno</li></ul>
						  </CollapsibleItem>
						  <CollapsibleItem header="Pediatrics" icon='arrow_drop_down_circle'>
						   <ul><li>Pediatrics</li></ul>
						  </CollapsibleItem>
						</Collapsible>
						<input name = "Experience" placeholder= "Enter short bio here" value = {this.state.experience} onChange = { this.experienceChange } />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>
			</div>

		);
  }
}


export default MentorForm;