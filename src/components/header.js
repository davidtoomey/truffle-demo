import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	render() {
		return (
			<nav className="navbar pure-menu pure-menu-horizontal">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						Sign In
					</li>
				</ul>
      </nav>
		);
	}
}

const mapStateToProps = state => {
	return { 
		authenticated: state.auth.authenticated 
	};
}

export default connect()(Header);