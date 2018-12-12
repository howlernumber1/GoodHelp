import React from "react";
import ReactModal from "react-modal";
// import UserPage from "../UserPage/UserPage";
ReactModal.setAppElement("#root");

// import { Link } from "react-router-dom";

class ProviderSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button
          className="btn mr-5"
          onClick={this.handleOpenModal}
        >
          Provider Summary
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Provider Summary"
        >
          {/* ///// Card Header */}
          <div className="card-header">
            <hr className="my-4" />

            <div>
              <img
                className="profile-img rounded mx-auto d-block"
                // src={props.img}
                // alt={props.alt}
              />
              <br />
              {/* <h1 className="providerName">{props.providerName}</h1> */}
              <h1 className="providerName">PROVIDER NAME</h1>
            </div>
          </div>
          {/* ///// //////// */}

          <form>
            <h1 />
            <div className="form-group">
              <label htmlFor="providerName">Provider</label>
              <input
                type="text"
                className="form-control"
                id="providerName"
                aria-describedby=""
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceDescription">Service Description</label>
              <input
                type="text"
                className="form-control"
                id="serviceDescription"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="reviewRating">Review Rating</label>
              <input
                type="text"
                className="form-control"
                id="reviewRating"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="reviewDescription">Write Review</label>
              <input
                type="text"
                className="form-control"
                id="reviewDescription"
                placeholder=""
              />
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button>*/}
          </form>
          {/* Need to add SAVE FUNCTIONALITY and update this.handleCloseModal */}
          <button
            className="btn btn-primary iconBtn mr-3"
            onClick={this.handleCloseModal}
          >
            Save
          </button>
          <button
            className="btn btn-primary iconBtn mr-3"
            onClick={this.handleCloseModal}
          >
            Cancel
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default ProviderSummary;
