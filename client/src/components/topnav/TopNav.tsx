import React, { Component } from "react";
import { Menu, Image, Header, Label } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";

class TopNav extends Component {
  render() {
    return (
      <Menu tabular>
        <Menu.Item as={NavLink} to="/gallery" name="Gallery"></Menu.Item>
        <Menu.Item as={NavLink} to="/about" name="About" />
        <Menu.Item position="right" name="" as={NavLink} to="/sky">
          <Label size="big" color="black" image>
            <Image src={logo} />
            Back to my website
          </Label>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopNav;
