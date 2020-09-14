import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import novid_white from '../assets/novid_white.svg';
import novid_phone from '../assets/graphic-7.png';
import novid_two from '../assets/novid_two.png';
import app_store from '../assets/app_store.svg';
import play_store from '../assets/play_store.svg';
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

export default class Novid extends Component {
  constructor(props) {
      super(props)
      this.myRef = React.createRef();
  }
  componentDidMount = async () => {
    this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  render() {
    return (
      <>
        <div ref={this.myRef}></div>
        <div className="novid">
          <div className="banner">
            <div className="text-wrapper">
              <Link to="/welcome" className="back-link"><IoMdArrowBack/>&nbsp;Back to COVID Central</Link>
              <div className="header">
              NOVID&nbsp;<br/>Exposure Notifications
              </div>
              <div className="subtitle">
              Next Steps
              </div>
              <img className="phone-image-2" src={novid_two}/>
            </div>
            <img className="phone-image" src={novid_phone}/>
          </div>
          <div className="article">
            <div className="title">
              What to do if you get an&nbsp;<br/>Alert from NOVID
            </div>
            <div className="time">
              <AiOutlineClockCircle/>&nbsp;August 31st, 2020
            </div>
            <p>The <a href="https://novid.org">NOVID</a> app is designed to protect the Georgia Tech community by anonymously notifying individuals who have recently been in proximity for an extended period of time (>15 minutes) to someone who has been diagnosed with lab confirmed COVID-19.</p>
            <p>If you have received a notification indicating that you have been exposed, see the FAQ below for next steps.</p>
          </div>
          <div className="faq">
            <div className="questions">
              <div className="question">
                <div className="question-header">
                What does a NOVID alert mean?
                </div>
                <div className="question-content">
                A NOVID alert means that your phone has been logged as being in proximity (<3m) for a prolonged period of time (>15 minutes) to a phone whose user has been diagnosed with lab confirmed COVID-19 and whose symptoms began within 48 hours of your contact with them.  If they had no symptoms, all contacts in the 10 days prior to the positive lab test will be notified.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                So when and where was I exposed?
                </div>
                <div className="question-content">
                For privacy reasons, the NOVID app does not collect location data and does not provide precise time of interaction.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Does this mean I have COVID-19?
                </div>
                <div className="question-content">
                A prolonged exposure means only that you are at risk but does not indicate whether your have been infected.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Should I get tested?
                </div>
                <div className="question-content">
                Recent CDC guidance on this point has fluctuated.  But based on pre-existing guidelines, you should be tested if you have been exposed.  If you are symptomatic, you should be tested right away.  If you have no symptoms, you should wait 48 hours before getting tested.  Note that on-campus surveillance testing (mytest.gatech.edu) is designed for asymptomatic individuals.  Symptomatic individuals should contact their health care provider and be tested either via Stamps (if a student) or community testing if staff or faculty.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Do I need to quarantine?
                </div>
                <div className="question-content">
                YES.  You are at risk of spreading COVID-19 even if asymptomatic.  As a result, you should remain quarantined for
                 available on <a href="https://novid.org">novid.org</a> and in <a href="https://www.novid.org/downloads/20200625-accuracy.pdf">this study</a>. Because of iOS restrictions on running apps in the background, use of NOVID's low-power Standby Mode will significantly improve interaction detection involving iOS phones. For iOS users, we recommend activating and leaving on NOVID Standby Mode whenever you enter a building, class, or gathering.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                What happens if I get notified about a positive exposure?
                </div>
                <div className="question-content">
                If you are notified of a positive exposure (meaning >15 minutes time spent within 6 feet of an individual who has been diagnosed as lab positive since that interaction), you will receive a recommendation to quarantine, monitor for symptoms, and get tested.  If you require class or housing waivers as a result of this notification, you will be provided a link to begin this process.
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us">Have feedback on NOVID at GT?  Contact us at <a href="mailto:novid@gtri.gatech.edu"><u>novid@gtri.gatech.edu</u></a>.</div>
        </div>
      </>
    );
  }
}
