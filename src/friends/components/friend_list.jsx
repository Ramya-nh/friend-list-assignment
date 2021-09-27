import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteFriend,
  addToFavourite,
  removeFromFavourite
} from "../store/actions";

class FriendList extends Component {
  renderFriendList = () => {
    const {
      friendList,
      deleteFriend,
      addToFavourite,
      removeFromFavourite,
      favFriends,
      currentPage,
      friendsPerPage
    } = this.props;

    const indexOfLastFriend = currentPage * friendsPerPage;
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
    const currentFriends = friendList.slice(
      indexOfFirstFriend,
      indexOfLastFriend
    );
    const friendArr = currentFriends.map((friend, index) => {
      return (
        <li id="friend" className="friend" key={index}>
          <a href="#" className="friend-name">
            {friend.name}
          </a>
          <span
            className="material-icons outlined delete"
            onClick={() => deleteFriend(friend)}
          >
            delete_outline
          </span>
          {!friend.is_favourite && (
            <span
              className="material-icons fav"
              onClick={() => addToFavourite(friend)}
            >
              star_border
            </span>
          )}
          {friend.is_favourite && (
            <span
              className="material-icons fav"
              onClick={() => removeFromFavourite(friend)}
            >
              star
            </span>
          )}
          <div className="sub-text">is your friend</div>
        </li>
      );
    });
    return (
      <ul id="friend-list" className="friend-list">
        {friendArr}
      </ul>
    );
  };
  render() {
    return <div>{this.renderFriendList()}</div>;
  }
}
const mapStateToProps = state => ({
  friendList: state.friendList,
  favFriends: state.favFriends,
  currentPage: state.currentPage,
  friendsPerPage: state.friendsPerPage
});
const mapDispatchToProps = {
  deleteFriend,
  addToFavourite,
  removeFromFavourite
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList);
