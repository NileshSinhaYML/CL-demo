import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Demo from './views/demo/Demo';
import Landing from './views/landing/Landing';

import { Routes as RouteConstants } from './constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <main className="app-main">
        <Routes>
          <Route path={RouteConstants.Landing} element={<Landing />} />
          <Route path={RouteConstants.Demo} element={<Demo />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
