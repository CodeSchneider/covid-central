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
              Download&nbsp;<br/>the NOVID App
              </div>
              <div className="subtitle">
              And Help Protect&nbsp;<br/>the GT Community
              </div>
              <div className="download-links">
                <a href="https://apps.apple.com/us/app/novid/id1508029182"><img className="apple" src={app_store}/></a>
                <a href="https://play.google.com/store/apps/details?id=com.expii.novid&hl=en_US"><img className="play" src={play_store}/></a>
              </div>
              <img className="phone-image-2" src={novid_two}/>
            </div>
            <img className="phone-image" src={novid_phone}/>
          </div>
          <div className="article">
            <div className="title">
              Help Protect the GT Community&nbsp;<br/>with NOVID
            </div>
            <div className="time">
              <AiOutlineClockCircle/>&nbsp;August 7th, 2020
            </div>
            <p>Use the <a href="https://novid.org">NOVID</a> app to anonymously receive alerts about your potential exposure to COVID.  The app does not capture any personally identifiable information.  Full details on NOVID’s security, privacy, and use of permissions can be found <Link to="/privacy-evaluation">here</Link>.</p>
            <p>When you have installed the app, go to Settings and enter the <span>community code JACKETS to join the GT Community</span>.</p>
          </div>
          <div className="faq">
            <div className="header">Frequently Asked Questions</div>
            <div className="questions">
              <div className="question">
                <div className="question-header">
                What is NOVID?
                </div>
                <div className="question-content">
                NOVID is an exposure notification app that is designed to anonymously notify users if they have been in close proximity to individuals who have received a laboratory-confirmed diagnosis of Covid-19.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Why should I use NOVID?
                </div>
                <div className="question-content">
                Using NOVID is beneficial to both you as an individual and to the broader GT community. As diagnoses of Covid-19 occur on campus, general information about cases will be posted at <a href="http://health.gatech.edu/coronavirus/health-alerts">health.gatech.edu/coronavirus/health-alerts</a>.  But how will you know if you have been personally exposed? One mechanism is through manual contact tracing, where public health officials interview the Covid-positive individual and call their known recent contacts.  But what about interactions they are not aware of?  For example, individuals who were working nearby in a maker space, exercising nearby at the gym?  NOVID can help identify these interactions and inform potentially exposed individuals.  At the same time, NOVID helps individuals who are Covid-19 positive protect their friends, family, and community members in an anonymous way.  Early notifications will help halt the spread of infection and reduce the impact of Covid on our campus.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                How does NOVID detect exposures?
                </div>
                <div className="question-content">
                NOVID uses a combination of bluetooth and high-frequency sound waves to detect distance between two phones running the NOVID app.  An at-risk exposure is an interaction lasting more than 15 minutes within a 6-foot radius.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                How does NOVID record these exposures?
                </div>
                <div className="question-content">
                The NOVID app generates a rotating synthetic code that is shared between phones when there is an interaction.  No identifiable information is captured or shared by the app (see more details below).  The interactions between these synthetic identifiers are stored on your phone and the NOVID network.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Is NOVID accurate in capturing exposures?
                </div>
                <div className="question-content">
                See detailed performance metrics available on <a href="https://novid.org">novid.org</a> and in <a href="https://www.novid.org/downloads/20200625-accuracy.pdf">this study</a>. Because of iOS restrictions on running apps in the background, use of NOVID's low-power Standby Mode will significantly improve interaction detection involving iOS phones.  <span className="highlight">For iOS users, we recommend activating and leaving on NOVID Standby Mode whenever you enter a building, class, or gathering.</span>
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
              <div className="question">
                <div className="question-header">
                How do I notify others anonymously if I am diagnosed positive for Covid-19?
                </div>
                <div className="question-content">
                If you get a positive test result at Stamps Health Center or via <a href="https://mytest.gatech.edu">mytest.gatech.edu</a> testing, you will receive a code that you can enter into the NOVID app to anonymously notify your contacts.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                What data does NOVID capture about me?
                </div>
                <div className="question-content">
                NOVID does not collect any personally identifiable information.  For details on what is captured and how it is used, see <a href="https://covid-central.gatech.edu/app/privacy-evaluation">this report</a> for details of a privacy and security code review conducted independently by Georgia Tech.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Why does NOVID require access to my device's microphone?
                </div>
                <div className="question-content">
                NOVID uses the device microphone to emit sound which is used to reduce the false-positive rate of Bluetooth signals. GTRI found no evidence that NOVID records audio except as necessary for this purpose. Additionally, GTRI found no evidence that sound collected via the microphone is stored or transmitted.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Why does the Android version of NOVID require access to my location (GPS)?
                </div>
                <div className="question-content">
                Google devices require that location permissions be granted by the user in order for NOVID to use the Bluetooth functionality. GTRI found no evidence that NOVID uses these permissions to record, track, or otherwise obtain the user's location.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Does NOVID send my personal information to its servers?
                </div>
                <div className="question-content">
                GTRI observed that data sent to NOVID's backend servers did not contain any user personally identifiable information (PII), which is consistent with their claims. While GTRI did observe that some device information was transmitted, such as the user device brand, model, OS version, and NOVID version, none of this information is specific to an individual NOVID user.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Will NOVID drain my battery?
                </div>
                <div className="question-content">
                Because NOVID sends out signals only intermittently, it has minimal effect on battery life.  Battery usage is slightly higher on Android than iOS because of Android's background mode.
                </div>
              </div>
              <div className="question">
                <div className="question-header">
                Should I activate NOVID's WiFi Background Mode?
                </div>
                <div className="question-content">
                The iOS version of NOVID has an experimental WiFi background mode which was released after GT's code review, so our privacy findings may not apply to this function. Thus we do not currently recommend activating this feature.
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
