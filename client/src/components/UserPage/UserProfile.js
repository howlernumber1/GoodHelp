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
<<<<<<< HEAD
        <button className="btn mr-5" onClick={this.handleOpenModal}>
          Update Profile
        </button>
        <ReactModal isOpen={this.state.showModal} contentLabel="UserProfile">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title">USER PROFILE</h2>
              </div>
              <div class="modal-body">
                {/* /////////////////////////////////// */}
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
                    {/* <input type="text" className="Form-control" id="inputName" /> */}
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPhone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhone"
                    />
                  </div>
                  <div classNamelass="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                    />
                  </div>
                </form>
                <br /> <br />
                <div class="modal-footer">
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
                </div>
              </div>
            </div>
          </div>
=======
        <button
          className="btn mr-5 update"
          onClick={this.handleOpenModal}
        >
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
          <button
            type="submit"
            className="btn"
            onClick={this.handleCloseModal}
          >
            Save
          </button>
          <button
            type="submit"
            className="btn"
            onClick={this.handleCloseModal}
          >
            Cancel
          </button>
>>>>>>> 560dd6ca9dbcb16f3d4b7fae207327c82bf785e8
        </ReactModal>
      </div>
    );
  }
}

export default UserProfile;
