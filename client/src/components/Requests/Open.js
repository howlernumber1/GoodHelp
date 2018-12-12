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
                        {/* these items need a model maybe? or something that can be used to connect to the sumbit button on the providers page that the users use to submit their requests. I put an idea for them below that arent the actually being used so make them whatever you need */}
                        <tr>
                            {/* {props.invoiceNumber} */}
                            <th scope="row">1</th>

                            {/* {props.username} */}
                            <td>Ted D.</td>

                            {/* {props.task} */}
                            <td>Interior Detail w/carpet shampoo, </td>

                              {/* buttons on click move it to the corresponding table */}
           
                            <td>
                                 {/* Drop-down (pending and closed) buttons need a remove and post request to remove the ask connect to it from this open page and add it to the corresponding closed or pending tables  */}
                            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Open
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#" id="pending">Pending</a>
    <a class="dropdown-item" href="#" id="closed">Closed</a>
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