import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/Login';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SuccessfullyRegistered from './pages/SuccessfullyRegistered';

const Routes = () => (
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/landing" exact component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
    <Route path="/successfully-registered" component={SuccessfullyRegistered} />
  </Router>
)

export default Routes;