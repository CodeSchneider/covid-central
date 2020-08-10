import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import { BsListOl } from "react-icons/bs";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default class R1 extends Component {
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
            </div>
            <div className="artwork">
              <img src={doctor}/>
            </div>
          </div>
          <div className="body">
            <h1 className="title">You Should Practice Physical Distancing.</h1>
            <div className="subtitle">Help stop the spread of COVID‑19. When outside the home, stay at least six feet away from other people and avoid groups.</div>
            <div className="claims-title">Your Next Steps</div>
            <div className="claims">
              <div className="claim">
                <div className="left">
                  <div className="number">1</div>
                </div>
                <div className="right">
                  <div className="primary-text">
                  Protect Yourself & Others
                  </div>
                  <div className="secondary-text">
                  You should avoid groups of people and stay six feet apart from anyone who’s not part of the household. Especially avoid those showing symptoms.
                  </div>
                  <div className="line"></div>
                  <div className="secondary-text">
                  In addition, you should wear a cloth face mask when leaving the house. You should also clean your hands often and avoid touching your face.
                  </div>
                  <div className="line"></div>
                  <div className="secondary-text">
                  These small but important steps can slow the spread of COVID‑19.
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
                  Take Care and Prepare
                  </div>
                  <div className="secondary-text">
                  You should eat well, exercise regularly, and get plenty of sleep. You should also stay connected with friends and family.
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
      </div>
    );
  }
}
