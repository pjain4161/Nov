import React, { Component } from "react";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import Notification from "./notification/Notification";
import Pagination from "../pagination/Pagination";
import "./account.css";

class Account extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      inputValue: "",
      notifications: []
    };
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }

  getNotifications() {
    var that = this;
    let user_data = {
      userId: "a780b000000AKa0AAG"
    };

    console.log("get notifications");
    let request = new Request("/api/account_history", {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(request).then(response =>
      response
        .json()
        .then(data => ({
          notifications: data.Notifications
        }))
        .then(res => {
          console.log(res.notifications);
          that.setState({
            notifications: res.notifications
          });
        })
    );
  }

  componentDidMount() {
    this.getNotifications();
  }

  render() {
    return (
      <div>
        <h4 className="gcPageHeader">Account History</h4>
        <p className="gcSubHeading">
          Review and check the status or read messages about your account
        </p>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.inputValue}
              placeholder="Search"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
        <div className="resultsContainer">
          {this.state.notifications.map(function(not, index) {
            return <Notification key={index} actor={not.onegc_actor__c} action={not.name} dateVal={not.createddate} />;
          })}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Account;
