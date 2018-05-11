import React, { Component } from 'react';
import StudentForm from './StudentForm';
import MentorForm from './MentorForm';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';



class Profile extends Component {

	constructor(props){
		super(props);
		this.state = {
			field: [],
			experience: ''
		}
	};

componentDidMount () {
if (this.props.user) {
  if (this.props.user.mentor) {
  axios.get('http://localhost:3001/mentor/' + this.props.user._id)
			.then(results => {
				this.setState ({
					field: results.data.field,
					experience: results.data.experience
				})
			}).catch(err => {
				console.log('ERROR', err);
			});
		}
  

  else {
	axios.get('http://localhost:3001/student/' + this.props.user.id)
			.then(results => {
				this.setState ({
					field: results.data.field,
					experience: results.data.experience
				})
			}).catch(err => {
				console.log('ERROR', err);
			});

		}
	}
//passing formsubmit as props in mentorform
	formSubmit = (e) => {
		e.preventDefault();
		console.log("Mentor form created!", this.state);
		console.log('user is', this.props.user);
		axios.post('http://localhost:3001/mentor', {
			userId: this.props.user.id, 
			// field: ['something here'],
			field: this.props.field,
			experience: this.props.experience
		})
		.then(result => {
			this.setState({ 
				field: result.data.field 
			});
			console.log(result)
			console.log('Yay, it worked!', result);
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}

  	}
  }
}




	
	render() {
		if(this.props.user && this.props.user.mentor){
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>

					<MentorForm user={this.props.user} formSubmit={this.formSubmit} />
					<p>{this.state.field}</p>

					<MentorForm user={this.props.user}/>

				</div>
			);
		}

		else if (this.props.user && !this.props.user.mentor) {
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
					<StudentForm user={this.props.user}/>
					<Link to = "/search"> Find a Mentor</Link>
				</div>
			)
		} else {
			 return(
           		 <Redirect to = "/" />
           		 );
		}		
	}
}


export default Profile;