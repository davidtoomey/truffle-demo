import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';


const appReducer = combineReducers({
	form,
	auth
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
}

export default rootReducer;
