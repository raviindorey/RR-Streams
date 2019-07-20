import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams();
  }

  renderControlButtons(streamObj) {
    const { currentUserId } = this.props;
    if (streamObj.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${streamObj.id}`} className="ui button primary" type="button">
            Edit
          </Link>
          <Link to={`/streams/delete/${streamObj.id}`} className="ui button negative" type="button">
            Delete
          </Link>
        </div>
      );
    } return null;
  }

  renderList() {
    const { streamsArr } = this.props;
    return streamsArr.map(
      streamObj => (
        <div className="item" key={streamObj.id}>
          {this.renderControlButtons(streamObj)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${streamObj.id}`} className="header">
              {streamObj.title}
            </Link>
            <div className="description">
              {streamObj.description}
            </div>
          </div>
        </div>
      ),
    );
  }

  renderCreateButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    } return null;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streamsArr: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = {
  fetchStreams,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);

StreamList.defaultProps = {
  currentUserId: null,
  isSignedIn: null,
};

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streamsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUserId: PropTypes.string,
  isSignedIn: PropTypes.bool,
};
