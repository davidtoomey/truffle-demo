import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
	constructor(props) {
		super(props);

		const {dispatch} = props;
		// const error = props;

		this.boundActionCreators = bindActionCreators(actions, dispatch);
    console.log(this.boundActionCreators);
	}

	handleFormSubmit({ email, password, passwordConfirm, error }) {
		let { dispatch } = this.props;
		let action = actions.signupUser({ email, password, passwordConfirm, error });
		dispatch(action);
		// mapStateToProps(error);
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert">
					<div className="alert alert-danger">
					<strong>oops!</strong> {this.props.errorMessage.toString()}
					</div>
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field 
					name="email" 
					component="input"
					type="text"
					placeholder="Email:"
					className="form-control"
				/>

				<Field 
					name="password" 
					component="input"
					type="text"
					placeholder="Password:"
					className="form-control myPadding"
					type="password"
				/>

				<Field 
					name="passwordConfirm" 
					component="input"
					type="text"
					placeholder="Confirm Password:"
					className="form-control"
					type="password"
				/>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign Up</button>
			</form>
		);
	}
}

const validate = ({ email, password, passwordConfirm }) => {
	const errors = {};

	if (!email) {
		errors.email = 'Please enter an email';
	}

	if (!password) {
		errors.password = 'Please enter a password';
	}

	if (!passwordConfirm) {
		errors.passwordConfirm = 'Please enter a password confirmation';
	}

	if (password !== passwordConfirm) {
		errors.password = 'Passwords do not match.';
	}
	console.log(errors.password)
	return errors;
}

const mapStateToProps = state => {
	return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, null)(reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(Signup));

