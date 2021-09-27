import { connect } from "react-redux";
import { searchFriend, setSearchTerm, setErrorMessage } from "../store/actions";

const SearchBar = props => {
  const {
    searchTerm,
    setSearchTerm,
    searchFriend,
    friendName,
    setErrorMessage
  } = props;
  const handleSearch = () => {
    if (searchTerm === "") {
      setErrorMessage("Please enter search value");
    } else {
      searchFriend(searchTerm);
    }
  };
  return (
    <div className="search-friend-container">
      <input
        id="searchTerm"
        name="searchTerm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="search"
        className="search-box"
      />
      <span className="material-icons search" onClick={handleSearch}>
        search
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});
const mapDispatchToProps = {
  setSearchTerm,
  setErrorMessage,
  searchFriend
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
