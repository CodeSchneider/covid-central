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

export default class Q1 extends Component {
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
      if (values.anySymptoms === "true") {
        history.push ('/screener/q3');
      } else {
        history.push ('/screener/q2');
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
      anySymptoms: ""
    };

    const validationSchema = Yup.object().shape({
      anySymptoms: Yup.string()
        .required('Required')
    });

    return (
      <div className="screener" style={{"backgroundColor": "#F5F5F7"}}>
        <div ref={this.myRef}></div>
        <Navbar back="/screener/consent" progress={50}/>
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
              <div class="title">Do you have any of the following?</div>
              <ol>
                <li>Do you have a <b>fever</b> (temperature over 100.4º F or 38º C) without having taken any fever-reducing medications?</li>
                <li>Do you have a <b>loss of smell or taste?</b></li>
                <li>Do you have a <b>cough?</b></li>
                <li>Do you have <b>muscle aches?</b></li>
                <li>Do you have a <b>sore throat?</b></li>
                <li>Do you have <b>shortness of breath?</b></li>
                <li>Do you have <b>chills?</b></li>
                <li>Do you have a new or unusual <b>headache?</b></li>
                <li>Have you experienced new onset of any <b>gastrointestinal symptoms</b> such as nausea, vomiting, diarrhea, or loss of appetite in the last few days?</li>
              </ol>
              <Field name="anySymptoms">
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
                disabled={!values.anySymptoms}
                loading={false}
              >
                Next
              </button>
            </form>
          )}
        />
        {/*<div className="content">
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
              <form onSubmit={handleSubmit}>
                { loadedSurvey &&
                  <>
                    <div className="fields">
                      {content.allIds.map((item, key) =>
                        <div
                          className={`field ${errors[item] && touched[item] && 'is-danger'}`}
                          key={key}
                        >
                          <div className="label">{content.byId[item]}</div>
                          <Field name={item}>
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
                                <Radio.Group
                                  {...field}
                                  buttonStyle="solid"
                                >
                                  <Radio.Button value={true}>Yes</Radio.Button>
                                  <Radio.Button value={false}>No</Radio.Button>
                                </Radio.Group>
                              </div>
                            )}
                          </Field>
                        </div>
                      )}
                    </div>
                    <div className="submit-bar">
                      <div className="progress">
                        <span className="text">Progress:</span>
                        <span className={`amount ${!isEmpty(errors) && !isEmpty(touched) && 'is-danger'}`}>
                          {Object.keys(values).filter(k => values[k] != null).length}/{content.allIds.length}
                        </span>
                      </div>
                      <Button
                        htmlType="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                        loading={isSubmitting}
                      >
                        Submit
                      </Button>
                    </div>
                  </>
                }
              </form>
            )}
          />
        </div>*/}
      </div>
    );
  }
}
