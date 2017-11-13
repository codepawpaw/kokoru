import { combineReducers } from "redux";

import MatchReducer from "./match_reducer";
import UserReducer from "./user_reducer";

class Reducer {
  static all() {
    return combineReducers({
      matchs: MatchReducer.reduce,
      users: UserReducer.reduce,
    });
  }
}

export default Reducer;
