import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import URLInputBar from '../../../../components/inputs/URLInputBar';

const URLInputForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} style={{ height: '5vh' }}>
    <Field name="src" component={URLInputBar} />
  </form>
);

URLInputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const withForm = reduxForm({
  form: 'urlInputForm',
  onSubmit: (values, _, props) => {
    props.onSubmit(values);
  }
});

export default compose(withForm)(URLInputForm);
