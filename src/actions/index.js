import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_USER,
	AUTH_ERROR
} from './types';
// import { connect } from 'react-redux';

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
    // return function (dispatch) {
    // Submit email/password to the server
    	return axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        // dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route `/feature`
        browserHistory.push('/feature');
        })
        .catch(() => {
        // If request it bad...
        	
        });    
    // } 
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}