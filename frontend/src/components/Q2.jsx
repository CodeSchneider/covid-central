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
    if (values.exposure === "yes") {
      push('/screener/r2');
    } else {
      push('/screener/r1');
    }
  }
  return (
    <button
      ref={ref}
      className="next-button"
      disabled={!values.exposure}
      onClick={() => handleNext()}
      loading={false}
    >
      Next
    </button>
  )
});

export default class Q2 extends Component {
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
          <Navbar back="/screener/q1" progress={50}/>
          <div className="form-screener">
            <div class="title">Have either of the following occurred?</div>
            <ul>
              <li>Have you, or anyone you have been in close contact with, been <b>diagnosed with Covid-19 or placed in quarantine</b> for possible exposure to Covid-19 within the last two weeks?</li>
              <li>Have you been <b>asked to self-isolate or quarantine</b> by a medical professional or a local public health official within the last two weeks?</li>
            </ul>
            <Field name="exposure">
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
