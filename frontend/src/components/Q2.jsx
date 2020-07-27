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
import ScrollTo from './ScrollTo';
const { Step } = Steps;

export default class Q2 extends Component {
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
      this.myRef = React.createRef();
      this.inputRef = React.createRef();
  }

  handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      console.log('values: ',values);
      const { history } = this.props;
      if (values.anySymptoms2 === "true") {
        history.push ('/screener/r2');
      } else {
        history.push ('/screener/r1');
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
      anySymptoms2: ""
    };

    const validationSchema = Yup.object().shape({
      anySymptoms2: Yup.string()
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
              <div class="title">Have either of the following occurred?</div>
              <ul>
                <li>Have you, or anyone you have been in close contact with, been <b>diagnosed with Covid-19 or placed in quarantine</b> for possible exposure to Covid-19 within the last two weeks?</li>
                <li>Have you been <b>asked to self-isolate or quarantine</b> by a medical professional or a local public health official within the last two weeks?</li>
              </ul>
              <Field name="anySymptoms2">
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
                  <>
                    <ScrollTo
                      inputRef={this.inputRef}
                      values={values}
                      name={field.name}
                    />
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
                  </>
                )}
              </Field>
              <button
                ref={this.inputRef}
                type="submit"
                className="next-button"
                disabled={!values.anySymptoms2}
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
