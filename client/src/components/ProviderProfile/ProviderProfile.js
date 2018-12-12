import React, { Component } from 'react';
import Provider from '../ProviderProfile/Providers';




class ProviderProfile extends Component {

    state = {

        providerName: "Atlanta Metro Detail",
        img: "./images/car.jpg",
        alt: "red ferrari parked in front of chateau elan",
        statusRequest: ""
    };


    

    render() {

        return (
            <div className="provider-profile">

           <Provider
           providerName={this.state.providerName}
           img=  {this.state.img}
           alt={this.state.alt}
           statusRequest={this.state.statusRequest}
           />

        
            </div>


        );
    };
}



export default ProviderProfile;
