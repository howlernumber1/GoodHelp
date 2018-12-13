import React from "react";
import ServiceOrder from "./ServiceOrderModal";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// ReactModal.setAppElement("#root");
// import { Link } from "react-router-dom";

class ProviderPage extends React.Component {
  state = {
    providerName: "Atlanta Metro Detail",
    img: "./images/car.jpg",
    alt: "red ferrari parked in front of chateau elan",
    Phone: "123-456-7891",
    Email: "Company@gmail.com",
    url: "Company@comp.com",
    ServiceCategory: "",
    ServiceDescription: "",
    Reviews: "",
    subCategories: [
      ["Tire Change", "Oil Change", "Tire Rotation"],
      [
        "Regular Hand Wash",
        "Premium Hand Wash",
        "Interior Detail",
        "Exterior Detail"
      ],
      ["diagnose car problem", "Fix Car"]
    ],
    ServiceCategory: [
      { name: "Car Repair", id: 0 },
      { name: "Car Wash", id: 1 },
      { name: "Mechanic", id: 2 }
    ],
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
          <br />
          <div className="row">
            <h1 className="providerName" id="providerpagetext">
              {this.state.providerName}
            </h1>
          </div>
          <br />
          <div className="row">
            <p
              className="form-control-static .d-inline"
              id="providerPhone"
              id="providerpagetext"
            >
              {this.state.Phone}
            </p>
          </div>
          <div className="row">
            <p
              className="form-control-static .d-inline"
              id="providerEmail"
              id="providerpagetext"
            >
              {this.state.Email}
            </p>
          </div>
          <div className="row">
            <p
              className="form-control-static .d-inline"
              id="providerUrl"
              id="providerpagetext"
            >
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
            <select
              onChange={this.handleSelect}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              {this.state.ServiceCategory.map(service => {
                return <option value={service.id}>{service.name}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reviewRating">Service Description</label>
            <select
              onChang={this.handleSub}
              className="form-control"
              id="subCatSelect"
            >
              {this.state.serviceSelected
                ? this.state.subCategories[this.state.serviceSelected].map(
                    ele => {
                      return <option value={ele}>{ele}</option>;
                    }
                  )
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reviewDescription">Reviews</label>
            <textarea class="form-control" rows="5">
              "They did a great job! I have 3 kids 2 dogs and a cat and we
              travel constantly. Needless to say, the inside of my car was a
              mess! Metro Atlanta Detailing cleaned it all up! They vacummed,
              removed stains, shampooed my seats, etc. Now my car looks
              immaculant! And they did an excellent job on the window tinting as
              well...it looks seamless."
            </textarea>
          </div>
          <div className="form-group">
            <textarea class="form-control" rows="5">
              "My backyard looks amazing! They installed a large fountain and a
              waterfall over my pool. They even added a firepit. My hedges are
              trimmed nicely, the lawn is mowed and the flower beds are among
              the most beautiful that I've ever seen. I gave them a few loose
              instructions on what I wanted and gave them creative leeway on the
              rest. What they came up with surpassed my expectations! I'll
              definitely be recommending them to my friends and family."
            </textarea>
          </div>
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
          {/* </div> */}
          {/* <button type="submit" className="btn btn-primary">Submit</button>*/}
        </form>
      </div>
    );
  }
}

export default ProviderPage;
