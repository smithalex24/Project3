import React, { Component } from 'react';
import StudentForm from './StudentForm';
import MentorForm from './MentorForm';
import { Redirect } from 'react-router-dom';
import Search from './Search.js';
import Home from './Home.js';

class Profile extends Component {
	
	render() {
		if(this.props.user && this.props.user.mentor){
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
					<MentorForm />
					<Search />
				</div>
			);
		}

		else if (this.props.user && !this.props.user.mentor) {
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
					<StudentForm user={this.props.user}/>
				</div>
			)
		} else {
			 return(
           		 <Redirect to = "/" />);
            	
		}		
	}
}


export default Profile;