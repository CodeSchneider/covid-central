import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Field, useFormikContext } from 'formik';
import Navbar from './Navbar';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

const options = [
  {
    id: 'fever',
    label: 'Fever'
  },
  {
    id: 'loss_of_smell_or_taste',
    label: 'Loss of smell or taste'
  },
  {
    id: 'cough',
    label: 'Cough'
  },
  {
    id: 'muscle_aches',
    label: 'Muscle aches'
  },
  {
    id: 'sore_throat',
    label: 'Sore throat'
  },
  {
    id: 'shortness_of_breath',
    label: 'Shortness of breath'
  },
  {
    id: 'chills',
    label: 'Chills'
  },
  {
    id: 'headache',
    label: 'Headache'
  },
  {
    id: 'nausea_vomiting_diarrhea_loss_of_appetite',
    label: 'Nausea, vomiting, diarrhea, or loss of appetite'
  }
];

const NextButton = React.forwardRef((props, ref) => {
  const { values } = useFormikContext();
  const { push } = useHistory();
  function handleNext() {
    if (values.symptoms_list.length > 0) {
      push('/screener/q3');
    } else {
      push('/screener/r1');
    }
  }
  return (
    <button
      ref={ref}
      className="next-button"
      disabled={!values.symptoms_list.length > 0}
      onClick={() => handleNext()}
      loading={false}
    >
      Next
    </button>
  )
});

export default class Q4 extends Component {
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
            <div class="title">Which of the follow symptoms do you have?</div>
            {/* TODO make checkbox all under one "Field"... */}
            <Field name="symptoms_list">
            {({
              field, // { name, value, onChange, onBlur }
              form: {
                touched,
                errors,
                values,
                setFieldValue,
                setFieldTouched,
              }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <CheckboxGroup
                id="symptoms_list"
                label="Which of these?"
                name={field.name}
                value={values.symptoms_list}
                error={errors.symptoms_list}
                touched={touched.symptoms_list}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                {options.map((option) =>
                  <Checkbox
                    key={option.id}
                    id={option.id}
                    label={option.label}
                  />
                )}
              </CheckboxGroup>
            )}
            </Field>
            <NextButton ref={this.buttonRef}/>
          </div>
        </div>
      </div>
    );
  }
}
