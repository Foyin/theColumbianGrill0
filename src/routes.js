import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';

export default (
  <Route path="/" component={index}>
    <IndexRoute component={Home} />
  </Route>
);

