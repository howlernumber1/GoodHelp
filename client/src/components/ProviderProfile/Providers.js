import React from "react";
import Open from "../Requests/Open";
import Pending from "../Requests/Pending";
import Closed from "../Requests/Closed";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UpdateProfile from "../ProviderProfile/UpdateProfile";

const Provider = props => (
  <BrowserRouter>
    {/* Heading for profile page */}

    <div className="provider">
      <div className="jumbotron jumbotron-fluid">
        <hr className="my-4" />

        <div>
          <img
            className="profile-img rounded mx-auto d-block"
            src={props.img}
            alt={props.alt}
          />
          <br />
          <h1 className="providerName">{props.providerName}</h1>
        </div>
      </div>
      {/* /Button to link to modal to update their business display page */}
      <UpdateProfile />
      {/* <Link className="btn update-profile" to={'/updateprofile'}><button>Update Profile</button></Link> */}

      {/* /menu for service requests that links to each request page and displays their table on the page/ */}
      <div className="row">
        <div className="menu col-3">
          <h3 className="menu-title">Service Requests</h3>

          <Link className="links menu-item" to={"/open"}>
            Open
          </Link>
          <br />
          <Link className="links menu-item" to={"/pending"}>
            Pending
          </Link>
          <br />
          <Link className="links menu-item" to={"/closed"}>
            Closed
          </Link>
        </div>
        <Switch>
          <Route exact path="/open" component={Open} />
          <Route exact path="/pending" component={Pending} />
          <Route exact path="/closed" component={Closed} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Provider;
