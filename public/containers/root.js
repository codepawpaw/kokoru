import React from "react";
import { Provider } from "react-redux";

import Configuration from "../supports/configuration";
import Store from "../stores/store";
import Main from "components/main";
import "containers/root.css";

export default class Root extends React.Component {
  constructor() {
    super();

    this._store = Store.create();

    global.store = this._store;
  }

  get store() {
    return this._store;
  }

  render() {
    return (
      <Provider store={ this.store }>
        <Main />
      </Provider>
    );
  }
}
