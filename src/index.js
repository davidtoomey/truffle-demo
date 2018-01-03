import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
				<Route path="signin" component={Signin} />
  		</Route>
  	</Router>
  </Provider>
  , document.getElementById('root'));

