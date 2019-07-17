import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm.jsx';

class StreamEdit extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    const { editStream, match } = this.props;
    editStream(match.params.id, formValues);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchStream,
  editStream,
};

const mapStateToProp = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProp, mapDispatchToProps)(StreamEdit);

StreamEdit.defaultProps = {
  stream: null,
};

StreamEdit.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  editStream: PropTypes.func.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  stream: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
