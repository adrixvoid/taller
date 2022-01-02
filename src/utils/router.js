import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoardPage';
import UsersPage from '../pages/UsersPage';
import TODOPage from '../pages/TODOPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={DashBoardPage} />
      <Route exact path='/users' component={UsersPage} />
      <Route exact path='/todo' component={TODOPage} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Router;
