import { ELEMENTS_MATCH, CHANGE_MATCH, REMOVE_MATCH } from "../actions/match_action";
//import MatchSelector from "../selectors/matches_selector";

class MatchReducer {
  static elements(state, action = {}) {
    return ({
      ...state,
      ...action.matches
    });
  }

  static change(state = {}, action = {}) {
    /*for (let key in action.matches) {
      let match = MatchSelector.findAndClone(state, key);
      match.update(action.matches[key]);

      action.matches[key] = match;
    }*/

    return ({
      ...state,
      ...action.matches
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
      case ELEMENTS_MATCH:
        return MatchReducer.elements(state, action);

      case CHANGE_MATCH:
        return MatchReducer.change(state, action);

      case REMOVE_MATCH:
        return MatchReducer.remove(state, action);

      default:
        return state;
    }
  }
}

export default MatchReducer;
