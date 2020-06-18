import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Radio, Alert, Steps } from 'antd';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import Navbar from './Navbar';
import { buildYup } from 'schema-to-yup'
import isEmpty from 'lodash/isEmpty';
const { Step } = Steps;

export default class Survey extends Component {
  state = {
    slug: null,
    loadingSurvey: true,
    loadedSurvey: false,
    loadErrorSurvey: false,
    submittingSurvey: false,
    submittedSurvey: false,
    submitErrorSurvey: false,
    initialValues: {}
  }

  handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      const { history } = this.props;
      console.log('PROPS: ',this.props);
      const { slug } = this.state;
      const { data: { next } } = await API.post(`surveys/${slug}/submissions`, values);
      history.push(next);
    } catch(e) {
      console.log(e);
      // setStatus(e || "Problem saving code. Try again.");
    }
  }

  componentDidUpdate = async (prevProps) => {
    try {
      const { slug } = this.props.match.params;
      const { slug : prevSlug } = prevProps.match.params;
      if (slug !== prevSlug) {
        const { data: {
          content,
          submissionSchema,
          instructions,
          navExtra
        }} = await API.get(`surveys/${slug}`);
        const initialValues = content.allIds.reduce((acc, questionId) => {
          return {
            ...acc,
            [questionId]: null
          }
        }, {});
        this.setState({
          slug,
          content,
          instructions,
          navExtra,
          submissionSchema,
          initialValues,
          loadingSurvey: false,
          loadedSurvey: true,
          loadErrorSurvey: false
        });
      }
    } catch(e) {
      console.log('e: ',e);
    }
  }

  componentDidMount = async () => {
    try {
      const { slug } = this.props.match.params;
      const { data: {
        content,
        submissionSchema,
        instructions,
        navExtra
      }} = await API.get(`surveys/${slug}`);
      const initialValues = content.allIds.reduce((acc, questionId) => {
        return {
          ...acc,
          [questionId]: null
        }
      }, {});
      this.setState({
        slug,
        content,
        instructions,
        navExtra,
        submissionSchema,
        initialValues,
        loadingSurvey: false,
        loadedSurvey: true,
        loadErrorSurvey: false
      });
    } catch(e) {
      console.log('e: ',e);
    }
  }
  render() {
    const {
      content,
      submissionSchema,
      instructions,
      navExtra,
      initialValues,
      loadingSurvey,
      loadedSurvey,
    } = this.state;
    const validationSchema = loadedSurvey ? buildYup(submissionSchema, {}) : {};

    return (
      <div className="page survey">
        <Navbar extra={null}/>
        <div className="content">
          {navExtra &&
            <Steps size="small" current={1}>
              <Step title="Finished" />
              <Step title="In Progress" />
            </Steps>
          }
          <div className="instructions">
            {instructions}
          </div>
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
                        <div className={`field ${errors[item] && touched[item] && 'is-danger'}`}>
                          <div class="label">{content.byId[item]}</div>
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
        </div>
      </div>
    );
  }
}
