import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Result, Button } from 'antd';

export default class T1 extends Component {
  render() {
    return (
      <div className="page terminal-1">
        <Result
          status="success"
          title="Successfully completed!"
          subTitle="Based on your responses there is no recommended actions to take."
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
