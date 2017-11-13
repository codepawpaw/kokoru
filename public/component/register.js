import React from "react";
import { connect } from "react-redux";

import styles from "components/register.css";
import helper from "stylesheets/helpers.css";
import icon from "stylesheets/icon.css";
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import UserProtocol from "protocols/user_protocol";
import UserModel from "models/user_model";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.registerClick = this.registerClick.bind(this); 
	}

	registerClick(e) {
		e.preventDefault();

		let username = document.querySelector("#username");
		let password = document.querySelector("#password");
		
		this.register(username, password);
	}

	register(username, password) {
		UserProtocol.register(new UserModel({ username: username, password: password }));
	}

	render() {
		return (
			<div className={ [styles.registerContainer, helper.absoluteCenter].join(' ') }>
				<div className={ styles.container }>
			        <div className={ [styles.wrapper, styles.wrapperBlue, helper.textLeft ].join(' ') }>
			          <div className={ styles.box }>
			            <i className={ [helper.icon].join(' ') }>
			            	<img src="../resources/logo/sumut-tekno.svg" />
			            </i>
			            <h2 className={ styles.welcomeTitle }>Welcome</h2>
			            <p className={ styles.welcomeText }>
			              Now you can quickly search basketball mates from your computer.
			            </p>
			          </div>
			        </div>
			        <div className={ [styles.wrapper, helper.textCenter].join(' ') }>
			          <div className={ styles.box }>
			          	<TextField
				          id="username"
				          label="Username"
				          margin="normal"
				        />
				        <TextField
				          id="password"
				          label="Password"
				          type="password"
				          margin="normal"
				        />
			            <Button raised color="primary" onClick={ this.registerClick } className={ styles.registerButton }>
					      Register
					    </Button>
			          </div>
			        </div>
			     </div>
		     </div>
		);
	}
}

export default Register;