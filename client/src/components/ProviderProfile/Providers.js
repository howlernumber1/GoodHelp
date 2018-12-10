import React from 'react';
import Requests from '../Requests/Requests';


const Provider = (props) => (
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
                <a className="menu-item" onClick={props.handleRequestClick1} value={props.open} href="#" >Open Requests</a>
                <br />
                <a className="menu-item" onClick={props.handleRequestClick2} value={props.pending} href="#" >Pending Requests</a>
                <br />
                <a className="menu-item" onClick={props.handleRequestClick3} value={props.closed} href="#" >Closed Requests</a>
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
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                    <div className="input-group-append">
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" selected href="#" status={props.open}>Open</a>
                                            <a className="dropdown-item" status={props.pending} href="#">Pending</a>
                                            <a className="dropdown-item" status={props.closed} href="#">Closed</a>
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

  )

export default Provider;