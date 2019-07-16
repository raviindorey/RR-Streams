import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends Component {
  renderInput(formProps) {
    return (
      <input
        type="text"
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    )
  }

  render() {
    return (
      <div>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </div>
    );
  }
}

export default reduxForm({
  form: 'steamCreate',
})(StreamCreate);
