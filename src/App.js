import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Settings from './components/settings/Settings';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <AppNavbar />
          <div className='container'>
            <Switch>
              <Route
                path='/client/edit/:id'
                component={UserIsAuthenticated(EditClient)}
              />
              <Route
                path='/client/add'
                component={UserIsAuthenticated(AddClient)}
              />
              <Route
                path='/client/:id'
                component={UserIsAuthenticated(ClientDetails)}
              />
              <Route path='/login' component={UserIsNotAuthenticated(Login)} />
              <Route
                path='/register'
                component={UserIsNotAuthenticated(Register)}
              />
              <Route
                exact
                path='/settings'
                component={UserIsAuthenticated(Settings)}
              />
              <Route
                exact
                path='/'
                component={UserIsAuthenticated(Dashboard)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
