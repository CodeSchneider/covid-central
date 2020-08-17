import React from 'react';
import { useFormikContext } from 'formik';

const AutoSubmit = () => {
  const { submitForm } = useFormikContext();
  React.useEffect(() => {
    submitForm();
  }, [submitForm]);
  return null;
};

export default AutoSubmit;
