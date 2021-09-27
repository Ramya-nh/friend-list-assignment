import React, { Component } from "react";
import AddFriend from "./add_friend";
import FriendList from "./friend_list";
import SearchBar from "./search_bar";
import SortByFavourite from "./sort_by_favourite";
import ErrorMessage from "./error_message";
import Pagination from "./pagination";

const FriendListContainer = () => {
  return (
    <div className="friends-list-container">
      <div className="title">Friends List</div>
      <AddFriend />
      <SearchBar />
      <ErrorMessage />
      <SortByFavourite />
      <FriendList />
      <Pagination />
    </div>
  );
};
export default FriendListContainer;
