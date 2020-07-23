import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleLogout } from "../../../src/redux/user/userAction";
import { handleBackRoute } from "../../../src/redux/user/userAction";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = ({ auth, handleLogout,backButtonRequired,handleBackRoute }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {backButtonRequired ? 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIcon onClick={handleBackRoute}/>
          </IconButton> : null }
          <Typography variant="h6" className={classes.title}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              React Reqres Sample App
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="logout"
                title="logout"
                color="inherit"
                onClick={handleLogout}
              >
                <ExitToApp />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ handleLogout }, dispatch);
};

export default connect(null, mapDispatchToProps)(MenuAppBar);
