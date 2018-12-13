import React from "react";
import TableRow from "./TableRow";
import UserProfile from "./UserProfile";

// import { Link } from "react-router-dom";
// import ServiceReview from "./ServiceReviewModal_mine";
// import ProviderSummary from "../ProviderPage/ProviderSummary";

//Created fake data to test dynamic row creation
const fakeData = [
  {
    id: 0,
    provider: "Metro Atlanta Detailing Inc.",
    title: "Detailing Services",
    service: "Interior Detail & Window Tinting",
    status: "Closed",
    review:
      "They did a great job! I have 3 kids 2 dogs and a cat and we travel constantly. Needless to say, the inside of my car was a mess! Metro Atlanta Detailing cleaned it all up! They vacummed, removed stains, shampooed my seats, etc. Now my car looks immaculant! And they did an excellent job on the window tinting as well...it looks seamless."
  },
  {
    id: 1,
    provider: "The Pink Plumber",
    title: "Plumbing Services ",
    service: "Unclog the shower drain and fix the garbage disposal",
    status: "Pending",
    review: " "
  },
  {
    id: 2,
    provider: "Property Masters Landscaping",
    title: "Lawn & Yard Services",
    service:
      "Back Yard Landscaping - including installation of a water feature",
    status: "Closed",
    review:
      "My backyard looks amazing! They installed a large fountain and a waterfall over my pool. They even added a firepit. My hedges are trimmed nicely, the lawn is mowed and the flower beds are among the most beautiful that I've ever seen. I gave them a few loose instructions on what I wanted and gave them creative leeway on the rest. What they came up with surpassed my expectations! I'll definitely be recommending them to my friends and family."
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
            <div className="card card-body text-black mb-3" id="userPageCard">
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
                <div className="row">
                  <span>
                    <UserProfile />
                    <a
                      href="/#searchServices"
                      className="btn mr-5"
                      role="button"
                      id="Order Service"
                    >
                      Order Service
                    </a>
                  </span>
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
            <thead className="thead text-align-center">
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
