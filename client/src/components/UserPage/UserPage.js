import React from "react";
import TableRow from "./TableRow";
import { Link } from "react-router-dom";
import ServiceReview from "./ServiceReviewModal";
import ProviderSummary from "../ProviderSummary/ProviderSummary";
import UserProfile from "./UserProfile";

//Created fake data to test dynamic row creation
const fakeData = [
  {
    id: 0,
    provider: "M&M services",
    title: " Lawn Services ",
    service: "cut lawn",
    status: "Open",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    id: 1,
    provider: "Joe Smoe",
    title: "Mobile Detail ",
    service: "Wash Car",
    status: "Closed",
    review: " "
  },
  {
    id: 2,
    provider: "Just Kidding",
    title: "Baby sitting",
    service: "baby sit young child",
    status: "closed",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    id: 3,
    provider: "fdsfsd",
    title: "fdsfsf ",
    service: "fdsdfsf",
    status: "fdsdfsf",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
];

class UserPage extends React.Component {
  state = {};

  // handles review creation/edit button
  // handleOnClick = (id) => {
  //     alert(id)
  // }
  updateData = (index, data) => {
    console.log(index);
    console.log(data);
  };

  render() {
    return (
      <div className="container mt-5">
        {/* <div className="row  col-md-12"> */}

        <div className="row">
          <div className="col-md-12">
            {/* <div className="card card-body bg-info text-white mb-3"> */}
            <div className="card card-body bg-Light text-black mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    src="./images/profilepic.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="display-4 text-center">Luana Stecanella</h2>
                {/* <p className="lead text-center">
                  Phone <span>Email</span>
                </p> */}
                <br />
                <p />
                <div>
                <span><UserProfile />
                  <a
                    href="#"
                    className="btn mr-5"
                    role="button"
                    id="Order Service"
                  > 
                    Order Service
                  </a> </span>

                  {/* TEMPORARY BUTTON TO BE DELETED ONCE WE HAVE THE SEARCH FUNCTIONALITY WORKING ON THE HOME PAGE */}
                  
                    <ProviderSummary />
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Displays User service history */}
        <div className="row  col-md-12">
          {" "}
          <br /> <br />{" "}
        </div>
        <div className="row  col-md-12">
          <table className="table table-hover table-striped">
            <thead className="thead bg-secondary text-align-center">
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">Service Name</th>
                <th scope="col">Service Description</th>
                <th scope="col">Status</th>
                <th scope="col">Review</th>
                <th />
              </tr>
            </thead>
            <tbody className="table-body bg-light tbodypage">
              {fakeData.map(item => {
                return (
                  <TableRow
                    handleUpdate={this.updateData}
                    onClick={this.handleOnClick}
                    data={item}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserPage;
