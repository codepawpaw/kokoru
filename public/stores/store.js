import { createStore } from "redux";
import Reducer from "../reducers/reducer";

class Store {
  static create() {
    return createStore(Reducer.all());
  }
}

export default Store;
