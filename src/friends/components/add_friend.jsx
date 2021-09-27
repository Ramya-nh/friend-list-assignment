import { connect } from "react-redux";
import {
  setFriendName,
  addFriendToList,
  setErrorMessage
} from "../store/actions";

const AddFriend = props => {
  const {
    friendName,
    setFriendName,
    addFriendToList,
    setErrorMessage,
    friendList
  } = props;
  const submitHandler = e => {
    e.preventDefault();
    if (friendName === "") {
      setErrorMessage("Please enter friend name");
    } else {
      addFriendToList(friendName);
    }
  };
  return (
    <div className="add-friend-container">
      <form onSubmit={e => submitHandler(e)}>
        <input
          id="friendName"
          name="friendName"
          value={friendName}
          onChange={e => setFriendName(e.target.value)}
          placeholder="Enter your friend's name"
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  friendName: state.friendName,
  friendList: state.friendList
});
const mapDispatchToProps = {
  setFriendName,
  addFriendToList,
  setErrorMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriend);
