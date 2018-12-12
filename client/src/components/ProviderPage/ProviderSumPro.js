import React, { Component } from "react";
// import Provider from "../ProviderProfile/Providers";
import ProviderPage from "./ProviderPage";

class ProviderSumPro extends Component {
  state = {
    providerName: "Google Inc.",
    img: "./images/google.jpg",
    alt: "google office with their colored logo and a bike out front",
    statusRequest: ""
  };

  handleOpenRequestClick = event => {
    event.preventDefault();
  };

  handlePendingRequestClick = event => {
    event.preventDefault();
  };

  handleClosedRequestClick = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="provider-sum">
        <ProviderPage
          providerName={this.state.providerName}
          img={this.state.img}
          alt={this.state.alt}
          //   if (statusReques)  {this.state.statusRequest.open}
        />
      </div>
    );
  }
}

export default ProviderPage;
