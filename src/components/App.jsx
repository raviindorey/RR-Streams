import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header.jsx';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import history from '../history';

const App = () => (
  <div className="ui container">
    {/* Router */}
    <Router history={history}>
      {/* Header */}
      <Header />

      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/streams/show" exact component={StreamShow} />
    </Router>
  </div>
);

export default App;
