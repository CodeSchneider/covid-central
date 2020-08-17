import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Field, useFormikContext } from 'formik';
import Navbar from './Navbar';
import RadioButton from './RadioButton';
import ScrollTo from './ScrollTo';

const NextButton = React.forwardRef((props, ref) => {
  const { values } = useFormikContext();
  const { push } = useHistory();
  function handleNext() {
    if (values.any_symptoms === "yes") {
      push('/screener/q4');
    } else {
      push('/screener/q2');
    }
  }
  return (
    <button
      ref={ref}
      className="next-button"
      disabled={!values.any_symptoms}
      onClick={() => handleNext()}
      loading={false}
    >
      Next
    </button>
  )
});

export default class Q1 extends Component {
  constructor(props) {
    super(props)
    this.topRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount = async () => {
    this.topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  render() {
    return (
      <div className="workspace">
        <div className="screener" style={{"backgroundColor": "#F5F5F7"}}>
          <div ref={this.topRef}></div>
          <Navbar back="/screener/consent" progress={50}/>
          <div className="form-screener">
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
            <Field name="any_symptoms">
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
                    inputRef={this.buttonRef}
                    values={values}
                    name={field.name}
                  />
                  <div className="control">
                    <RadioButton
                      {...field}
                      id="yes"
                      value="yes"
                      isChecked={field.value === "yes"}
                      handleChange={field.onChange}
                    >
                      I'm experiencing at least one of these
                    </RadioButton>
                    <RadioButton
                      {...field}
                      id="no"
                      value="no"
                      isChecked={field.value === "no"}
                      handleChange={field.onChange}
                    >
                      I do not have any of these
                    </RadioButton>
                  </div>
                </>
              )}
            </Field>
            <NextButton ref={this.buttonRef}/>
          </div>
        </div>
      </div>
    );
  }
}
