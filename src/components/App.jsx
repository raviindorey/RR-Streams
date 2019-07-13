import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => (
  <div>
    This is page One!! <br />
    <Link to="/two">Go to page two</Link>
  </div>
);

const PageTwo = () => (
  <div>
    This is page Two my boi!! <br />
    <Link to="/">Go back to page one</Link>
  </div>
);

const App = () => (
  <div>
    {/* This is App! I think... */}
    <BrowserRouter>
      <Route path="/" exact component={PageOne} />
      <Route path="/two" component={PageTwo} />
    </BrowserRouter>
  </div>
);

export default App;
