import React from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Welcome from './components/Welcome';
import Resources from './components/Resources';
import PrivacyEvaluation from './components/PrivacyEvaluation';
import Novid from './components/Novid';
import SymptomChecker from './components/SymptomChecker';
import GA from './utils/GoogleAnalytics'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      { GA.init() && <GA.RouteTracker /> }
      <Switch>
        <Route exact path="/welcome" component={Welcome}/>
        <Route exact path="/resources" component={Resources}/>
        <Route exact path="/novidcheck" render={() => (window.location = "https://c19.ctisl.gtri.gatech.edu")}/>
        <Route exact path="/novid" component={Novid}/>
        <Route exact path="/privacy-evaluation" component={PrivacyEvaluation}/>
        <Route path="/screener" component={SymptomChecker}/>
        <Redirect to="/welcome"/>
      </Switch>
    </Router>
  );
}

export default App;
