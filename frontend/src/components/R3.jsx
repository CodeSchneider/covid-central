import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.svg';
import dcc_logo from '../assets/dcc_dark.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import { BsListOl } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default class R3 extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  componentDidMount = async () => {
    this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  render() {
    return (
      <div className="results">
        <div ref={this.myRef}></div>
        <div className="header">
          <div className="top">
            <div className="affiliation">
              <div className="affiliate-1">
                <img src={dcc_logo}/>
              </div>
              <div className="affiliate-2">
                <img src={gt_logo}/>
              </div>
            </div>
          </div>
          <div className="artwork">
            <img src={doctor}/>
          </div>
        </div>
        <div className="body">
          <h1 className="title">Stay home.</h1>
          <div className="subtitle">Contact your medical provider or if a student contact Stamps Health Center at 404-894-1420 . If you are instructed to get tested for Covid-19, please see the <Link to="/welcome">Getting Tested</Link> guidance on GT COVID Central.</div>
          <div className="claims-title">Your Next Steps</div>
          <div className="claims">
            <div className="claim">
              <div className="left">
                <div className="number">1</div>
              </div>
              <div className="right">
                <div className="primary-text">
                Rest and Take Care
                </div>
                <div className="secondary-text">
                You should eat well, drink fluids, and get plenty of rest.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="claim">
              <div className="left">
                <div className="number">2</div>
              </div>
              <div className="right">
                <div className="primary-text">
                Watch for Emergency Signs
                </div>
                <div className="secondary-text">
                Call 911 if you develop any emergency warning signs such as severe, constant chest pain or pressure; extreme difficulty breathing; severe, constant lightheadedness; serious disorientation or unresponsiveness.
                </div>
              </div>
            </div>
            <div className="line"></div>
          </div>
          <div className="buttons">
            <Link to="/welcome" className="button button-1">
              Done
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
