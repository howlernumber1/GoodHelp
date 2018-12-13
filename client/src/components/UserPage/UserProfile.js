import React from "react";
import ReactModal from "react-modal";
// import UserPage from "./UserPage__mine";
ReactModal.setAppElement("#root");

// import { Link } from "react-router-dom";

class UserProfile extends React.Component {
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
        {/* <button className="btnLink" onClick={this.handleOpenModal}> */}
        <button className="btn mr-5 update" onClick={this.handleOpenModal}>
          Update Profile
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="UserProfile">
          <form>
            <img
              className="rounded-circle accountUpdate"
              src="./images/profilepic.jpg"
              alt=""
            />
            <br /> <br />
            <h2 className="modal-title">Luana's Profile</h2>
            <br /> <br />
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" id="inputName" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail" />
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button>*/}
          </form>
          <br /> <br />
          {/* Need to add SAVE FUNCTIONALITY and update this.handleCloseModal */}
          <button type="submit" className="btn" onClick={this.handleCloseModal}>
            Save
          </button>
          <button type="submit" className="btn" onClick={this.handleCloseModal}>
            Cancel
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default UserProfile;
