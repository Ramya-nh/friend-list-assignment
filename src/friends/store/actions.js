import * as Types from "./types";

export function setFriendName(data) {
  return { type: Types.SET_FRIEND_NAME, payload: data };
}
export function setErrorMessage(errorMessage) {
  return { type: Types.SET_ERROR_MSG, payload: errorMessage };
}
export function handlePaginationClick(page) {
  return { type: Types.HANDLE_PAGINATION_CLICK, payload: page };
}
export function addFriendToList(friendToAdd) {
  return (dispatch, getState) => {
    let friendList = getState().friendList;

    if (friendList.indexOf(friendToAdd) === -1) {
      friendList.push({
        name: friendToAdd,
        is_favourite: false,
        id: friendList.length
      });
    }
    dispatch({
      type: Types.ADD_FRIEND_TO_LIST,
      payload: friendList
    });
  };
}
export function setSearchTerm(data) {
  return { type: Types.SET_SEARCH_TERM, payload: data };
}
export function sortByFavourite(data) {
  return (dispatch, getState) => {
    let friendList = getState().friendList;
    const sortedArr = friendList.sort((x, y) => {
      return y.is_favourite - x.is_favourite;
    });
    dispatch({
      type: Types.SORT_BY_FAVOURITE,
      payload: sortedArr
    });
  };
}
export function deleteFriend(friendToDelete) {
  return (dispatch, getState) => {
    let friendList = getState().friendList;
    const index = friendList.indexOf(friendToDelete);
    if (index > -1) {
      friendList.splice(index, 1);
    }
    dispatch({
      type: Types.DELETE_FRIEND,
      payload: friendList
    });
  };
}

export function addToFavourite(friendToFavourite) {
  return (dispatch, getState) => {
    const friendList = getState().friendList;
    let favouriteFriends = friendList;
    const index = favouriteFriends.indexOf(friendToFavourite);
    if (index > -1) {
      if (friendToFavourite === friendList[index])
        friendToFavourite.is_favourite = true;
    }
    dispatch({
      type: Types.ADD_TO_FAVOURITE,
      payload: favouriteFriends
    });
  };
}

export function removeFromFavourite(friend) {
  return (dispatch, getState) => {
    const favouriteFriends = getState().friendList;
    const index = favouriteFriends.indexOf(friend);
    if (index > -1) {
      if (friend === favouriteFriends[index]) friend.is_favourite = false;
    }
    dispatch({
      type: Types.REMOVE_FROM_FAVOURITE,
      payload: favouriteFriends
    });
  };
}
export function searchFriend(data) {
  return (_, getState) => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchTerm");
    filter = input.value.toUpperCase();
    ul = document.getElementById("friend-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];

      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };
}
