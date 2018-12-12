import React from "react";
import ServiceOrder from "./ServiceOrderModal";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import ReactModal from "react-modal";
// import ProviderSumPro from "./ProviderSumPro";
// ReactModal.setAppElement("#root");
// import { Link } from "react-router-dom";

class ProviderPage extends React.Component {
  state = {};

  updateData = (index, data) => {
    console.log(index);
    console.log(data);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="provider">
              <div
                className="card card-body text-black mb-3"
                id="providerPageCard"
              >
                <div className="row">
                  <img
                  // className="profile-img rounded mx-auto d-block"
                  // src={props.img}
                  // alt={props.alt}
                  />
                  <br />
                  {/* <h1 className="providerName">{props.providerName}</h1> */}
                </div>
                <div>
                  <h4 htmlFor="reviewRating">Phone:</h4>
                  <p className="form-control-static">123-456-7891</p>
                  <label htmlFor="reviewDescription">Email:</label>
                  <p className="form-control-static">Company@dotcom</p>
                  <label htmlFor="providerName">URL:</label>
                  <p className="form-control-static">Company@dotcom</p>
                </div>
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <ServiceOrder />
                  </div>
                </div>
              </div>

              <form>
                <div className="form-group">
                  <label htmlFor="serviceDescription">Services Provided</label>
                  <p className="form-control-static" />
                </div>
                <div className="form-group">
                  <label htmlFor="reviewRating">Rating:</label>
                  <p className="form-control-static">4 Stars</p>
                </div>
                <div className="form-group">
                  <label htmlFor="reviewDescription">Reviews</label>
                  {/* <tbody className="table-body bg-light tbodypage">
                {fakeData.map(item => {
                  return (
                    <TableRow
                      handleUpdate={this.updateData}
                      onClick={this.handleOnClick}
                      data={item}
                    />
                  );
                })}
              </tbody> */}
                </div>
                {/* <button type="submit" className="btn btn-primary">Submit</button>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProviderPage;
