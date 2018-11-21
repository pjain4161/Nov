import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
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
import "./notice.css";

class Notice extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h4 className="gcPageHeader">
          Notice of Assessment
        </h4>
        <Panel className="result">
          <Grid>
            <Row>
              <Col xs={12} className="gcText gcLightText">Details</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
                Address: 1449 Crescent St Montreal QC H3Q 282
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
                Date Issued: Apr 30, 2018
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
              Tax Year: 2017
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
                Social Insurance Number: XXX-XXX-XX32
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{display: 'flex', justifyContent:'center'}}>
                <Link to="/account">
                  <Button style={{marginTop: '15px', padding:"5px", width: "40vw"}} className="blueButton gcButton">Personal Info</Button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </Panel>

        <Panel className="result">
          <Grid>
            <Row>
              <Col xs={12} className="gcText gcLightText">Message</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
                We assessed your 2017 income and benefits and calculated your balance.
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcText">
                You have a refund of $2626.98
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcText">
                Thank you,
              </Col>
              <Col xs={12} className="gcText">
                Ben Hamilton
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcText gcLightText">Account Summary</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">You have a refund of $2626.98</Col>
            </Row>
            <br></br>
            <Row>
              <Col xs={12} className="gcText gcLightText">Tax Assessment</Col>
            </Row>
            <Row>
              <Col xs={12} className="gcText">
                We calculated your taxes using the amount given to us.  The following summary is based on the provided information
              </Col>
            </Row>

          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Notice;
