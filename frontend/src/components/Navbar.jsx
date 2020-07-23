import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

export default class Navbar extends Component {
  render() {
    const { back, progress } = this.props;
    return (
      <div className="screener-navbar nav">
        <div class="top">
          <Link to={back}>
            <div className="back-arrow"><IoMdArrowBack/></div>
          </Link>
          <div className="title">
            COVID‑19 self-assessment
          </div>
        </div>
        <div class="progress-bar">
        </div>
      </div>
    );
  }
}
