import React from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Welcome from './components/Welcome';
import Consent from './components/Consent';
import Q1 from './components/Q1';
import Q2 from './components/Q2';
import Q3 from './components/Q3';
import Q4 from './components/Q4';
import R1 from './components/R1';
import R2 from './components/R2';
import R3 from './components/R3';
import R4 from './components/R4';
import T1 from './components/T1';
import T2 from './components/T2';
import T3 from './components/T3';
import Resources from './components/Resources';
import PrivacyEvaluation from './components/PrivacyEvaluation';
import Novid from './components/Novid';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/*<Route path="/" component={Tabs}/>*/}
      {/*Refactor with HOC checking for mode...all comps below as well*/}
      {/*<div className="workspace">*/}
        <Switch>
          <Route exact path="/welcome" component={Welcome}/>
          <Route exact path="/resources" component={Resources}/>
          <Route exact path="/novid" component={Novid}/>
          <Route exact path="/privacy-evaluation" component={PrivacyEvaluation}/>
          <Route exact path="/screener/consent" component={Consent}/>
          <Route exact path="/screener" component={Consent}/>
          <Route exact path="/screener/q1" component={Q1}/>
          <Route exact path="/screener/q2" component={Q2}/>
          <Route exact path="/screener/q3" component={Q3}/>
          <Route exact path="/screener/q4" component={Q4}/>
          <Route exact path="/screener/r1" component={R1}/>
          <Route exact path="/screener/r2" component={R2}/>
          <Route exact path="/screener/r3" component={R3}/>
          <Route exact path="/screener/r4" component={R4}/>
          <Route exact path="/surveys/prelim/terminals/pass" component={T1}/>
          <Route exact path="/surveys/follow-up/terminals/pass" component={T2}/>
          <Route exact path="/surveys/follow-up/terminals/fail" component={T3}/>
          <Redirect to="/welcome"/>
        </Switch>
      {/*</div>*/}
    </Router>
  );
}

export default App;
