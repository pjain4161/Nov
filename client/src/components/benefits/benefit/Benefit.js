import React, { Component } from "react";
import { Panel, Grid, Row, Col, Button } from "react-bootstrap";
import "./benefit.css";
import "../../../AppTheme.css";

class Benefit extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Panel className="benefit">
        <Grid>
          <Row>
            <Col className="gcText" xs={12}>{this.props.name}</Col>
          </Row>
          <Row>
            <Col className="gcText gcLightText gcNoWrap" style={{WebkitBoxOrient: 'vertical'}} xs={12}>{this.props.description}</Col>
          </Row>
          <Row>
            <Col xs={12} style={{display: 'flex', justifyContent:'center'}}>
              <a  target="_blank" href={this.props.detailsLink} style={{marginTop: '15px', padding:"5px", paddingRight: '25px', paddingLeft: '25px'}} className="blueButton gcButton">View</a>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Benefit;
