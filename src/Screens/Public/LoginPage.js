import React from "react";
import Login from "../../components/login/Login";
import { connect } from "react-redux";
import Loader from "../../components/common/Loader";

const LoginPage = ({ isLoaded }) => {
  return isLoaded ? <Login /> : <Loader />;
};

const mapStateToProps = state => {
  return {
    isLoaded: state.loadReducer.isLoaded
  };
};

export default connect(mapStateToProps)(LoginPage);
