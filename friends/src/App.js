import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <Route path='/' component={Header} />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute path="/add" component={AddFriend} />
        <PrivateRoute path="/friends" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
