import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cough from '../assets/cough_v3.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import { BsListOl, BsShieldLockFill } from "react-icons/bs";
import { FaHandPaper, FaUserLock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { Modal } from 'antd';
import { Field } from 'formik';

export default class SurveyConsent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTerms: false
    };
  }

  showModal = () => {
    console.log('sm');
    this.setState({
      showTerms: true
    });
  }

  handleCancel = e => {
    this.setState({
      showTerms: false
    });
  };

  render() {
    const { history } = this.props;
    return (
      <div className="workspace">
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
                  <div onClick={() => this.showModal()} className="link-full-terms">
                    <span className="text">See terms</span>
                    <FiChevronRight />
                  </div>
                  <Modal
                    visible={this.state.showTerms}
                    onCancel={this.handleCancel}
                    footer={null}
                  >
                    <p className="bold">General Terms of Use & Disclaimer</p>
                    <p className="bold">This screening tool was developed to assist students and employees of Georgia Institute of Technology (Georgia Tech) comply with <a href="https://www.usg.edu/coronavirus/">self-monitoring requirements</a> for the Coronavirus Disease 2019 (COVID-19) as set forth by the Board of Regents of the University System of Georgia (USG).</p>
                    <p className="bold">To help with self-monitoring efforts, you will be asked to answer a few daily questions about COVID-19 symptoms or exposures. You are not required to use this tool or provide responses. Use of this tool is entirely voluntary.</p>
                    <p className="bold">This tool does not capture or store any personally identifiable information.</p>
                    <p className="bold">Aggregate anonymous responses on symptom trends will be shared with Stamps Health Services, Georgia Tech COVID-19 Task Force and, as needed, Georgia Tech Administration.</p>
                    <p className="bold">By using this screening tool, you understand, acknowledge and hereby agree that:</p>
                    <ul>
                      <li>The results and/or recommendations generated by this screening tool based on your submitted responses do not constitute medical advice and should not be used to diagnose or treat any medical condition, including but not limited to, COVID-19.</li>
                      <li>For diagnosis or treatment of any medical problems or concerns, you should consult your own physician.</li>
                      <li>Georgia Tech and the USG are not responsible for any medical or health conditions or needs that may require medical treatment and are not liable for any harm resulting from your use of this screening tool or failure to seek medical treatment.</li>
                    </ul>
                  </Modal>
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div className="buttons">
              <Field name="consent">
                {({
                  field,
                  form: { touched, errors, setFieldValue, values },
                  meta
                }) => (
                  <>
                    <div
                      className="button button-1"
                      onClick={() => {
                        setFieldValue('consent', true);
                        history.push('/screener/q1');
                      }}
                    >
                      I agree
                    </div>
                    <div
                      className="button button-2"
                      onClick={() => {
                        setFieldValue('consent', false);
                        history.push('/welcome');
                      }}
                    >
                      I don't agree
                    </div>
                  </>
                )}
              </Field>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
