import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions';

class Feature extends Component {

	componentWillMount() {
		// let message = this.props;
		// let {dispatch} = this.props;
		// let action = actions.fetchMessage();
		// dispatch(action);
	}

	// handleFormSubmit({ meme }) {
	// 	let { dispatch } = this.props;
	// 	let action = actions.uploadMeme({ meme });
	// 	dispatch(action);
	// 	// mapStateToProps(error);
	// }

	render() {
		// const { handleSubmit, fields: { meme }} = this.props;


		return (
			<div>
			what the fuccckkkkkk
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);

