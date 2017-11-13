import React from "react";
import { shallow, mount } from "enzyme";

import Register from "components/register";
import UserProtocol from "protocols/user_protocol";
import UserModel from "models/user_model";

describe("<Register />", () => {
  it("should render a register form", () => {
    let rendered;

    rendered = shallow(<Register />);
  });
});

describe("#registerClick", () => {
  it("should call Register#register when clicked on register button", () => {
	let component, e, rendered, spy;

	e = { preventDefault: jasmine.createSpy("preventDefault") }; 

	spy = spyOn(Register.prototype, "register");
	rendered = mount(<Register />);	
	rendered.find('button').simulate('click', 'using prototype');

	expect(spy).toHaveBeenCalled();
  });
});

describe("#register", () => {
	it("should call UserProtocol#register", () => {
		let stubUserModel, component;

		stubUserModel = new UserModel({ username: "stub-username", password: "stub-password" });

		spyOn(UserProtocol, "register");

		component = new Register();
		component.register("stub-username", "stub-password");

		expect(UserProtocol.register).toHaveBeenCalledWith(stubUserModel);
	});
});