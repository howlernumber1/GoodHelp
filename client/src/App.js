import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import UserPage from "./components/UserPage/UserPage";
import ProviderProfile from "./components/ProviderProfile/ProviderProfile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
<<<<<<< HEAD
import ProviderPage from "./components/ProviderPage/ProviderPage";
=======
import ProviderPage from "./components/ProviderProfile/ProviderProfile";
import Services from "./components/Services/Services";
>>>>>>> 2a3145e2dcae8e0cd785c7b78e8796c2bb750c56
import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';

const Header = props => (
  <header>
    {props.location.pathname === '/user' ? (
      <nav className="navbar">
        <p className="navbar-brand"> GoodHelp</p>
        <span>
          <Link className="links" to={'/'}>Home</Link>  |
          {/* <Link to={'/search'}>Search</Link> | */}
          <Link className="links" to={'/services'}>The</Link> |
          <Link className="links" to={'/user'}>New</Link> |
          <Link className="links" to={'/user'}>One</Link> <br />
          <div className="d-flex justify-content-end float-right">
            <Login />|
            <SignUp />
          </div>
        </span>

      </nav>
    ) : (
        <nav className="navbar">
          <p className="navbar-brand"> GoodHelp</p>
          <span>
            <Link className="links" to={'/'}>Home</Link>  |
          {/* <Link to={'/search'}>Search</Link> | */}
            <Link className="links" to={'/services'}>Services</Link> |
            <Link className="links" to={'/user'}>Member</Link> |
            <Link className="links" to={'/provider'}>Provider</Link> <br />
            <div className="d-flex justify-content-end float-right">
            <Login />|
            <SignUp />
            </div>
          </span>

        </nav>
      )
    }
  </header>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

        {/*  <header>
            <nav className="navbar">
              <p className="navbar-brand"> GoodHelp</p>
              <span>
                <Link className="links" to={'/'}>Home</Link> |
              <Link className="links" to={'/search'}>Search</Link> |
                <Link className="links" to={'/services'}>Services</Link> |
          <Link className="links" to={'/user'}>Member</Link> |
          <Link className="links" to={'/provider'}>Provider</Link>
              </span>

            </nav>
          </header> */}

          <Route component={Header} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/provider' component={ProviderProfile} />
            <Route exact path='/services' component={Services}/>
            <Route component={NoMatch} />
          </Switch>

    
        </div>
      </BrowserRouter>

      
    );
  }
}

export default App;
