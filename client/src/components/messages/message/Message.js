import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import "./message.css";
import "../../../AppTheme.css";

class Message extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Link to='/notice' className="gcLink">
        <Panel className="result">
          <Grid>
            <Row>
              <Col className="gcLightText gcText" xs={12}>Account Type</Col>
              <Col xs={12} className="gcText">
                {this.props.accountType}
              </Col>
            </Row>
            <Row>
              <Col className="gcLightText gcText" xs={12}>Status</Col>
            </Row>
            <Row>
              <Col className="gcText" style={{WebkitBoxOrient: 'vertical'}} xs={12} className="gcMedGrey gcNoWrap">
                {this.props.status}
              </Col>
            </Row>
          </Grid>
        </Panel>
      </Link>
    );
  }
}

export default Message;
