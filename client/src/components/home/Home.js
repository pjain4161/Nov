import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { HashRouter, Link } from "react-router-dom";
import NewsIcon from '../../images/c-news-TILE.png';
import NotificationsIcon from '../../images/c-notifications-TILE.png';
import BenefitsIcon from '../../images/c-benefits-TILE.png';
import AccountIcon from '../../images/c-account-TILE.png';

import "./home.css";
import "../../AppTheme.css";

class Home extends Component {
  render() {
    return (
        <div>
          <h4 className="gcPageHeader gcBlueText">Welcome, Mary!</h4>
          <Panel className="gcBlueBackground centeredPanel">
            <Panel.Body className="gcWhiteText gcSubHeading">
              You have 3 outstanding notifications
            </Panel.Body>
          </Panel>
          <div className="tileContainer">
            <Link to="/home" className="homeLink" >
              <img className="titleImageContainer" src={NewsIcon}/>
            </Link>
            <Link to="/messages" className="homeLink">
              <img className="titleImageContainer" src={NotificationsIcon}/>
            </Link>
            <Link to="/account" className="homeLink">
            <img className="titleImageContainer" src={AccountIcon}/>
            </Link>
            <Link to="/benefits" className="homeLink">
              <img className="titleImageContainer" src={BenefitsIcon}/>
            </Link>
          </div>
        </div>
    );
  }
}

export default Home;
