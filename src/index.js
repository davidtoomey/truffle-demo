import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as actions from './actions';
import AUTH_USER from './actions/types';

import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';

const config = {
  key: 'root',
  storage,
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = persistReducer(config, reducers);

function configureStore () {
  let store = createStoreWithMiddleware(reducer);
  let persistor = persistStore(store);

  return { persistor, store };
}

const { persistor, store } = configureStore();

// const onBeforeLift = () => {
// const token = localStorage.getItem('token');
// // // if there is a token, consider user signed in
// if (token) {
//   store.dispatch({ type: AUTH_USER });
// }
// }
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
        <IndexRoute component={Welcome} />
				<Route path="signin" component={Signin} />
				<Route path="signout" component={Signout} />
				<Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
  		</Route>
  	</Router>
  </PersistGate>
  </Provider>
  , document.getElementById('root'));

