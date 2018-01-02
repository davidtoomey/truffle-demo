import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar pure-menu pure-menu-horizontal">
      	<a href="#" className="pure-menu-heading pure-menu-link">dapp</a>
      	<ul className="pure-menu-heading pure-menu-link">
					<li style={{ color: "#FFFFFF" }}>
						Sign in
					</li>
				</ul>
      </nav>
		);
	}
}

export default Header;