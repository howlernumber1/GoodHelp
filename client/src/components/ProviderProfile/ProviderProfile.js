import React, { Component } from 'react';
import Provider from '../ProviderProfile/Providers';




class ProviderProfile extends Component {

    state = {

        providerName: "Google Inc.",
        img: "./images/google.jpg",
        alt: "google office with their colored logo and a bike out front",
        statusRequest: ""
    };

  


    render() {

        return (
            <div className="provider-profile">

                <Provider
                    providerName={this.state.providerName}
                    img={this.state.img}
                    alt={this.state.alt}
                    statusRequest={this.state.statusRequest}
                />

            </div>


        );
    };
}

    // handleRequestChange = (event) => (
    //     this.setState(
    //       {
    //         statusRequest: event.target.value
    //       }
    //     )
    //   )

    handleOpenRequestClick = (event) => {
        event.preventDefault();
      }

      handlePendingRequestClick = (event) => {
        event.preventDefault();
      }

      handleClosedRequestClick = (event) => {
        event.preventDefault();
      }


    render() {

        return (
            <div className="provider-profile">
            
           <Provider  
           providerName={this.state.providerName}
           img=  {this.state.img}
           alt={this.state.alt}
        //   if (statusReques)  {this.state.statusRequest.open} 
           
           />

            </div>


        );
    };
}



export default ProviderProfile;