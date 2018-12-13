import React from "react";
import ReactModal from "react-modal";
// import TableRow from "./TableRow";

ReactModal.setAppElement("#root");

// import { Link } from "react-router-dom";

class ServiceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    console.log(this.props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  state = {
    providerName: "Google Inc.",
    img: "./images/google.jpg",
    alt: "google office with their colored logo and a bike out front",
    Phone: "123-456-7891",
    Email: "Company@gmail.com",
    url: "Company@comp.com",
    ServiceCategory: "",
    ServiceDescription: "",
    Reviews: "",
    subCategories: [
      ["tire change", "oil change", "car wash"],
      ["lawn care", "trim trees", "trim edges"],
      ["Pick-up", "Delivery Truck Rental"],
      ["diagnose car problem", "Fix Car"],
      ["Fix Toilet", "Kitchen Sink", "Install Pipes"]
    ],
    ServiceCategory: [
      { name: "Car Repair", id: 0 },
      { name: "Lawn", id: 1 },
      { name: "Delivery", id: 2 },
      { name: "Mechanic", id: 3 },
      { name: "pluming", id: 4 }
    ],
    serviceSelected: null
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button className="btn btn-secondary" onClick={this.handleOpenModal}>
          Order Service
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Service Order">
          <div class="header peach-gradient">
            <h2 className="modal-title">SERVICE ORDER</h2>
            <br />
            <br />
            <form>
              <div class="form-group">
                <label for="providerName">Provider Name</label>
                <h3 className="providerName">{this.state.providerName}</h3>
              </div>
              <br />
              {/* <button type="submit" class="btn btn-primary">Submit</button>*/}

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
              class="btn btn-primary iconBtn mr-5"
              onClick={() =>
                this.props.updateData(this.props.data.id, this.state)
              }
            >
              Save
            </button>
            <button
              class="btn btn-primary iconBtn mr-5"
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
