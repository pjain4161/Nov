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
  Checkbox,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./enrollment.css";

class Enrollment extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleprovinceValue = this.handleprovinceValue.bind(this);
    this.handleageValue = this.handleageValue.bind(this);
    this.handlemaritalValue = this.handlemaritalValue.bind(this);
    this.handleincomeValue = this.handleincomeValue.bind(this);
    this.handleemploymentValue = this.handleemploymentValue.bind(this);
    this.handle1Value = this.handle1Value.bind(this);
    this.handle2Value = this.handle2Value.bind(this);
    this.handle3Value = this.handle3Value.bind(this);
    this.handle4Value = this.handle4Value.bind(this);
    this.handle5Value = this.handle5Value.bind(this);
    this.handle6Value = this.handle6Value.bind(this);
    this.handle7Value = this.handle7Value.bind(this);
    this.handle8Value = this.handle8Value.bind(this);

    this.handle11Value = this.handle11Value.bind(this);
    this.handle12Value = this.handle12Value.bind(this);
    this.handle13Value = this.handle13Value.bind(this);
    this.handle14Value = this.handle14Value.bind(this);
    this.handle15Value = this.handle15Value.bind(this);
    this.handle16Value = this.handle16Value.bind(this);
    this.handle17Value = this.handle17Value.bind(this);
    this.handle18Value = this.handle18Value.bind(this);
    this.handle19Value = this.handle19Value.bind(this);
    this.handle20Value = this.handle20Value.bind(this);
    this.handle21Value = this.handle21Value.bind(this);
    this.handle22Value = this.handle22Value.bind(this);
    this.handle23Value = this.handle23Value.bind(this);


    this.state = {
      provinceValue : "",
      ageValue: "",
      maritalValue : "",
      incomeValue:"",
      employmentValue:"",
     
      chk1:false,
      chk2:false,
      chk3:false,
      chk4:false,
      chk5:false,
      chk6:false,
      chk7:false,
      chk8:false,
      chk11:false,
      chk12:false,
      chk13:false,
      chk14:false,
      chk15:false,
      chk16:false,
      chk17:false,
      chk18:false,
      chk19:false,
      chk20:false,
      chk21:false,
      chk22:false,
      chk23:false,
      enroll_error : ''
 };
  }

  enrollUser(event){
    var that = this;
    event.preventDefault();

    let arr3 =[
    'Living with a mental or physical disability',
    'Chronically or seriously ill', 
    'Experiencing mental illness', 
    'Living with an addiction', 
    'In need of counseling',
    'In need of dental surgery, precription drugs or lenses', 
    'In need of medical equipment or other assistance',
    'No health concerns or not applicable']

    let  arr4 = [
    'A newcomer to the country',
    'An apprentice',
    'In need of legal help',
    'Interested in starting a business',
    'Receiving or repaying student loans',
    'An aboriginal person',
    'Interested in training and career counseling',
    'Considering separation/divorce',
    'Living in a rural or remote area',
    'A veteran',
    'A health care worker',
    'A victim of crime',
    'None of the above'
    ]
   
    let arr1 = [
    this.state.chk1,
    this.state.chk2,
    this.state.chk3,
    this.state.chk4,
    this.state.chk5,
    this.state.chk6,
    this.state.chk7,
    this.state.chk8];

    let arr2 = [
    this.state.chk11,
    this.state.chk12,
    this.state.chk13,
    this.state.chk14,
    this.state.chk15,
    this.state.chk16,
    this.state.chk17,
    this.state.chk18,
    this.state.chk19,
    this.state.chk20,
    this.state.chk21,
    this.state.chk22,
    this.state.chk23
    ]


  
  if(this.state.provinceValue == '' || this.state.ageValue == '' || this.state.maritalValue == '' || this.state.incomeValue == '' ||  this.state.employmentValue == ''){
    this.state.enroll_error = "Please fill all the details"
   } else{
      let i;
      let health_index=[];
    for(i=0;i<=7;i++){
      if(arr1[i] == true){
        health_index.push(i);
      }
    }
    let health_array = []; 
    for(i=0;i<health_index.length;i++){
      health_array.push(arr3[health_index[i]])
    }

    let j;
      let check_index=[];
    for(j=0;j<=12;j++){
      if(arr2[j] == true){
        check_index.push(j);
      }
    }
    let check_array = []; 
    for(j=0;j<check_index.length;j++){
      check_array.push(arr4[check_index[j]])
    }
    let enroll_data = {
      province : this.state.provinceValue,
      ageValue : this.state.ageValue,
      maritalValue: this.state.maritalValue,
      incomeValue: this.state.incomeValue,
      employmentValue:this.state.employmentValue,
      healthValue: health_array.toString(),
      checkValue: check_array.toString()
    };
    var request = new Request('/api/enroll', {
      method: 'POST',
      body: JSON.stringify(enroll_data),
      headers : new Headers({'Content-Type' : 'application/json'})
    });

    fetch(request)
    .then(function(response){
         response.json()
          .then(function(data){
            console.log(data);
          })
        })
   }
  }

  handleprovinceValue(e) {
    this.setState({ provinceValue: e.target.value });
  }
  handleageValue(e) {
    this.setState({ ageValue: e.target.value });
  }
  handlemaritalValue(e) {
    this.setState({ maritalValue: e.target.value });
  }
  handleincomeValue(e) {
    this.setState({ incomeValue: e.target.value });
  }
  handleemploymentValue(e) {
    this.setState({ employmentValue: e.target.value });
  }
  handle1Value(e) {
    this.setState(prevState => ({
      chk1: !prevState.chk1,
    }));
  }
  handle2Value(e) {
    this.setState(prevState => ({
      chk2: !prevState.chk2,
    }));
  }
  handle3Value(e) {
    this.setState(prevState => ({
      chk3: !prevState.chk3,
    }));
  }
  handle4Value(e) {
    this.setState(prevState => ({
      chk4: !prevState.chk4,
    }));
  }
  handle5Value(e) {
    this.setState(prevState => ({
      chk5: !prevState.chk5,
    }));
  }
  handle6Value(e) {
    this.setState(prevState => ({
      chk6: !prevState.chk6,
    }));
  }
  handle7Value(e) {
    this.setState(prevState => ({
      chk7: !prevState.chk7,
    }));
  }
  handle8Value(e) {
    this.setState(prevState => ({
      chk8: !prevState.chk8,
    }));
  }

   handle11Value(e) {
    this.setState(prevState => ({
      chk11: !prevState.chk11,
    }));
  } handle12Value(e) {
    this.setState(prevState => ({
      chk12: !prevState.chk12,
    }));
  } handle13Value(e) {
    this.setState(prevState => ({
      chk13: !prevState.chk13,
    }));
  } handle14Value(e) {
    this.setState(prevState => ({
      chk14: !prevState.chk14,
    }));
  } handle15Value(e) {
    this.setState(prevState => ({
      chk15: !prevState.chk15,
    }));
  } handle16Value(e) {
    this.setState(prevState => ({
      chk16: !prevState.chk16,
    }));
  } handle17Value(e) {
    this.setState(prevState => ({
      chk17: !prevState.chk17,
    }));
  } handle18Value(e) {
    this.setState(prevState => ({
      chk18: !prevState.chk18,
    }));
  } handle19Value(e) {
    this.setState(prevState => ({
      chk19: !prevState.chk19,
    }));
  } handle20Value(e) {
    this.setState(prevState => ({
      chk20: !prevState.chk20,
    }));
  } handle21Value(e) {
    this.setState(prevState => ({
      chk21: !prevState.chk21,
    }));
  } handle22Value(e) {
    this.setState(prevState => ({
      chk22: !prevState.chk22,
    }));
  } handle23Value(e) {
    this.setState(prevState => ({
      chk23: !prevState.chk23,
    }));
  }
  handlecheckValue(e) {
    this.setState({ checkValue: e.target.value });
  }
  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">Benefit Enrollment</h4>
        <Panel className="enrollmentCard">
          <form>
            <FormGroup>
              <ControlLabel className="gcGreyText ">
                1. Select your province or territoryy:
              </ControlLabel>
              <FormControl
                type="text"
                value={this.state.provinceValue}
                onChange={this.handleprovinceValue}
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                2. What is your age?
              </ControlLabel>
              <FormControl
                type="number"
                value={this.state.ageValue}
                placeholder=""
                onChange={this.handleageValue}
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                3. What is your marital status?
              </ControlLabel>
              <FormControl
                type="text"
                value={this.state.maritalValue}
                placeholder=""
                onChange={this.handlemaritalValue}
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                4. Do you consider your household income to be low?
              </ControlLabel>
              <FormControl
                type="text"
                value={this.state.incomeValue}
                placeholder=""
                onChange={this.handleincomeValue}
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                5. What is your employment situation?
              </ControlLabel>
              <FormControl
                type="text"
                value={this.state.employmentValue}
                onChange={this.handleemploymentValue}
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcMedGrey">
                6. What best describes your health situation? (Check all that
                apply)
              </ControlLabel>
              <div className="checkboxContainer">
                <input type="checkbox" checked ={this.state.chk1} onChange = {this.handle1Value}>
                </input>
                <label className="gcGreyText">Living with a mental or physical disability</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk2} onChange = {this.handle2Value}>
                </input>
                <label className="gcGreyText">Chronically or seriously ill</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk3} onChange = {this.handle3Value}>
                </input>
                <label className="gcGreyText">Experiencing mental illness</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk4} onChange = {this.handle4Value}>
                </input>
                <label className="gcGreyText">Living with an addiction</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk5} onChange = {this.handle5Value}>
                </input>
                <label className="gcGreyText">In need of counseling</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk6} onChange = {this.handle6Value}>
                </input>
                <label className="gcGreyText">In need of dental surgery, precription drugs or lenses</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk7} onChange = {this.handle7Value}>
                </input>
                <label className="gcGreyText">In need of medical equipment or other assistance</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox" value = {this.state.chk8} onChange = {this.handle8Value}>
                </input>
                <label className="gcGreyText">No health concerns or not applicable</label>
                <span className="checkmark"></span>
              </div>
              <ControlLabel style={{marginTop: '10px'}} className="gcMedGrey">
                7. I am ... (Check all that apply)
              </ControlLabel>
            
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk11} onChange = {this.handle11Value}>
                  </input>
                  <label className="gcGreyText">A newcomer to the country</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk12} onChange = {this.handle12Value}>
                  </input>
                  <label className="gcGreyText">An apprentice</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk13} onChange = {this.handle13Value}>
                  </input>
                  <label className="gcGreyText">In need of legal help</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk14} onChange = {this.handle14Value}>
                  </input>
                  <label className="gcGreyText">Interested in starting a business</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk15} onChange = {this.handle15Value}>
                  </input>
                  <label className="gcGreyText">Receiving or repaying student loans</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk16} onChange = {this.handle16Value}>
                  </input>
                  <label className="gcGreyText">An aboriginal person</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk17} onChange = {this.handle17Value}>
                  </input>
                  <label className="gcGreyText">Interested in training and career counseling</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk18} onChange = {this.handle18Value}>
                  </input>
                  <label className="gcGreyText">Considering separation/divorce</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk19} onChange = {this.handle19Value}>
                  </input>
                  <label className="gcGreyText">Living in a rural or remote area</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk20} onChange = {this.handle20Value}>
                  </input>
                  <label className="gcGreyText">A veteran</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk21} onChange = {this.handle21Value}>
                  </input>
                  <label className="gcGreyText">A health care worker</label>
                  <span className="checkmark"></span>
                </div>  <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk22} onChange = {this.handle22Value}>
                  </input>
                  <label className="gcGreyText">A victim of crime</label>
                  <span className="checkmark"></span>
                </div>  <div className="checkboxContainer">
                  <input type="checkbox" value = {this.state.chk23} onChange = {this.handle23Value}>
                  </input>
                  <label className="gcGreyText">None of the above</label>
                  <span className="checkmark"></span>
                </div>
            </FormGroup>
          </form>
        </Panel>
        <div
          className="loginButtonContainer"
          style={{ justifyContent: "flex-end" }}
        >
          <Link
            to="/Benefits"
            className="gcButton btn btn-default"
            style={{ color: "white", backgroundColor: "#015191" }}
            onClick = {this.enrollUser.bind(this)}
          >
            Verify
          </Link>
        </div>
      </div>
    );
  }
}

export default Enrollment;
