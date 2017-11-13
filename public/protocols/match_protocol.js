//import RequestListAllProtocol from "protocols/request_list_all_protocol";

class MatchProtocol {
  constructor(element = {}) {
    this._primaryKey = this.constructor.buildPrimaryKey(element);
    this._conversationUri = element.conversationUri;
    this._lastMessage = element.lastMessage;
    this._numUnreadMessages = element.numUnreadMessages;
    this._messageTimestamp = element.messageTimestamp;
  }

  static all() {
    //return new RequestListAllProtocol("conversation");
  }

  static buildPrimaryKey(element = {}) {
    return element.conversationUri;
  }

  update(properties) {
    if (typeof properties.lastMessage !== "undefined") {
      this._lastMessage = properties.lastMessage
    }

    if (typeof properties.messageTimestamp !== "undefined") {
      this._messageTimestamp = properties.messageTimestamp
    }

    if (typeof properties.numUnreadMessages !== "undefined") {
      this._numUnreadMessages = properties.numUnreadMessages
    }
  }

  get conversationUri() {
    return this._conversationUri;
  }

  get primaryKey() {
    return this._primaryKey;
  }

  get lastMessage() {
    return this._lastMessage;
  }

  get numUnreadMessages() {
    return this._numUnreadMessages;
  }

  get messageTimestamp() {
    return this._messageTimestamp;
  }
}

export default MatchProtocol;
