import React, { Component } from 'react';
// import Open from '../Requests/Open';
// import Closed from '../Requests/Closed';


class Pending extends Component {

    state = {
        statusRequest: "pending"
    }

    render() {

        return (
            <div className="requests col ">


                <h3>  Pending Requests </h3>

                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Invoice #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Task Description</th>
                            <th scope="col">Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* {props.invoiceNumber} */}
                            <th scope="row">1</th>
                            {/* {props.username} */}
                            <td>Mark</td>
                            {/* {props.task} */}
                            <td>Fix clogged shower drain</td>
                            <td>
                            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pending
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {/* <a class="dropdown-item" href="#">Open</a>
    <a class="dropdown-item" href="#">Closed</a> */}
  </div>
</div>
                        </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Pending;
