import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//COMPONENTS
import Nav from './components/nav/Nav';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import Dashboard from './components/dashboard/Dashboard';
import PostIssue from './components/postIssue/PostIssue';
import IssuePage from './components/issuePage/IssuePage';
import EditIssue from './components/editIssue/EditIssue';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>  
          <Route exact path = '/issue/new'>
            <PostIssue/>
          </Route>
          <ProtectedRoute exact path='/issue/:id' component={IssuePage}/>
          <ProtectedRoute path='/issue/:id/edit' component={EditIssue}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
