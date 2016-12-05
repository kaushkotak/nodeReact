// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import JobPage from './components/JobPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="job/:id" component={JobPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
