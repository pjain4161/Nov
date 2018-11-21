import React, { Component } from "react";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { HashRouter, Link } from "react-router-dom";
import "./verify.css";
import "../../AppTheme.css";
import Moment from 'react-moment';



class Verify extends Component {
constructor(props){
  super(props);
  this.state = {
    insurance : '-',
    identifier : '-',
    last_name : '-',
    middle_name : '-',
    first_name : '-',
    dob: '-',
    primary_address : '-',
    BI1 : '-',
    BI2 : '-',
    home_phone : '-',
    mobile_phone : '-',
    email_address : '-'
  }
}


componentDidMount(){
  var that = this;
    let user_data = {
      userId: "a780b000000AKa0AAG"
    };

    console.log("verify user");

let request = new Request("/api/verify_details", {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    fetch(request)
    .then(response => response.json())
    .then(data => this.setState({
    insurance : data[0].onegc_social_insurance_number__c,
    identifier : data[0].sfid,
    last_name : data[0].onegc_last_name__c,
    middle_name : data[0].onegc_middle_name__c,
    first_name : data[0].onegc_first_name__c,
    dob:data[0].onegc_date_of_birth__c,
    primary_address :data[0].onegc_street_number__c + ' ' +   data[0].onegc_street_name__c + ' ' +  data[0].onegc_province__c ,
    BI1 :data[0].onegc_social_insurance_number__c,
    BI2 :data[0].onegc_social_insurance_number__c,
    home_phone :data[0].onegc_home_phone__c,
    mobile_phone : data[0].onegc_mobile_phone__c,
    email_address :data[0].one_gc_email__c
    }));
}


  render() {
    return (
        <div className = "PB-112">
          <h4 className="gcPageHeader gcBlueText">Verify</h4>
          <p className="gcSubHeading">Enrollment: Confirm your information</p>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>oneGC Unique Identifier</Col>
                <Col xs={12} className="gcText">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.identifier}</Col>
              </Row>
            </Grid>
          </Panel>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Last name as appears on identification</Col>
                <Col xs={12} className="gcText">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.last_name}</Col>
              </Row>
            </Grid>
          </Panel>
            <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Middle name as appears on identification</Col>
                <Col xs={12} className="gcText">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.middle_name}</Col>
              </Row>
            </Grid>
          </Panel>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>First name as appears on identification</Col>
                <Col xs={12} className="gcText">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.first_name}</Col>
              </Row>
            </Grid>
          </Panel>
           <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Date of Birth</Col>
                <Col xs={12} className="gcText">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                <Moment className="gcText" format="MMM DD, YYYY">{this.state.dob}</Moment>
                
                </Col>
              </Row>
            </Grid>
          </Panel>
           <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Primary Address</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.primary_address}</Col>
              </Row>
            </Grid>
          </Panel>
           <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Banking Information - Account #1</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>---</Col>
              </Row>
            </Grid>
          </Panel>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Banking Information - Account #2</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>---</Col>
              </Row>
            </Grid>
          </Panel>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Home Phone</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.home_phone}</Col>
              </Row>
            </Grid>
          </Panel>
           <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Mobile Phone</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.mobile_phone}</Col>
              </Row>
            </Grid>
          </Panel>
          <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Email Address</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.email_address}</Col>
              </Row>
            </Grid>
          </Panel>
           <Panel className="result">
            <Grid>
              <Row>
                <Col className="gcText gcLightText" xs={12}>Social Insurance Number</Col>
                <Col xs={12} className="gcBold">
                  {this.props.accountType}
                </Col>
              </Row>
              <Row>
                <Col className="gcText" xs={12}>{this.state.insurance}</Col>
              </Row>
              
            </Grid>
          </Panel>
    
    {/*<Link
          to="/home"
          style={{ color: "white", backgroundColor: "#1958b7", float: "right" }}
          className="gcButton">
          Verify
        </Link>
      */}

            
          
           <div className="loginButtonContainer">
          <Button
            className="gcButton"
            style={{ color: "#515151", backgroundColor: "#d1d1d1",width: '45vw'}}
          >
            Cancel
          </Button>

     

          <Link to="/home"
          className="gcButton btn btn-default"
          style={{ color: "white", backgroundColor: "#015191", width: '45vw' }}>
          Verify
          </Link>
        </div>
      
            
        </div>
    );
  }
}

export default Verify;