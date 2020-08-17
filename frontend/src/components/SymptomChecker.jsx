import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import Navbar from './Navbar';
import Consent from './Consent';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import R1 from './R1';
import R2 from './R2';
import R3 from './R3';
import R4 from './R4';

export default class SymptomChecker extends Component {
  handleSubmit = async (values) => {
    try {
      await API.post('screenings', values);
    } catch (e) {
      // await API.post('screenings/fail', e);
    }
  }

  render() {
    const initialValues = {
      consent: null,
      any_symptoms: "",
      exposure: "",
      symptoms_list: [],
      any_life_threaten: "",
      groups: []
    };

    const validationSchema = Yup.object().shape({
      consent: Yup.boolean().nullable(),
      any_symptoms: Yup.string().oneOf(["yes", "no"]).nullable(),
      exposure: Yup.string().oneOf(["yes", "no"]).nullable(),
      symptoms_list: Yup.array(),
      any_life_threaten: Yup.string().oneOf(["yes", "no"]).nullable(),
      groups: Yup.array()
    });

    return (
      <div className="symptom-checker">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
        >
          <Form>
            <Switch>
              <Route exact path="/screener/consent" component={Consent}/>
              <Route exact path="/screener/q1" component={Q1}/>
              <Route exact path="/screener/q2" component={Q2}/>
              <Route exact path="/screener/q3" component={Q3}/>
              <Route exact path="/screener/q4" component={Q4}/>
              <Route exact path="/screener/r1" component={R1}/>
              <Route exact path="/screener/r2" component={R2}/>
              <Route exact path="/screener/r3" component={R3}/>
              <Route exact path="/screener/r4" component={R4}/>
              <Redirect to="/screener/consent"/>
            </Switch>
          </Form>
        </Formik>
      </div>
    );
  }
}
