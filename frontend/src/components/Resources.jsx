import React, { Component } from 'react';
import { Table, Select } from 'antd';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import API from '../api';
import { FaRegBell } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { MdUpdate } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import covid_check_icon from '../assets/covid-check-icon.svg';
import cross from '../assets/cross.svg';
import symptom_checker from '../assets/symptom_checker.svg';
import mask from '../assets/mask.svg';
import mask_2 from '../assets/mask_2.svg';
import notification from '../assets/notification.svg';
import dining from '../assets/dining.svg';
import cleaning from '../assets/cleaning.svg';
import crc from '../assets/crc.svg';
import gt from '../assets/gt.png';
import gt_white_logo from '../assets/gt_white_logo.svg';
import covid_central_logo from '../assets/covid_central_logo_white.svg';
import hexagon from '../assets/hexagon_irregular.svg';
import hexagon2 from '../assets/hexagon_irregular_2.svg';
import hex2 from '../assets/hex2.svg';
import hex3 from '../assets/hex3.png';
import mask_purple from '../assets/mask_purple.svg';
import mask2 from '../assets/mask2.svg';
import get_help from '../assets/get_help.svg';
import get_tested from '../assets/get_tested.svg';
const { Option } = Select;

export default class Welcome extends Component {
  state = {
    visible: false,
    placement: 'bottom',
    lastUpdated: null,
    newReportsToday: null,
    totalReported: null,
    timeseries: null,
    reports: null,
    drawerLoading: true,
    drawerLoaded: false,
    drawerLoadError: false
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount = async () => {
    try {
      const { data } = await API.get('metrics');
      this.setState({
        ...data,
        drawerLoading: false,
        drawerLoaded: true,
        drawerLoadError: false,
        selectedTimeseries: data.timeseries['90_days']
      });
    } catch(e) {
      console.log('e: ',e);
    }
  }

  handleRangeChange = (val) => {
    const { timeseries } = this.state;
    this.setState({
      selectedTimeseries: timeseries[val]
    });
  }

  render() {
    console.log('rendering...');
    const {
      drawerLoading,
      drawerLoaded,
      drawerLoadError,
      placement,
      visible,
      lastUpdated,
      newReportsToday,
      totalReported,
      timeseries,
      selectedTimeseries,
      reports
    } = this.state;
    const styles={
			title:{
				backgroundColor: '#00bcd4',
				padding: '16px 0',
				boxSizing: 'border-box',
				color: 'white',
				minHeight: '64px',
				fontSize: '24px',
				textAlign: 'center'
			},
			colouredDiv: hue => ({
				height: '100px',
				backgroundColor: `hsl(${hue%360}, 80%, 80%)`
			})
		};
    const columns = [
      { title: 'Date Reported', dataIndex: 'dateReported', key: 'dateReported' },
      { title: 'Position', dataIndex: 'position', key: 'position' },
      { title: 'Date Last on Campus', dataIndex: 'dateLastOnCampus', key: 'dateLastOnCampus' },
    ];
    return (
      <>
        <div className="resources">
          <nav className="resources-nav">
            <div className="first">
              <Link to="/welcome">
                <FiArrowLeft/>
              </Link>
            </div>
            <div className="middle">
              All Resources
            </div>
            <div className="last">
            </div>
          </nav>
          <div className="resources-list">
            <div className="resources-header">
              General Resources
            </div>
            <div className="resources-tiles" style={{"marginBottom": "20px"}}>
              <a href="http://health.gatech.edu/coronavirus/operations-status" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <MdUpdate/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Campus Status and Updates
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="https://health.gatech.edu/coronavirus/campus-guidelines#preventive" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={mask_purple}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Prevention on Campus
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="http://health.gatech.edu/coronavirus/services-guide" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={get_help}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Getting Help
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="http://health.gatech.edu/coronavirus/prevention-wellbeing#testing" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={get_tested} style={{"width": "25px"}}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Getting Tested
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="http://health.gatech.edu/coronavirus/campus-guidelines#sick" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={cross}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      If You Get Sick
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
            </div>
            <div className="resources-header">
              Campus Services
            </div>
            <div className="resources-tiles">
              <a href="https://crc.gatech.edu/about/hours" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={crc}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      CRC
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="https://gatech.co1.qualtrics.com/jfe/form/SV_71mP5d4RzoAIjit" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={dining}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Dining and Delivery
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
              <a href="http://housing.gatech.edu/covid-19-changes-faqs" className="resources-tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <img src={cleaning}/>
                    </div>
                  </div>
                  <div className="tile-text__wrapper">
                    <div className="tile-text__top">
                      Housing FAQS
                    </div>
                    <div className="tile-text__bottom">
                    </div>
                  </div>
                </div>
                <div className="tile-right">
                  <BsChevronRight/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
