import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import UserPage from "./components/UserPage/UserPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ProviderPage from "./components/ProviderProfile/ProviderProfile";
import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav className="navbar">
              <p className="navbar-brand"> GoodHelp</p>
              <span>
              <Link  className="links" to={'/'}>Home</Link> |
              {/* <Link to={'/search'}>Search</Link> | */}
              <Link className="links" to={'/services'}>Services</Link> |
              <Link className="links" to={'/user'}>Member</Link> |
              <Link className="links" to={'/user'}>Provider</Link> |
              <Login></Login>|
              <SignUp></SignUp>
              </span>
            </nav>
          </header>

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/provider' component={ProviderPage} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
