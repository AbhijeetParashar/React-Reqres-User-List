import React from "react";
import MenuAppBar from "../../components/common/AppBar";

const PrivateLayout = props => {
  return (
    <div>
      <MenuAppBar auth={true} />
      {props.children}
    </div>
  );
};

export default PrivateLayout;
