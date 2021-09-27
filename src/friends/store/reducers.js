import * as Types from "./types";

const initialState = {
  friendName: "",
  friendList: [],
  searchTerm: "",
  errorMessage: "",
  currentPage: 1,
  friendsPerPage: 4
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.SET_FRIEND_NAME:
      return {
        ...state,
        friendName: action.payload
      };
    case Types.SET_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.payload
      };
    case Types.HANDLE_PAGINATION_CLICK:
      return {
        ...state,
        currentPage: Number(action.payload)
      };
    case Types.ADD_FRIEND_TO_LIST:
      return {
        ...state,
        friendList: [...action.payload],
        errorMessage: ""
      };
    case Types.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
        errorMessage: ""
      };
    case Types.DELETE_FRIEND:
      return {
        ...state,
        friendList: [...action.payload]
      };
    case Types.ADD_TO_FAVOURITE:
      return {
        ...state,
        friendList: [...action.payload]
      };
    case Types.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        friendList: [...action.payload]
      };
    case Types.SORT_BY_FAVOURITE:
      return {
        ...state,
        friendList: [...action.payload]
      };
    default:
      return state;
  }
}
