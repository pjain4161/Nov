import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import Home from "../home/Home";
import Account from "../account/Account";
import Messages from "../messages/Messages";
import Welcome from "../welcome/Welcome";
import Benefits from "../benefits/Benefits";
import logoIcon from '../../images/g-logo.png';

import "./gcNavBar.css";

class GCNavbar extends Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect className="gcNavBar">
          <Navbar.Header className="gcNavHeader">
           
             <Navbar.Brand>
             <Link to="/verify" className="gcUserIcon gcWhite">
            <Glyphicon glyph="user" style={{paddingTop:'1.30vh'}} className="gcWhite" />
            </Link>
             </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/home" className="gcWhite">
                <img style={{height:'44px'}}src={logoIcon} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <NavLink to="/home" className="gcWhite">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/home" className="gcWhite">News</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/messages" className="gcWhite">Notifications</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/account" className="gcWhite">Account History</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/benefits" className="gcWhite">Benefits</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default GCNavbar;
