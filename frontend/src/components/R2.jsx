import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import doctor from '../assets/doctor.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
import gt_logo from '../assets/gt_dark_logo.svg';
import AutoSubmit from './AutoSubmit';

export default class R2 extends Component {
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
            <h1 className="title">You should remain in isolation at home for 14 days or as directed by public health.</h1>
            <div className="subtitle">If you develop symptoms and have not been tested for Covid-19, please see the <Link to="/welcome">Getting Tested</Link> guidance on GT COVID Central.</div>
            <div className="claims-title">Your Next Steps</div>
            <div className="claims">
              <div className="claim">
                <div className="left">
                  <div className="number">1</div>
                </div>
                <div className="right">
                  <div className="primary-text">
                  Isolate From Others
                  </div>
                  <div className="secondary-text">
                  You should limit your contact with others including those in your home. If you can, have a room and bathroom that’s just for you.
                  </div>
                  <div className="line"></div>
                  <div className="secondary-text">
                  You should stay away from others for at least 7 days from when your symptoms first appeared. Your isolation can end if your symptoms improve significantly and if you have had no fever for at least 72 hours without the use of medicine.
                  </div>
                  <div className="line"></div>
                  <div className="secondary-text">
                  This can be hard when you’re not feeling well, but it will protect those around you.
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
                  <div className="number">3</div>
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
            <AutoSubmit/>
          </div>
        </div>
      </div>
    );
  }
}
