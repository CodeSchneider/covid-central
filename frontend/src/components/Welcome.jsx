import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import cross from '../assets/cross.svg';
import symptom_checker from '../assets/symptom_checker.svg';
import mask from '../assets/mask.svg';
import mask_2 from '../assets/mask_2.svg';
import notification from '../assets/notification.svg';
import dining from '../assets/dining.svg';
import cleaning from '../assets/cleaning.svg';
import crc from '../assets/crc.svg';
import gt from '../assets/gt.png';

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="nav">
          <div className="nav__wrap logo">
            <img src={gt}/>
          </div>
          <div className="nav__wrap title">
            <div>Covid Central</div>
          </div>
          <div className="nav__wrap search">
            <div><GoSearch/></div>
          </div>
        </div>
        {/*<div>Welcome page under construction.</div>
        <Link to="/surveys/prelim">Start symptom check</Link>*/}
        <div className="hex-grid">
          <ul class="hex-grid__list">
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                      <div className="icon">
                        <img src={mask}/>
                      </div>
                      <div className="title">Protective equipment</div>
                  </div>
              </li>
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                    <div className="icon">
                      <img src={notification}/>
                    </div>
                    <div className="title">Campus updates</div>
                  </div>
              </li>
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                    <div className="icon">
                      <img src={dining}/>
                    </div>
                    <div className="title">Dining and delivery</div>
                  </div>
              </li>
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                    <div className="icon">
                      <img src={cross}/>
                    </div>
                    <div className="title">Getting tested</div>
                  </div>
              </li>
              <li class="hex-grid__item">
                  <a href="https://www.covidcheck.org/en/risk/?utm_source=gt&utm_medium=email&utm_campaign=prepilot">
                    <div class="hex-grid__content" style={{
                      backgroundColor: '#f48fb1',
                      color: '#212121'
                    }}>
                      <div className="icon" style={{marginBottom: '6px'}}>
                        <img src={symptom_checker}/>
                      </div>
                      <div className="title">Daily symptom check</div>
                    </div>
                  </a>
              </li>
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                    <div className="icon">
                      <img src={crc}/>
                    </div>
                    <div className="title">CRC signup</div>
                  </div>
              </li>
              <li class="hex-grid__item" style={{display: 'none'}}>
                  <div class="hex-grid__content">
                      Blank
                  </div>
              </li>
              <li class="hex-grid__item">
                  <div class="hex-grid__content">
                    <div className="icon">
                      <img src={cleaning}/>
                    </div>
                    <div className="title">Buildings and cleaning</div>
                  </div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
