import React from "react";
import ServiceOrder from "./ServiceOrderModal";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// ReactModal.setAppElement("#root");
// import { Link } from "react-router-dom";

class ProviderPage extends React.Component {
  state = {
    providerName: "Google Inc.",
    img: "./images/google.jpg",
    alt: "google office with their colored logo and a bike out front",
    Phone: "123-456-7891",
    Email: "Company@gmail.com",
    url: "Company@comp.com",
    ServiceDescription: "",
    Reviews: [""],
    ServiceCategory: ["Car Repair", "Lawn", "Delivery", "Mechanic", "pluming"],
    serviceSelected: null
  };

  handleSelect = event => {
    this.setState({
      serviceSelected: event.target.value
    });
  };
  handleSub = event => {
    this.setState({
      subCategorieSelect: event.target.value
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="card card-body text-black mb-3" id="providerPageCard">
          <div className="row">
            <img
              className="profile-img rounded mx-auto d-block"
              src={this.state.img}
              alt={this.state.alt}
            />
          </div>
          <br />
          <div className="row">
            <h1 className="providerName">{this.state.providerName}</h1>
          </div>
          <br />
          <div className="row">
            <p
              className="form-control-static "
              align="center"
              id="providerPhone"
            >
              {this.state.Phone}
            </p>
          </div>
          <div className="row">
            <p className="form-control-static .d-inline" id="providerEmail">
              {this.state.Email}
            </p>
          </div>
          <div className="row">
            <p className="form-control-static .d-inline" id="providerUrl">
              {this.state.url}
            </p>
          </div>
          <div className="row">
            {/* //SERVICE ORDER BUTTON */}
            <div className="col-4 col-md-3 m-auto">
              <ServiceOrder />
            </div>
          </div>
        </div>

        {/* //FORM */}
        <form>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Services Provided</label>
            <p className="form-control-static .d-inline" id="providerServices">
              {this.state.ServiceCategory}
            </p>
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
    );
  }
}

export default ProviderPage;
