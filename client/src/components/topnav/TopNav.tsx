import React, { Component } from 'react';
import { Menu, Image, Header, Label, Button } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { useAuth0 } from '@auth0/auth0-react';

const TopNav = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Menu tabular>
      <Menu.Item as={NavLink} to="/gallery" name="Gallery"/>
      <Menu.Item as={NavLink} to="/about" name="About" />

      {!isAuthenticated && (
        <Menu.Item>
          <Button content="Login" onClick={() => loginWithRedirect({})} />
        </Menu.Item>
      )}
      
      {isAuthenticated && (
        <>
          <Menu.Item name="profile" as={NavLink} to={'/user/' + user.sub}/>
          {/* <Link className="Nav-user-button" to={'/user/' + user.sub} /> */}
        </>
      )}
      
      <Menu.Item position="right" name="" as={NavLink} to="/sky">
        <Label size="big" color="black" image>
          <Image src={logo} />
          Back to my website
        </Label>
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
