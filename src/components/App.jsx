import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => (
  <div>
    This is page One!! <br />
  </div>
);

const PageTwo = () => (
  <div>
    This is page Two my boi!! <br />
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
