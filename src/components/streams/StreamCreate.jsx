import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createStream } from '../../actions';

// Still can make it a dumb component
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    const { createStream } = this.props;
    createStream(formValues);
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

const mapStateToProps = state => null;

const mapDispatchToProps = {
  createStream,
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped);

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createStream: PropTypes.func.isRequired,
};
