import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class StreamForm extends Component {
  onSubmit = (formValues) => {
    const { onSubmit } = this.props;
    onSubmit(formValues);
  }

  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="error">
            {error}
          </div>
        </div>
      );
    } return null;
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
    const labelId = `createForm${Math.random()}`;
    return (
      <div className={className}>
        <label htmlFor={labelId}>
          {label}
          <input id={labelId} type="text" {...input} autoComplete="off" />
        </label>
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must a valid Stream Title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a valid Stream Description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

export default formWrapped;

StreamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
