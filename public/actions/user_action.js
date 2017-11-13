import Action from "./action";
import UserProtocol from "../protocols/user_protocol";

const ELEMENTS_USER = "ELEMENTS_USER";
const CHANGE_USER = "CHANGE_USER";
const REMOVE_USER = "REMOVE_USER";

class UserAction {
  static elements(elements) {
    return {
      type: ELEMENTS_USER,
      matches: Action.buildKeyValueList(UserProtocol, elements)
    };
  }

  static change(elements) {
    return {
      type: CHANGE_USER,
      matches: Action.buildKeyValueList(UserProtocol, elements)
    }
  }

  static remove(elements) {
    return {
      type: REMOVE_USER,
      matches: Action.buildKeyValueList(UserProtocol, elements)
    }
  }
}

export default UserAction;
export { ELEMENTS_USER, CHANGE_USER, REMOVE_USER };
