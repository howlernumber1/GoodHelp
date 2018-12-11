import React, { Component } from 'react';
// import Pending from '../Requests/Pending';
// import Closed from '../Requests/Closed';


class Open extends Component {

    state = {
        statusRequest: "open"
    }

    render() {

        return (
            <div className="requests col ">


                <h3> Open Requests </h3>

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
                            <td>Sareka</td>

                            {/* {props.task} */}
                            <td>Fix clogged shower drain</td>

                              {/* buttons on click move it to the corresponding table */}
           
                            <td>
                            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Open
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Pending</a>
    <a class="dropdown-item" href="#">Closed</a>
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

export default Open;
