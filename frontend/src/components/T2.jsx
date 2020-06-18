import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Result, Button } from 'antd';

export default class T2 extends Component {
  render() {
    return (
      <div className="page terminal-2">
        <Result
          status="warning"
          subTitle={
            <>
            <div>You have symptoms possibly consistent with COVID-19. You should stay home from school or work today</div>
            <br></br>
            <div>Contact your health care provider or Stamps Health Services for further advice.</div>
            <br></br>
            <div>You can find out more about testing options at GT Covid Central.</div>
            </>
          }
          extra={[
            <Link
              className="ant-btn ant-btn-primary ant-btn-background-ghost"
              to="/welcome"
              key="console"
            >
              Go Console
            </Link>,
            <Link
              className="ant-btn ant-btn-background-ghost"
              to="/surveys/prelim"
              key="prelim"
            >
              Take Again
            </Link>,
          ]}
        />
      </div>
    );
  }
}
