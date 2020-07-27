import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import Navbar from './Navbar';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';
import { buildYup } from 'schema-to-yup'
import isEmpty from 'lodash/isEmpty';
import classNames from "classnames";


// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={classNames("input-feedback")}>{error}</div> : null;

// const Checkbox = ({
//   field: { name, value, onChange, onBlur },
//   form: { errors, touched, setFieldValue },
//   id,
//   label,
//   className,
//   ...props
// }) => {
//   return (
//     <div>
//       <input
//         name={name}
//         id={id}
//         type="checkbox"
//         value={value}
//         checked={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         className={classNames("radio-button")}
//       />
//       <label htmlFor={id}>{label}</label>
//       {touched[name] && <InputFeedback error={errors[name]} />}
//     </div>
//   );
// };

export default class Q4 extends Component {
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
      if (values.symptoms) {
        history.push ('/screener/q3');
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
      symptoms: [],
    };

    const validationSchema = Yup.object().shape({
      symptoms: Yup.array().required(
        "At least one symptom is required"
      )
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
            setFieldValue,
            setFieldTouched,
          }) => (
            <form className="form-screener" onSubmit={handleSubmit}>
              <div class="title">Which of the follow symptoms do you have?</div>
              <CheckboxGroup
                id="symptoms"
                label="Which of these?"
                value={values.symptoms}
                error={errors.symptoms}
                touched={touched.symptoms}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox1"
                  label="Fever"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox2"
                  label="Loss of smell or taste"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox3"
                  label="Cough"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox4"
                  label="Muscle aches"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox5"
                  label="Sore throat"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox6"
                  label="Shortness of breath"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox7"
                  label="Chills"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox8"
                  label="Headache"
                />
                <Field
                  component={Checkbox}
                  name="symptoms"
                  id="checkbox9"
                  label="Nausea, vomiting, diarrhea, or loss of appetite"
                />
              </CheckboxGroup>
              <button
                type="submit"
                className="next-button"
                disabled={!values.symptoms.length > 0 }
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
