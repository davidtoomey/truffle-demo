import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './../../actions';
import { connect } from 'react-redux';
import './signin.css';

class Signin extends Component {
	constructor(props) {
		super(props);

		const {dispatch} = props;
		// const error = props;

		this.boundActionCreators = bindActionCreators(actions, dispatch);
    console.log(this.boundActionCreators);
	}

	componentDidMount() {
		// let { dispatch } = this.props;
		let error = this.props;
	}

	handleFormSubmit({ email, password, error }) {
		let { dispatch } = this.props;
		let action = actions.signinUser({email, password, error});
		dispatch(action);
		// mapStateToProps(error);
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert">
					<div className="alert-warning">
					<strong>oops!</strong> {this.props.errorMessage.toString()}
					</div>
				</div>
			);
		}
	}

	render() {
		// eslint-disable-next-line
		const { handleSubmit, fields: { email, password, error }} = this.props;

		return (
			<form 
			className="container" 
			onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
			>
				<Field 
					name="email" 
					component="input"
					type="text"
					placeholder="email"
				/>
				<Field 
					name="password" 
					component="input"
					type="text"
					placeholder="password"
				/>
				<button action="submit" className="btn btn-primary">Sign in</button>
				{this.renderAlert()}
			</form>
			
		);
	}
}


const mapStateToProps = state => {
	return { errorMessage: state.auth.error };
}


//reduxForm helper behaves like the connect helper
// export default reduxForm({
// 	form: 'signin',
// 	fields: ['email', 'password']
// }, mapStateToProps, actions)(Signin);
export default connect(mapStateToProps, null)(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin));



