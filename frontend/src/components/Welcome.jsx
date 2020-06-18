import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <div className="page welcome">
        <div>Welcome page under construction.</div>
        <Link to="/surveys/prelim">Start symptom check</Link>
      </div>
    );
  }
}
