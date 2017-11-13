import Action from "./action";
import MatchProtocol from "../protocols/match_protocol";

const ELEMENTS_MATCH = "ELEMENTS_MATCH";
const CHANGE_MATCH = "CHANGE_MATCH";
const REMOVE_MATCH = "REMOVE_MATCH";

class MatchAction {
  static elements(elements) {
    return {
      type: ELEMENTS_MATCH,
      matches: Action.buildKeyValueList(MatchProtocol, elements)
    };
  }

  static change(elements) {
    return {
      type: CHANGE_MATCH,
      matches: Action.buildKeyValueList(MatchProtocol, elements)
    }
  }

  static remove(elements) {
    return {
      type: REMOVE_MATCH,
      matches: Action.buildKeyValueList(MatchProtocol, elements)
    }
  }
}

export default MatchAction;
export { ELEMENTS_MATCH, CHANGE_MATCH, REMOVE_MATCH };
