import React from "react";
import ReactModal from "react-modal";
// import TableRow from "./TableRow";
ReactModal.setAppElement("#root");

// import { Link } from "react-router-dom";

class ServiceReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,

      provider: this.props.data.provider,
      service: this.props.data.service,
      review: this.props.data.review
    };
    console.log(this.props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

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
          Add/Update Review
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Service Review">
          <div class="header peach-gradient">
            <h2 className="modal-title">SERVICE REVIEW</h2>
            <br />
            <br />
            <form>
              <div class="form-group">
                <label for="providerName">Provider</label>
                <input
                  type="text"
                  value={this.state.provider}
                  name="provider"
                  // onChange={this.handleInput}
                  class="form-control"
                  id="providerName"
                  readonly
                  disabled
                />
              </div>
              <div class="form-group">
                <label for="serviceDescription">Service Description</label>
                <input
                  type="text"
                  value={this.state.service}
                  name="service"
                  // onChange={this.handleInput}
                  class="form-control"
                  id="serviceDescription"
                  readonly
                  disabled
                />
              </div>
              <div class="form-group">
                <label for="reviewRating">Review Rating</label>
                {/* <input type="text" class="form-control" id="reviewRating" /> */}
                <select class="form-control" id="reviewRating">
                  <option value="" selected disabled>
                    Select an Option
                  </option>
                  <option value="1">1 (Really Bad Service)</option>
                  <option value="2">2 (I've experienced better)</option>
                  <option value="3">3 (Just OK)</option>
                  <option value="4">4 (I'm a fan</option>
                  <option value="5">5 (As good as it gets)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="reviewDescription">Review</label>
                <textarea
                  type="text"
                  value={this.state.review}
                  name="review"
                  onChange={this.handleInput}
                  class="form-control"
                  id="reviewDescription"
                  rows="5"
                />
                {/* <input
                type="text"
                value={this.state.review}
                name="review"
                onChange={this.handleInput}
                class="form-control"
                id="reviewDescription"
              /> */}
              </div>
              {/* <button type="submit" class="btn btn-primary">Submit</button>*/}
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

export default ServiceReview;
