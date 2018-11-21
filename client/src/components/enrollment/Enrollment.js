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
  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">Benefit Enrollment</h4>
        <Panel className="enrollmentCard">
          <form>
            <FormGroup>
              <ControlLabel className="gcGreyText ">
                1. Select your province or territory:
              </ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                2. What is your age?
              </ControlLabel>
              <FormControl
                type="number"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                3. What is your marital status?
              </ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                4. Do you consider your household income to be low?
              </ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">
                5. What is your employment situation?
              </ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcMedGrey">
                6. What best describes your health situation? (Check all that
                apply)
              </ControlLabel>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">Living with a mental or physical disability</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">Chronically or seriously ill</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">Experiencing mental illness</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">Living with an addiction</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">In need of counseling</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">In need of dental surgery, precription drugs or lenses</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">In need of medical equipment or other assistance</label>
                <span className="checkmark"></span>
              </div>
              <div className="checkboxContainer">
                <input type="checkbox">
                </input>
                <label className="gcGreyText">No health concerns or not applicable</label>
                <span className="checkmark"></span>
              </div>
              <ControlLabel style={{marginTop: '10px'}} className="gcMedGrey">
                7. I am ... (Check all that apply)
              </ControlLabel>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">A newcomer to the country</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">An apprentice</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">In need of legal help</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">Interested in starting a business</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">Receiving or repaying student loans</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">An aboriginal person</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">Interested in training and career counseling</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">Considering separation/divorce</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">Living in a rural or remote area</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">A veteran</label>
                  <span className="checkmark"></span>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">A health care worker</label>
                  <span className="checkmark"></span>
                </div>  <div className="checkboxContainer">
                  <input type="checkbox">
                  </input>
                  <label className="gcGreyText">A victim of crime</label>
                  <span className="checkmark"></span>
                </div>  <div className="checkboxContainer">
                  <input type="checkbox">
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
          >
            Verify
          </Link>
        </div>
      </div>
    );
  }
}

export default Enrollment;
