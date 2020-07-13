import React from 'react';
import "./style/style.scss";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import T1 from './components/T1';
import T2 from './components/T2';
import T3 from './components/T3';
import Resources from './components/Resources';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/*<Route path="/" component={Tabs}/>*/}
      {/*Refactor with HOC checking for mode...all comps below as well*/}
      <div className="workspace">
        <Switch>
          <Route exact path="/welcome" component={Welcome}/>
          <Route exact path="/resources" component={Resources}/>
          <Route exact path="/surveys/:slug" component={Survey}/>
          <Route exact path="/surveys/prelim/terminals/pass" component={T1}/>
          <Route exact path="/surveys/follow-up/terminals/pass" component={T2}/>
          <Route exact path="/surveys/follow-up/terminals/fail" component={T3}/>
          <Redirect to="/welcome"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
