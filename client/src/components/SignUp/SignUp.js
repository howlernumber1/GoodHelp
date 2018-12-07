import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


class SignUp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button className="btnLink" onClick={this.handleOpenModal}>SignUp</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        <form>
          <div class="form-group">
            <label htmlFor="InputEmail">Email address:</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label htmlFor="InputUsername">Username:</label>
            <input type="text" class="form-control" id="InputUsername" placeholder="Username"/>
          </div>
          <div class="form-group">
            <label htmlFor="InputPassword">Password:</label>
            <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          <div class="form-group">
            <label htmlFor="PasswordConf">Confirm Password:</label>
            <input type="password" class="form-control" id="PasswordConf" placeholder="Password"/>
          </div>
          {/* <button type="submit" class="btn btn-primary">Submit</button>*/}
        </form>

          <button className="btn btn-primary" onClick={this.handleCloseModal}>Register</button>
        </ReactModal>
      </div>
    );
  }
}


export default SignUp;
