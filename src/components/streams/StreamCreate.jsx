import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createStream } from '../../actions';
import StreamForm from './StreamForm.jsx';

// Still can make it a dumb component
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    const { createStream } = this.props;
    createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStream,
};

export default connect(null, mapDispatchToProps)(StreamCreate);

StreamCreate.propTypes = {
  createStream: PropTypes.func.isRequired,
};
