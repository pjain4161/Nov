import React, { Component } from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import Moment from 'react-moment';
import "./notification.css";
import "../../../AppTheme.css";

class Notification extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Panel className="result">
        <Grid>
          <Row>
            <Col className="gcText gcLightText" xs={12}>Action</Col>
            <Col xs={12} className="gcText">
              {this.props.action}
            </Col>
          </Row>
          <Row>
            <Col className="gcText gcLightText"xs={6}>Actor</Col>
            <Col className="gcText gcLightText"xs={6}>Date</Col>
          </Row>
          <Row>
            <Col xs={6} className="gcText">
              {this.props.actor}
            </Col>
            <Col xs={6} className="gcText">
              <Moment className="gcText" format="MMM DD, YYYY">{this.props.dateVal}</Moment>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Notification;
