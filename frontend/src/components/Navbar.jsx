import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

export default class Navbar extends Component {
  render() {
    const { extra } = this.props;
    return (
      <div className="nav">
        <Link to="/welcome">
          <div className="back-arrow"><IoMdArrowBack/></div>
        </Link>
        <div className="title">
          <span>Daily health check</span>
          { extra &&
            <span className="extra">{extra}</span>
          }
        </div>
      </div>
    );
  }
}
