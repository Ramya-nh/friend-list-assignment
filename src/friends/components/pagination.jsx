import React, { Component } from "react";
import { connect } from "react-redux";
import { handlePaginationClick } from "../store/actions";

class Pagination extends Component {
  render() {
    const { friendList, friendsPerPage, handlePaginationClick } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(friendList.length / friendsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page"
          key={number}
          id={number}
          onClick={event => handlePaginationClick(event.target.id)}
        >
          {number}
        </li>
      );
    });
    return (
      <div id="page-numbers" className="page-numbers">
        {renderPageNumbers}
      </div>
    );
  }
}
const mapDispatchToProps = {
  handlePaginationClick
};

const mapStateToProps = state => ({
  friendList: state.friendList,
  currentPage: state.currentPage,
  friendsPerPage: state.friendsPerPage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
