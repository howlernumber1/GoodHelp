import React, { Component } from "react";
import Category from "../Categories/Category";
import * as $ from "axios";

const Services = props => <p id={props.key}>{props.service}</p>;

const Provider = props => <h1>{props.providerName}</h1>;

class HomePage extends Component {
  state = {
    providerSearchInput: "",
    services: [],
    providers: []
  };

  //functions change of state and click function connected to the search button//

  handleProviderSearchChange = event => {
    this.setState({
      providerSearchInput: event.target.value
    });
  };

  handleProviderSearchClick = event => {
    event.preventDefault();
    console.log(this.state.providerSearchInput);
    const searchTerm = this.state.providerSearchInput;

    $.get(`/api/serviceprovider/search/${searchTerm}`).then(result => {
      this.setState({
        providers: result.data
      });
    });
  };

  //function connected to the service category buttons//

  handleServiceClick = event => {
    event.preventDefault();
    console.log(event.target.value);
    const category = event.target.value;

    $.get(`/api/serviceprovider/${category}`).then(result => {
      this.setState({
        providers: result.data
      });
    });
  };

  render() {
    return (
      <div className="wrapper">
        {/* home section */}

        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">
            Welcome to <span className="title">GoodHelp</span>
          </h1>
          <p className="lead">
            They say "Good Help" is hard to find...well, not anymore.{" "}
          </p>
          <hr className="my-4" />
          <p>
            Search within our large list of credited and reliable businesses to
            find the right one for your property management needs.
          </p>
          <p>
            If you are a small business who wants to join 'Good Help', sign up
            now as a provider and grow your clientele (or business).
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-lg"> Get Started</button>
          </div>
        </div>

        {/* search section */}
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="searchSection" id="searchServices">
              <h4>Looking for a specific service provider?</h4>
              <br />
              <form className="form-inline d-flex justify-content-center">
                <input
                  onChange={this.handleProviderSearchChange}
                  value={this.state.providerSearchInput}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Provider Name"
                  aria-label="Search"
                />
                <button
                  onClick={this.handleProviderSearchClick}
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <br />
          <div className="row results d-flex justify-content-center" />

          {/* This is where the results from the search button are appended */}

          <div className="SearchResults" />
        </div>

        <hr />

        {/* Services Section */}

        <div className="container">
          <br />
          <div className="card-deck row">
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Auto Services"
              img="./images/auto.png"
              alt="broken down blue car"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Assembly Services"
              img="./images/tools.png"
              alt="wooden tool box full of tools"
            />
            <Category
              category="Boat Services"
              img="./images/Boat-1.png"
              alt="white and gray speed boat with a blue canopy"
            />
            <Category
              category="Cleaning &amp; Housekeeping Services"
              img="./images/vacuum.png"
              alt="blue vacuum"
            />
          </div>
          <br />
          <div className="card-deck row">
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Delivery &amp; Pick-Up/Moving Services"
              img="./images/organize.png"
              alt="loaded boxes in the back of a white moving truck"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Electrical Services"
              img="./images/bulb.png"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="HVAC Services"
              img="./images/ac.png"
              alt="gray hvac unit"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Landscaping &amp; Lawn Services"
              img="./images/mower.png"
              alt="green and yellow riding lawnmower"
            />
          </div>
          <br />
          <div className="card-deck row">
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Mounting &amp; Installation Services"
              img="./images/tv3.png"
              alt="flat screen tv"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Organization Services"
              img="./images/files.png"
              alt="daily planner with color dividers"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Painting Services"
              img="./images/paint.png"
            />
            <Category
              handleServiceClick={this.handleServiceClick}
              category="Plumbing Services"
              img="./images/sink.png"
              alt="white toilet"
            />
          </div>
          <br />
          <div />

          <div>
            {this.state.providers.length <= 1 ? (
              this.state.providers.map((provider, _id) => (
                <div key={provider._id} className="card">
                  <div className="card-body">
                    <Provider providerName={provider.business_name} />
                    {provider.services_provided.map((service, i) => (
                      <Services key={i} service={service} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>

          <a href="/">Back to Top</a>
        </div>

        {/* footer */}
        <footer className="footer">
          <div>
            <span>Copyright @ 2018</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
