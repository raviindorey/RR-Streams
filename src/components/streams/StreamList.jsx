import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreams } = this.props;
    fetchStreams();
  }

  renderList() {
    const { streamsArr } = this.props;
    return streamsArr.map(
      streamObj => (
        <div className="item" key={streamObj.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {streamObj.title}
            <div className="description">
              {streamObj.description}
            </div>
          </div>
        </div>
      ),
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streamsArr: Object.values(state.streams),
});

const mapDispatchToProps = {
  fetchStreams,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);

StreamList.propTypes = {
  fetchStreams: PropTypes.func.isRequired,
  streamsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
