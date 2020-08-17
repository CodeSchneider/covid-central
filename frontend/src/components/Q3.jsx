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
    if (values.any_life_threaten === "yes") {
      push('/screener/r4');
    } else {
      push('/screener/r3');
    }
  }
  return (
    <button
      ref={ref}
      className="next-button"
      disabled={!values.any_life_threaten}
      onClick={() => handleNext()}
      loading={false}
    >
      Next
    </button>
  )
});

export default class Q3 extends Component {
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
            <Field name="any_life_threaten">
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
