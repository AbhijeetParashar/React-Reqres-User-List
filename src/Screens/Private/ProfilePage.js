import React from "react";
import { connect } from "react-redux";
import UserProfileCard from "../../components/common/UserProfileCard";
import { bindActionCreators } from "redux";
import { getSelectedUser } from "../../redux/user/userAction";
import Loader from "../../components/common/Loader";

class ProfilePage extends React.Component {
  componentDidMount() {
    const { getSelectedUser, match } = this.props;
    const { id } = match.params;
    getSelectedUser(id);
  }

  goHome = () => {
    this.props.history.replace("/users");
  };
  render() {
    const { selectedUserInfo, isLoaded } = this.props;
    return selectedUserInfo && isLoaded ? (
      <UserProfileCard 
        selectedUserInfo={selectedUserInfo} 
        backClick={() => { this.goHome(); }}
        />
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUserInfo: state.userReducer.selectedUserInfo,
    isLoaded: state.loadReducer.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSelectedUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
