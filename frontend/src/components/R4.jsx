import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.svg';
import dcc_logo from '../assets/dcc_dark.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import { BsListOl } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default class R4 extends Component {
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
            <Link to="/welcome" className="cancel">Done</Link>
          </div>
          <div className="artwork">
            <img src={doctor}/>
          </div>
        </div>
        <div className="body">
          <h1 className="title">You Should Call 911.</h1>
          <div className="subtitle">Based on your reported symptoms, you should seek care immediately.</div>
        </div>
      </div>
    );
  }
}
