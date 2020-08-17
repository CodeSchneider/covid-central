import React, { Component } from 'react';
import { Table, Select } from 'antd';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import API from '../api';
import { MdUpdate } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import covid_check_icon from '../assets/covid-check-icon.svg';
import gt_white_logo from '../assets/gt_white_logo.svg';
import covid_central_logo from '../assets/covid_central_logo_white.svg';
import novid_white from '../assets/novid_white.svg';
import hex from '../assets/hex3.png';
import Mask from "../icons/mask";
import Crc from "../icons/crc";
import Sick from "../icons/sick";
import Test from "../icons/test";
import Help from "../icons/help";
import Dining from "../icons/dining";
import Housing from "../icons/housing";
// import dcc_logo from '../assets/dcc_dark.svg';
import dcc_logo from '../assets/dcc_dark_v2.svg';
import cc_logo from '../assets/checkcovid_v1.svg';
const { Option } = Select;

export default class Welcome extends Component {
  state = {
    // primaryColor: '#53f',
    primaryColor: '#335161',
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
      reports,
      primaryColor
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
      <div className="workspace">
        <div className="welcome">
          <div className="head">
            <div className="hexagon-background">
              <img src={hex}/>
            </div>
            <nav className="navbar">
              <div className="navbar__logo">
                <img src={gt_white_logo}/>
              </div>
              <div className="navbar__title">
                <div className="first_wrapper">
                  <img src={covid_central_logo}/>
                </div>
                <div className="second_wrapper">
                  <span className="first">COVID</span>
                  <span className="second">&nbsp;Central</span>
                </div>
              </div>
              <div className="empty">
              </div>
            </nav>
            <Link to="/screener/consent" className="covid-check_wrapper">
              <div className="covid-check">
                <div className="covid-check__top">
                  <div className="covid-check__title-area">
                    <div className="covid-check__image">
                      <img src={cc_logo}/>
                    </div>
                    <div className="covid-check__title">
                      <div className="covid_check__title__first">
                        symptom checker
                      </div>
                      <div className="covid_check__title__second">
                        Powered by Georgia Tech
                      </div>
                    </div>
                  </div>
                  <div className="covid-check__start-button">
                    Start
                  </div>
                </div>
                <div className="covid-check__bottom">
                  <div>Check your risk for COVID-19</div>
                  <div>and what to do next.</div>
                  {/*<span>Check if you might have COVID-19<span></br><span>and what to do next</span>*/}
                </div>
              </div>
            </Link>
          </div>
          <div className="body">
            <div className="tiles-header">
              <div className="tiles-header__text">
                Exposure Notification
              </div>
              <div className="tiles-header__link">
                <Link to="/novid">See More</Link>
              </div>
            </div>
            <Link to="/novid">
              <div className="news">
                <div className="icon-wrapper">
                  <img src={novid_white}/>
                </div>
                <div className="text-wrapper">
                  <div className="header">
                  Help Protect the GT Community
                  </div>
                  <div className="description">
                    Use the NOVID app to anonymously receive alerts about your potential exposure to COVID.
                  </div>
                  <div className="read-more">
                    Read more...
                  </div>
                </div>
              </div>
            </Link>
            <div className="tiles-header">
              <div className="tiles-header__text">
                Campus Resources
              </div>
              <div className="tiles-header__link">
                <Link to="/resources">See All Resources</Link>
              </div>
            </div>
            <div className="tiles">
              <a href="http://health.gatech.edu/coronavirus/operations-status" className="tile">
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
              <a href="https://health.gatech.edu/coronavirus/campus-guidelines#preventive" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Mask color={primaryColor}/>
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
              <a href="http://health.gatech.edu/coronavirus/services-guide" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Help color={primaryColor}/>
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
              <a href="http://health.gatech.edu/coronavirus/testing-launched" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Test color={primaryColor}/>
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
              <a href="http://health.gatech.edu/coronavirus/campus-guidelines#sick" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Sick color={primaryColor}/>
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
            <div className="tiles-header" style={{"marginTop": "20px"}}>
              <div className="tiles-header__text">
                Campus Services
              </div>
            </div>
            <div className="tiles" style={{"marginBottom": "60px"}}>
              <a href="https://crc.gatech.edu/about/hours" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Crc color={primaryColor}/>
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
              <a href="https://gatech.co1.qualtrics.com/jfe/form/SV_71mP5d4RzoAIjit" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Dining color={primaryColor}/>
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
              <a href="http://housing.gatech.edu/covid-19-changes-faqs" className="tile">
                <div className="tile-left">
                  <div className="tile-icon__wrapper">
                    <div className="tile-icon">
                      <Housing color={primaryColor}/>
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
          <SwipeableBottomSheet
            overflowHeight={110}
            shadowTip={false}
            marginTop={64}
          >
            <div
              className="bottom-sheet__summary"
            >
              <div className="bottom-sheet__grip"></div>
              <div className="bottom-sheet__metrics">
                <div className="bottom-sheet__metrics__daily">
                  <div className="bottom-sheet__metrics__title">New Reports Today</div>
                  <div className="bottom-sheet__metrics__daily__wrapper">
                    <div className="bottom-sheet__metrics__daily__value">{newReportsToday}</div>
                  </div>
                </div>
                <div className="bottom-sheet__metrics__total">
                  <div className="bottom-sheet__metrics__title">Total Reported</div>
                  <div className="bottom-sheet__metrics__total__wrapper">
                    <div className="bottom-sheet__metrics__total__value">{totalReported}</div>
                    <div className="bottom-sheet__metrics__total__chart">
                      { drawerLoaded &&
                        <Chart
                          width={'100%'}
                          height={'30px'}
                          chartType="SteppedAreaChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            [
                              { type: 'date', label: 'Day' },
                              'New Reports',
                            ],
                            ...timeseries['90_days'].map(i => [new Date(i.date), i.value])
                          ]}
                          options={{
                            backgroundColor: { fill:'transparent' },
                            enableInteractivity: false,
                            chartArea: {
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0
                            },
                            fontName: 'BentonSans',
                            vAxis: {
                              textPosition: 'none',
                              gridlines: {
                                color: 'transparent',
                                count: 2
                              }
                            },
                            hAxis: {
                              textPosition: 'none',
                              gridlines: {
                                color: 'transparent',
                                count: 2
                              }
                            },
                            lineWidth: 1,
                            // colors: ['#a48fbd'],
                            // colors: ['#53f'],
                            // colors: ['#5534FF'],
                            // colors: ['#42a5f5'],
                            colors: [`#f37453`],
                            legend: 'none',
                            baselineColor: 'none',
                            isStacked: false,
                          }}
                          rootProps={{ 'data-testid': '1' }}
                        />
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-sheet__last-updated__wrapper">
                <div className="bottom-sheet__last-updated">
                  <span className="bottom-sheet__last-updated__label">last update</span>
                  <span className="bottom-sheet__last-updated__value">{lastUpdated}</span>
                </div>
                <div className="bottom-sheet__sourced-from">
                  <span className="bottom-sheet__sourced-from__label">source</span>
                  <a
                    className="bottom-sheet__sourced-from__value"
                    href="http://health.gatech.edu/coronavirus/health-alerts"
                  >
                    health.gatech.edu
                  </a>
                </div>
              </div>
            </div>


            <div className="bottom-sheet-graph">
              <div className="bottom-sheet-graph__top-wrapper">
                <div className="bottom-sheet-graph__title">Daily Confirmed Cases</div>
                <div className="bottom-sheet-graph__range">
                  <Select
                    dropdownClassName="range-dropdown"
                    defaultValue="90_days"
                    onChange={this.handleRangeChange}
                    loading={drawerLoading}
                    optionLabelProp="label"
                  >
                    <Option value="30_days" label="Past 1 month">
                      <div className="range">Past 1 month</div>
                      <div className="resolution">1 day resolution</div>
                    </Option>
                    <Option value="60_days" label="Past 2 months">
                      <div className="range">Past 2 months</div>
                      <div className="resolution">1 day resolution</div>
                    </Option>
                    <Option value="90_days" label="Past 3 months">
                      <div className="range">Past 3 months</div>
                      <div className="resolution">1 day resolution</div>
                    </Option>
                  </Select>
                </div>
              </div>
              { drawerLoaded &&
                <Chart
                  width={'100%'}
                  height={'112px'}
                  chartType="SteppedAreaChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      { type: 'date', label: 'Day' },
                      'New Reports',
                    ],
                    ...selectedTimeseries.map(i => [new Date(i.date), i.value])
                  ]}
                  options={{
                    // title: "The decline of 'The 39 Steps'",
                    // vAxis: { title: 'Accumulated Rating' },
                    // backgroundColor: {
                    // },
                    enableInteractivity: false,
                    // chartArea: {
                    //   top: 30
                    // },
                    chartArea: {
                      top: 20,
                      left: 15,
                      bottom: 20,
                      right: 3
                    },
                    fontName: 'BentonSans',
                    vAxis: {
                      minValue: 0,
                      // ticks: [0, 2, 4, 6, 8],
                      textStyle: {
                        color: '#a6b1c1'
                      },
                      gridlines: {
                        color: '#eef1f6',
                        minSpacing: 10,
                        // count: 3
                      },
                      baselineColor: '#eef1f6',
                    },
                    hAxis: {
                      format: 'M/d',
                      gridlines: {
                        // color: 'none',
                        color: '#eef1f6',
                        count: 5
                      },
                      textStyle: {
                        color: '#a6b1c1'
                        // fontName: <string>,
                        //   fontSize: <number>,
                        //   bold: <boolean>,
                        //   italic: <boolean> }
                      },
                      // baselineColor: '#eef1f6'
                      // maxTextLines: 1
                    },
                    axes: {
                      x: {
                         0: {side: 'top'}
                      }
                   }  ,
                    lineWidth: 1,
                    // colors: ['#a48fbd'],
                    colors: ['#f37453'],
                    legend: 'none',
                    // hAxis: {
                    //   ticks: ['6/18', '6/21', '6/24', '6/27'],
                    // },
                    isStacked: false,
                    // backgroundColor: '#f7f8fb',
                    backgroundColor: '#fff9f8'
                    // backgroundColor: '#53f'
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
              }
            </div>

            <div className="bottom-sheet-table">
              { drawerLoaded &&
                <table class="table">
                  <thead>
                    <tr>
                      <th style={{"width": "36%"}}>Date Reported</th>
                      <th style={{"width": "20%"}} className="second">Position</th>
                      <th>Date Last on Campus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((r, index) => {
                      return (
                        <tr key={index}>
                          <td className="first">{r.dateReported}</td>
                          <td className="second">{r.position}</td>
                          <td className="third">{r.dateLastOnCampus}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              }

            </div>
          </SwipeableBottomSheet>
        </div>
      </div>
    );
  }
}
