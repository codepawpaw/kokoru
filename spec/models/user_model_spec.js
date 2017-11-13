import UserModel from "models/user_model"; 

describe("UserModel", () => {
	describe("#constructor", () => {
		it("doesn't throw error if argument empty", () => {
			expect(UserModel.constructor).not.toThrowError();	
		});
	});

	describe("#username", () => {
		it("return username", () => {
			let model;
			
			model = new UserModel({ username: "stub-username" });

			expect(model.username).toEqual("stub-username");
		});
	});

	describe("#password", () => {
		it("return password", () => {
			let model;
			
			model = new UserModel({ password: "stub-password" });

			expect(model.password).toEqual("stub-password");
		});
	});
});