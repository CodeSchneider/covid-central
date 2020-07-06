import React, { Component } from 'react';
import { Table, Select } from 'antd';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import API from '../api';
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
        <div className="welcome">
          {/*<div className="nav">
            <div className="nav__wrap logo">
              <img src={gt}/>
            </div>
            <div className="nav__wrap title">
              <div>Covid Central</div>
            </div>
            <div className="nav__wrap search">
              <div><GoSearch/></div>
            </div>
          </div>*/}
          {/*<div>Welcome page under construction.</div>
          <Link to="/surveys/prelim">Start symptom check</Link>*/}
          {/*<div className="hex-grid">
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
                        backgroundColor: '#aaf0d1',
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
          </div>*/}
          <SwipeableBottomSheet
            overflowHeight={112}
            shadowTip={false}
          >
            <div className="bottom-sheet__summary">
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
                            colors: ['#a48fbd'],
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
            {/*
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
                    colors: ['#a48fbd'],
                    legend: 'none',
                    // hAxis: {
                    //   ticks: ['6/18', '6/21', '6/24', '6/27'],
                    // },
                    isStacked: false,
                    backgroundColor: '#f7f8fb'
                  }}
                  rootProps={{ 'data-testid': '2' }}
                />
              }
            </div>
            */}
            <div className="bottom-sheet-table">
              {/*
              <Table
                columns={columns}
                expandable={{
                  expandedRowRender: r => <p style={{ margin: 0 }}>{r.campusImpact}</p>,
                  rowExpandable: r => r.campusImpact
                }}
                dataSource={reports}
                loading={drawerLoading}
              />*/}
              {Array(30).fill().map((o, i) =>
      					<div key={i} style={styles.colouredDiv(i*20)} />
      				)}
              {/*
              <>
              { drawerLoaded &&
                <table class="table">
                  <thead>
                    <tr>
                      <th>Date Reported</th>
                      <th className="second">Position</th>
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
              </>
              */}
            </div>
          </SwipeableBottomSheet>
        </div>

      </>
    );
  }
}
