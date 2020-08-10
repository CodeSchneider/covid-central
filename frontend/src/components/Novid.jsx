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
            <p>Use the <a href="https://novid.org">NOVID</a> app to anonymously receive alerts about your potential exposure to COVID.  The app does not capture any personally identifiable information.  Full details on NOVID’s security, privacy, and use of permissions can be found <a href="https://novid.org#anonymity">here</a>.</p>
            <p>When you have installed the app, go to Settings and enter the <span>community code BUZZ to join the GT Community</span>.</p>
            <Link to="privacy-evaluation" className="privacy-link">Read Privacy Evaluation&nbsp;<IoMdArrowForward/></Link>
          </div>
        </div>
      </>
    );
  }
}
