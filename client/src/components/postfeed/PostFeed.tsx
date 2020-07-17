import React, { Component } from "react";
import { Menu, Image, Header, Label } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";

import Post from "../post/Post";

class PostFeed extends Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default PostFeed;
