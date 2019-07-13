import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => (
  <div>
    This is page One!! <br />
    <a href="/two">Go to page two</a>
  </div>
);

const PageTwo = () => (
  <div>
    This is page Two my boi!! <br />
    <a href="/">Go back to page one</a>
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
