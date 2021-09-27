import { connect } from "react-redux";
import { sortByFavourite } from "../store/actions";
const SortByFavourite = props => {
  const { sortByFavourite } = props;
  return (
    <div className="sort-by-fav" onClick={sortByFavourite}>
      <span class="material-icons outlined sort">sort</span>
    </div>
  );
};

const mapDispatchToProps = {
  sortByFavourite
};

export default connect(
  null,
  mapDispatchToProps
)(SortByFavourite);
