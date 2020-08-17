import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import AutoSubmit from './AutoSubmit';

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
      <div className="workspace">
        <div className="results">
          <div ref={this.myRef}></div>
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
          <AutoSubmit/>
        </div>
      </div>
    );
  }
}
