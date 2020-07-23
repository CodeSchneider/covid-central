import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Radio, Alert, Steps } from 'antd';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import Navbar from './Navbar';
import RadioButton from './RadioButton';
import { buildYup } from 'schema-to-yup'
import isEmpty from 'lodash/isEmpty';
const { Step } = Steps;

export default class Q3 extends Component {
  constructor(props) {
      super(props)
      this.state = {
        slug: null,
        loadingSurvey: true,
        loadedSurvey: false,
        loadErrorSurvey: false,
        submittingSurvey: false,
        submittedSurvey: false,
        submitErrorSurvey: false,
        initialValues: {}
      }
      this.myRef = React.createRef()
  }

  handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      console.log('values: ',values);
      const { history } = this.props;
      if (values.anySymptoms3 === "true") {
        history.push('/screener/r4');
      } else {
        history.push('/screener/q4');
      }
      // const { history } = this.props;
      // const { slug } = this.state;
      // const { data: { next } } = await API.post(`surveys/${slug}/submissions`, values);
      // history.push(next);
    } catch(e) {
      console.log(e);
      // setStatus(e || "Problem saving code. Try again.");
    }
  }

  // componentDidUpdate = async () => {
  //   console.log("DID UPDATE...");
  //     this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  // }

  componentDidMount = async () => {
    this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  // componentDidUpdate = async (prevProps) => {
  //   try {
  //     const { slug } = this.props.match.params;
  //     const { slug : prevSlug } = prevProps.match.params;
  //     if (slug !== prevSlug) {
  //       this.myRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  //       const { data: {
  //         content,
  //         submissionSchema,
  //         instructions,
  //         navExtra
  //       }} = await API.get(`surveys/${slug}`);
  //       const initialValues = content.allIds.reduce((acc, questionId) => {
  //         return {
  //           ...acc,
  //           [questionId]: null
  //         }
  //       }, {});
  //       this.setState({
  //         slug,
  //         content,
  //         instructions,
  //         navExtra,
  //         submissionSchema,
  //         initialValues,
  //         loadingSurvey: false,
  //         loadedSurvey: true,
  //         loadErrorSurvey: false
  //       });
  //     }
  //   } catch(e) {
  //     console.log('e: ',e);
  //   }
  // }
  //
  // componentDidMount = async () => {
  //   try {
  //     const { slug } = this.props.match.params;
  //     const { data: {
  //       content,
  //       submissionSchema,
  //       instructions,
  //       navExtra
  //     }} = await API.get(`surveys/${slug}`);
  //     const initialValues = content.allIds.reduce((acc, questionId) => {
  //       return {
  //         ...acc,
  //         [questionId]: null
  //       }
  //     }, {});
  //     this.setState({
  //       slug,
  //       content,
  //       instructions,
  //       navExtra,
  //       submissionSchema,
  //       initialValues,
  //       loadingSurvey: false,
  //       loadedSurvey: true,
  //       loadErrorSurvey: false
  //     });
  //   } catch(e) {
  //     console.log('e: ',e);
  //   }
  // }
  render() {
    const initialValues = {
      anySymptoms3: ""
    };

    const validationSchema = Yup.object().shape({
      anySymptoms3: Yup.string()
        .required('Required')
    });

    return (
      <div className="screener" style={{"backgroundColor": "#F5F5F7"}}>
        <div ref={this.myRef}></div>
        <Navbar back="/screener/q1" progress={50}/>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="form-screener" onSubmit={handleSubmit}>
              <div class="title">Do you have any of these life-threatening symptoms?</div>
              <ul start="10">
                <li>Bluish lips or face</li>
                <li>Severe and constant pain or pressure in the chest</li>
                <li>Extreme difficulty breathing (gasping for air or cannot talk without catching your breath)</li>
                <li>Severe and constant dizziness or lightheadedness</li>
                <li>Serious disorientation (acting confused)</li>
                <li>Unconscious or very difficult to wake up</li>
                <li>Slurred speech (new or worsening)</li>
                <li>Seizures</li>
                <li>Signs of low blood pressure (too weak to stand, light headed, feeling cold, pale, clammy skin)</li>
              </ul>
              <Field name="anySymptoms3">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: {
                    touched,
                    errors,
                    values,
                    setFieldValue,
                    setStatus,
                    status
                  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }) => (
                  <div className="control">
                    <RadioButton
                      {...field}
                      id="yes"
                      value="true"
                      isChecked={field.value === "true"}
                      handleChange={field.onChange}
                    >
                      I'm experiencing at least one of these
                    </RadioButton>
                    <RadioButton
                      {...field}
                      id="no"
                      value="false"
                      isChecked={field.value === "false"}
                      handleChange={field.onChange}
                    >
                      I do not have any of these
                    </RadioButton>
                  </div>
                )}
              </Field>
              <button
                type="submit"
                className="next-button"
                disabled={!values.anySymptoms3}
                loading={false}
              >
                Next
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}
