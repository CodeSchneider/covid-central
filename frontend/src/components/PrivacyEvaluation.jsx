import React, { Component } from 'react';
import { Table, Select } from 'antd';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
export default class PrivacyEvaluation extends Component {
  constructor(props) {
      super(props)
      this.myRef = React.createRef();
  }
  componentDidMount = async () => {
    this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
  render() {
    return (
      <div className="privacy-evaluation">
        <div ref={this.myRef}></div>
        <nav className="privacy-evaluation-nav">
          <div className="first">
            <Link to="/novid">
              <FiArrowLeft/>
            </Link>
          </div>
          <div className="middle">
            NOVID Privacy Evaluation
          </div>
          <div className="last">
          </div>
        </nav>
        <div className="content">
          <h1>Independent Review – NOVID Contact Tracing Mobile Application</h1>
          <p>Research Scientists from the Georgia Tech Research Institute (GTRI) Software Assurance Branch conducted an independent review of the NOVID contact tracing mobile application. This review focused on verifying that NOVID’s actual collection, use, and storage of user data is consistent with their claims concerning user privacy, and ensuring that adequate information security controls are used throughout the system. GTRI’s review included:</p>
          <ol>
            <li>A review of NOVID’s Android, iOS, and backend server source code, which was voluntarily provided to GTRI</li>
            <li>An analysis of NOVID’s use of user personally identifiable information (PII) during operation</li>
            <li>Collection and analysis of data exchanged between the system’s mobile application software and its backend server</li>
          </ol>
          <p>GTRI’s review was conducted on Android version 3.1.0 and iOS version 2.2.2 (source code)/2.3.0 (running application). The review was concluded on July 27, 2020. It is important to note that GTRI’s review was conducted before NOVID incorporated WiFi functionality into their smartphone applications. This update, as well as subsequent updates to NOVID’s source code or pre-built packages available in first-party app stores, may invalidate some or all of GTRI’s findings.</p>
          <p>GTRI found that NOVID’s source code follows secure software engineering practices and is generally free of obvious security concerns. Further, GTRI found no collection, use, or storage of PII in NOVID’s source code that is inconsistent with their claims. Specifically, GTRI observed that NOVID sends the following information to its servers from a user’s device:</p>
          <ul>
            <li>NOVID-specific randomly generated identifier</li>
            <li>NOVID-specific randomly generated password</li>
            <li>Device brand and model</li>
            <li>Device operating system name and version</li>
            <li>Application version</li>
            <li>Positive COVID-19 report – symptomatic and time symptoms started</li>
            <li>Negative COVID-19 report – time recovered</li>
            <li>NOVID-specific, user-chosen, community identifier.</li>
          </ul>
          <p>During run-time analysis of NOVID’s Android and iOS smartphone applications, GTRI observed that NOVID’s contact tracing features functioned properly between devices from the same manufacturer (e.g., iOS to iOS) and cross-platform (e.g., iOS to Android). Finally, GTRI observed that NOVID’s smartphone applications do not transmit user PII to the backed server (or any other destination).</p>
          <p>In conclusion, GTRI assesses that the NOVID contact tracing mobile application appears to function as advertised. Further, NOVID appears to uphold its user privacy policies with regard to the collection, protection, and transmission of user PII.</p>
          <h2>Disclaimer:</h2>
          <p>GTRI’s independent review is not a guarantee, warranty, approval, endorsement or assertion that NOVID will protect a user’s PII under any circumstances. GTRI’s independent review is for general information purposes. Use of NOVID is strictly at user’s own risk and user assumes sole responsibility and risk of their use of NOVID.</p>
          <p>The Board of Regents of the University System of Georgia by and on behalf of Georgia Institute of Technology (“Georgia Tech”), including GTRI (a Georgia Tech research departmental unit), is not responsible for user’s use of NOVID and not responsible for any errors or omissions. UNDER NO CIRCUMSTANCES SHALL GEORGIA TECH, GEORGIA TECH RESEARCH CORPORATION (GTRC), GEORGIA TECH APPLIED RESEARCH CORPORATION (GTARC) OR THE BOARD OF REGENTS OF THE UNIVERSITY SYSTEM OF GEORGIA (USG) BE LIABLE FOR ANY LOSS OR DAMAGES OF ANY KIND,  REGARDLESS OF WHETHER THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGES, INCLUDING WITHOUT LIMITATION, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE LOSS OR DAMAGE, FOR ANY REASON,  REGARDLESS OF THE LEGAL THEORY ON WHICH LIABILITY IS BASED, INCLUDING WITHOUT LIMITATION, ANY LOSS OR DAMAGE ARISING OUT OF, OR IN CONNECTION WITH USER’S USE OF NOVID.</p>
          <p>NO REPRESENTATIONS, PROMISES OR WARRANTIES OF ANY KIND ARE MADE REGARDING THE ACCURACY, RELIABILITY, RELEVANCY, TIMELINESS, UTILITY, SUITABILITY, AVAILABILITY OR COMPLETENESS OF NOVID. ALL WARRANTIES AND REPRESENTATIONS, WHETHER EXPRESSED, IMPLIED OR STATUTORY, REGARDING NOVID ARE EXPRESSLY DISCLAIMED, INCLUDING WITHOUT LIMITATION ANY WARRANTY OF PERFORMANCE, MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, NON-INFRINGEMENT OR WARRANTY THAT THE DATA OR CONTENT IS ERROR FREE.</p>
          <p>GTRI cannot and does not state with certainty that NOVID is free of software defects or vulnerabilities which might cause or be exploited for disclosure of private user data.</p>
          <p>The results of GTRI’s independent review are not a guarantee, warranty, approval or endorsement or assertion that NOVID will accurately record contacts and/or potential exposure to any disease, including but not limited to COVID-19, with other users under any and all circumstances.</p>
        </div>
      </div>
    );
  }
}
