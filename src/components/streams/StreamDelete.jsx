import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal.jsx';
import history from '../../history';

import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  renderActions = () => {
    const { stream, deleteStream, match } = this.props;
    if (!stream) {
      return null;
    }
    return (
      <>
        <button
          className="ui button negative"
          type="button"
          onClick={() => deleteStream(match.params.id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button" type="button">Cancel</Link>
      </>
    );
  };

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete this stream: ${stream.title}`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = {
  fetchStream,
  deleteStream,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);

StreamDelete.defaultProps = {
  stream: null,
};

StreamDelete.propTypes = {
  fetchStream: PropTypes.func.isRequired,
  deleteStream: PropTypes.func.isRequired,
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
