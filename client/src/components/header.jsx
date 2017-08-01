import React from 'react';
import Radium from 'radium';
import { Navbar, Nav, NavItem, NavDropdown, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { popoverStyle, headerStyle, navStyle } from '../styles';
import HamburgerMenu from './hamburgerMenu.jsx';
import Search from './search.jsx';
import Login from './login.jsx';
import NotificationList from './notificationList.jsx';

const Header = ({ user, toggleSidebar, menu, notifications, markNotificationAsRead }) => {
  let display = null;
  let leftMenu = null;

  const unreadMessages = notifications.filter(el => el.status === 'unread');

  const popoverNotification = (
    <Popover id='popover-positioned-bottom' title='Messages' style={popoverStyle}>
      <NotificationList notifications={notifications}/>
    </Popover>
  );

  if (user.fetched && user.isLoggedIn) {
    display = (
      <Nav pullRight>
        <NavItem>
          <HamburgerMenu menu={menu} toggleSidebar={toggleSidebar}/>
        </NavItem>
      </Nav>);

    leftMenu = (
      <Nav>
        <LinkContainer to='/create'>
          <NavItem>Start a project</NavItem>
        </LinkContainer>
        <LinkContainer to='/myProfile'>
          <NavItem>My projects</NavItem>
        </LinkContainer>
        <OverlayTrigger trigger='click' placement='bottom' overlay={popoverNotification} onClick={e => markNotificationAsRead(e, unreadMessages)}>
          <NavItem>My messages <span className='badge'>{unreadMessages.length}</span></NavItem>
        </OverlayTrigger>
      </Nav>
    );
  } else if (!user.fetching && !user.isLoggedIn) {
    display = (
      <Nav pullRight>
        <LinkContainer to='/auth/signup' id='nav_signup_btn'>
          <NavItem>Signup</NavItem>
        </LinkContainer>
        <NavDropdown title="Login" id="login_dropdown">
          <Login />
        </NavDropdown>
      </Nav>);

    leftMenu = (
      <Nav>
        <LinkContainer to='/create'>
          <NavItem>Start a project</NavItem>
        </LinkContainer>
      </Nav>
    );
  }

  return (
    <Navbar style={headerStyle} fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to='/' style={navStyle.title}>
            <div>Tech Starter</div>
          </LinkContainer>
        </Navbar.Brand>
      </Navbar.Header>
      {leftMenu}
      {display}
    </Navbar>
  );
};

export default Radium(Header);
