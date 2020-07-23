import React from "react";
import MenuAppBar from "../../components/common/AppBar";

const PublicLayout = props => {
  return (
    <div>
      <MenuAppBar />
      {props.children}
    </div>
  );
};

export default PublicLayout;
