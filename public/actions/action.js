class Action {
  static buildKeyValue(klass, element) {
    let protocol;

    protocol = new klass(element);
    return { [protocol.primaryKey]: protocol };
  }

  static buildKeyValueList(klass, elements = []) {
    let keyValueList;

    keyValueList = {};
    for (let element of elements) {
      keyValueList = { ...keyValueList, ...this.buildKeyValue(klass, element) };
    }

    return keyValueList;
  }
}

export default Action;