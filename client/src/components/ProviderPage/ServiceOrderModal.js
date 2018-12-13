import React from "react";
import ReactModal from "react-modal";
// import TableRow from "./TableRow";

ReactModal.setAppElement("#root");

// import { Link } from "react-router-dom";

class ServiceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      providerName: "Google Inc.",
      phone: "123-456-7891",
      email: "Company@gmail.com",
      url: "Company@comp.com",
      serviceCategory: [
        { name: "Car Repair", id: 0 },
        { name: "Lawn", id: 1 },
        { name: "Delivery", id: 2 },
        { name: "Mechanic", id: 3 },
        { name: "pluming", id: 4 }
      ]
      // subCategories: [
      //   ["tire change", "oil change", "car wash"],
      //   ["lawn care", "trim trees", "trim edges"],
      //   ["Pick-up", "Delivery Truck Rental"],
      //   ["diagnose car problem", "Fix Car"],
      //   ["Fix Toilet", "Kitchen Sink", "Install Pipes"]
      // ],

      // serviceSelected: null
    };

    console.log(this.props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // state = {
  //   providerName: "Google Inc.",
  //   phone: "123-456-7891",
  //   email: "Company@gmail.com",
  //   url: "Company@comp.com",
  //   serviceCategory: [
  //     { name: "Car Repair", id: 0 },
  //     { name: "Lawn", id: 1 },
  //     { name: "Delivery", id: 2 },
  //     { name: "Mechanic", id: 3 },
  //     { name: "pluming", id: 4 }
  //   ],
  //   subCategories: [
  //     ["tire change", "oil change", "car wash"],
  //     ["lawn care", "trim trees", "trim edges"],
  //     ["Pick-up", "Delivery Truck Rental"],
  //     ["diagnose car problem", "Fix Car"],
  //     ["Fix Toilet", "Kitchen Sink", "Install Pipes"]
  //   ],

  //   serviceSelected: null
  // };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleOpenModal() {
    this.setState({ showModal: false });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

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
      <div>
        <button className="btn btn-secondary" onClick={this.handleOpenModal}>
          Order Service
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Service Order">
          <div className="header">
            <h2 className="modal-title">SERVICE ORDER</h2>
            <br />
            <br />
            <form>
              <div className="form-group">
                {/* <label for="providerName">Provider Name</label> */}
                <h3 className="providerName">{this.state.providerName}</h3>
                <input type="text" value={this.state.providerName} />
              </div>
              <br />

              {/* //FORM */}

              <div className="form-group">
                <label htmlfor="exampleFormControlSelect1">
                  Services Provided
                </label>
                <select
                  onChange={this.handleSelect}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  {/* {this.state.ServiceCategory.map(service => {
                    return <option value={service.id}>{service.name}</option>;
                  })} */}

                  {/* {this.state.ServiceCategory.map(service => {
                    return <option value={service.name} />;
                  })} */}
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
            </form>

            {/* Need to add SAVE FUNCTIONALITY and update this.handleCloseModal */}
            <button
              className="btn btn-primary iconBtn mr-5"
              onClick={() =>
                this.props.updateData(this.props.data.id, this.state)
              }
            >
              Save
            </button>
            <button
              className="btn btn-primary iconBtn mr-5"
              onClick={this.handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default ServiceOrder;
