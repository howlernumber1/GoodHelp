<<<<<<< HEAD
import React from "react";
// import Requests from '../Requests/Requests';

const Provider = props => (
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

    <div className="row">
      <div className="menu col-3">
        <h3 className="menu-title">Service Requests</h3>
        <a
          className="menu-item"
          onClick={props.handleRequestClick1}
          value={props.open}
          href="/requests"
        >
          Open Requests
        </a>
        <br />
        <a
          className="menu-item"
          onClick={props.handleRequestClick2}
          value={props.pending}
          href="/requests"
        >
          Pending Requests
        </a>
        <br />
        <a
          className="menu-item"
          onClick={props.handleRequestClick3}
          value={props.closed}
          href="/requests"
        >
          Closed Requests
        </a>
      </div>

      <div className="requests col-9">
        <h3> {props.value} Requests</h3>

        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Invoice #</th>
              <th scope="col">Name</th>
              <th scope="col">Description of Task</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              {/* {props.username} */}
              <td>Cody</td>
              {/* {props.task} */}
              <td>Fix plumbing issues in kitchen</td>
              <td>open</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Fix clogged shower drain</td>
              <td>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                  <div className="input-group-append">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        selected
                        href="/requests"
                        status={props.open}
                      >
                        Open
                      </a>
                      <a
                        className="dropdown-item"
                        status={props.pending}
                        href="/requests"
                      >
                        Pending
                      </a>
                      <a
                        className="dropdown-item"
                        status={props.closed}
                        href="/requests"
                      >
                        Closed
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Provider;
=======
import React from 'react';
import Open from '../Requests/Open';
import Pending from '../Requests/Pending';
import Closed from '../Requests/Closed';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Provider = (props) => (
    <BrowserRouter>
        <div className="provider">

            <div className="jumbotron jumbotron-fluid">
                <hr className="my-4" />

                <div>
                    <img className="profile-img rounded mx-auto d-block" src={props.img} alt={props.alt} />
                    <br />
                    <h1 className="providerName">{props.providerName}</h1>
                </div>

            </div>

            <div className="row">
                <div className="menu col-3">

                    <h3 className="menu-title">Service Requests</h3>

                    <Link className="links menu-item" to={'/open'}>Open</Link> 
                    <br />
                    <Link className="links menu-item" to={'/pending'}>Pending</Link>
                    <br />
                    <Link className="links menu-item" to={'/closed'}>Closed</Link>
                </div>
                <Switch>
                    <Route exact path='/open' component ={Open} />
                    <Route exact path='/pending' component ={Pending} />
                    <Route exact path='/closed' component ={Closed} />
                </Switch>


            </div>


        </div>
    </BrowserRouter>

)

export default Provider;    
>>>>>>> 92b973d2fba92fb9ac3f15de701aa639c0833027
