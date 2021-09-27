import { connect } from "react-redux";
const ErrorMessage = props => {
  const { errorMessage } = props;
  return <div className="error-msg-container">{errorMessage}</div>;
};
const mapStateToProps = state => ({
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps)(ErrorMessage);
