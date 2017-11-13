class UserModel {
	constructor(element = {}) {
		this._username = element.username;
		this._password = element.password;
	}

	get username() {
		return this._username || ""; 
	}

	get password() {
		return this._password || "";
	}
}

export default UserModel;