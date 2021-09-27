import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./friends/store";
import FriendListContainer from "./friends/components/friend_list_container";
import "./stylesheet/friend_list.css";

alert("his")
const container = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <FriendListContainer />
  </Provider>,
  container
);
