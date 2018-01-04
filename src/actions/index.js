import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_USER,
    UNAUTH_USER,
	AUTH_ERROR
} from './types';

const ROOT_URL = "http://localhost:3090";

export const signinUser = ({ email, password, error }) => {
    return dispatch => {
    	axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                console.log({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(error => {
                // If request it bad...
                // let error = 'INVALID CREDENTIALS';
                dispatch(authError(error));
                // console.log(authError(error));
            });  
    } 
}

export const signupUser = ({ email, password, error }) => {
    return dispatch => {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token );
                browserHistory.push('/feature');
            })
            .catch(response => dispatch(authError(error)));
    }
}

export function authError(error) {
	return {
        type: AUTH_ERROR,
	    payload: error
	}
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { 
        type: UNAUTH_USER 
    }
}

