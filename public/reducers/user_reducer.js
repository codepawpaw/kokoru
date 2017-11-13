import { ELEMENTS_USER, CHANGE_USER, REMOVE_USER } from "../actions/user_action";

class UserReducer {
  static elements(state, action = {}) {
    return ({
      ...state,
      ...action.users
    });
  }

  static change(state = {}, action = {}) {
    return ({
      ...state,
      ...action.users
    });
  }

  static remove(state = {}, action = {}) {
    let newState;

    newState = ({ ...state });

    for (let key in action.matches) {
      delete newState[key];
    }

    return newState;
  }

  static reduce(state = {}, action = {}) {
    switch(action.type) {
      case ELEMENTS_USER:
        return UserReducer.elements(state, action);

      case CHANGE_USER:
        return UserReducer.change(state, action);

      case REMOVE_USER:
        return UserReducer.remove(state, action);

      default:
        return state;
    }
  }
}

export default UserReducer;
