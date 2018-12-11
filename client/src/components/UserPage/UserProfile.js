import React from "react";
import ReactModal from "react-modal";
// import UserPage from "./UserPage";
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
        <button
          className="btn btn-primary iconBtn"
          onClick={this.handleOpenModal}
        >
          Update Profile
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="UserProfile">
          <h2 className="modal-title">USER PROFILE</h2>
          <br /> <br />
          <form>
            <img
              className="rounded-circle"
              src="//www.gravatar.com/avatar/8cb7902f0a6c100e16cd43f97c0cf0f7?s=200&amp;rating=pg&amp;default=mm"
              alt=""
            />
            <br /> <br />
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="htmlForm-control" id="inputName" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" />
            </div>
            <div classNamelass="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail" />
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button>*/}
          </form>
          <br /> <br />
          {/* Need to add SAVE FUNCTIONALITY and update this.handleCloseModal */}
          <button
            type="submit"
            className="btn btn-primary iconBtn mr-5"
            onClick={this.handleCloseModal}
          >
            Save
          </button>
          <button
            type="submit"
            className="btn btn-primary iconBtn mr-5"
            onClick={this.handleCloseModal}
          >
            Cancel
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default UserProfile;
