import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


// Still can make it a dumb component
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  }

  renderInput = ({ input, label }) => (
    <div className="field">
      <label>{label}</label>
      <input type="text" {...input} />
    </div>
  )

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
