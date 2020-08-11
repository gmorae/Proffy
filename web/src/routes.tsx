import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { userAuth } from './utils/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/Forgot-password';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Successfully from './pages/Successfully';

const PrivateRoute = ({ component: Component }: any) => (
  <Route
    render={props =>
      userAuth()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />
    }
  />
);

const Routes = () => (
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/landing" component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
    <Route path="/successfully" component={Successfully} />
  </Router>
)

export default Routes;