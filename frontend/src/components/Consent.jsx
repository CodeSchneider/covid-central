import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cough from '../assets/cough_v3.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import { BsListOl, BsShieldLockFill } from "react-icons/bs";
import { FaHandPaper, FaUserLock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default class SurveyConsent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="consent">
        <div className="header">
          <div className="top">
            <div className="affiliation">
              <div className="affiliate-1">
                <img src={cc_logo}/>
              </div>
              <div className="affiliate-2">
                <img src={gt_logo}/>
              </div>
            </div>
            <Link to="/welcome" className="cancel">Cancel</Link>
          </div>
          <div className="artwork">
            <img src={cough}/>
          </div>
        </div>
        <div className="body">
          <h1 className="title">Covid-19 Daily Screening Tool</h1>
          <div className="claims">
            <div className="claim">
              <div className="left">
                <BsListOl/>
              </div>
              <div className="right">
                <div className="primary-text">
                  You’ll answer a few daily questions about Covid symptoms or exposures.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="claim">
              <div className="left">
                <BsShieldLockFill/>
              </div>
              <div className="right">
                <div className="primary-text">
                  The app does not capture or store any personally identifiable information.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="claim">
              <div className="left">
                <FaHandPaper/>
              </div>
              <div className="right">
                <div className="primary-text">
                  Aggregate anonymous data on symptom trends will be shared with Georgia Tech health authorities.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="claim">
              <div className="left">
                <IoIosCheckmarkCircle/>
              </div>
              <div className="right">
                <div className="primary-text">
                  By using this tool, you agree to its terms and that Georgia Tech will not be liable for any harm relating to your use.
                </div>
                <div className="secondary-text">
                  Recommendations provided by this tool do not constitute medical advice and should not be used to diagnose or treat medical conditions.
                </div>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <div className="buttons">
            <Link to="/screener/q1" className="button button-1">
            I agree
            </Link>
            <Link to="/welcome" className="button button-2">
            I don't agree
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
