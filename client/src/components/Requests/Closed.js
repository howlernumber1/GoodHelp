import React, { Component } from 'react';
// import Open from '../Requests/Open';
// import Pending from '../Requests/Pending';


class Closed extends Component {

    state = {
        statusRequest: "closed"
    }




    render() {

        return (
            <div className="requests col ">


                <h3> Closed Requests </h3>

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
                            {/* these items need a model maybe? or something that can be used to connect to the sumbit button on the providers page that the users use to submit their requests. I put an idea for them below that arent the actually being used so make them whatever you need */}
                            {/* {props.invoiceNumber} */}
                            <th scope="row">1</th>
                            {/* {props.username} */}
                            <td> Marg E.</td>
                            {/* {props.task} */}
                            <td>Tint windows</td>
                            <td>
                                 {/* Drop-down (poneding and open) buttons need a remove and post request to remove the ask connect to it from this closed page and add it to the corresponding pending or open tables  */}
                       <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Closed
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="open">Open</a>
    <a class="dropdown-item" id="pending">Pending</a>
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

export default Closed;