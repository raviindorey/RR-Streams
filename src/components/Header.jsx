import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth.jsx';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      Streamer
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
);

export default Header;
