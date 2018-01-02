import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import * as actions from './../../actions';
// import { connect } from 'react-redux';

class Signin extends Component {
	
	handleFormSubmit({ email, password }) {
		actions.signinUser({email, password});
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		// eslint-disable-next-line
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
			<Form 
			className="container" 
			onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
			>
				<Field 
					name="email" 
					component="input"
					type="text"
					placeholder="First Name"
				/>
				<Field 
					name="password" 
					component="input"
					type="text"
					placeholder="password"
				/>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</Form>
		);
	}
}

// Signin.propTypes = {

// };	

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}


//reduxForm helper behaves like the connect helper
export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);



