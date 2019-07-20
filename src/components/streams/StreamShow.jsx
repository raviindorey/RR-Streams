import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => ({
  stream: state.streams[ownState.match.params.id],
});

const mapDispatchToProps = {
  fetchStream,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);

StreamShow.defaultProps = {
  stream: null,
};

StreamShow.propTypes = {
  fetchStream: PropTypes.func.isRequired,
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
