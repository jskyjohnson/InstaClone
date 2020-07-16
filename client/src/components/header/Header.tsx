import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <Menu tabular>
        <Menu.Item as={NavLink} to="/gallery" name="Gallery" />
        <Menu.Item as={NavLink} to="/about" name="About" />

        <Menu.Item
          position="right"
          name="Back to my website"
          as={NavLink} to="/sky"
        />
      </Menu>
    );
  }
}

export default Header;
