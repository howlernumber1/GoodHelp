import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


class Login extends React.Component {
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
        <button className="btnLink" onClick={this.handleOpenModal}>Login</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        <form>
          <div class="form-group">
            <label for="InputEmail">Email address:</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="InputPassword">Password:</label>
            <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          {/* <button type="submit" class="btn btn-primary">Submit</button>*/}
        </form>

          <button className="btn btn-primary" onClick={this.handleCloseModal}>Login</button>
        </ReactModal>
      </div>
    );
  }
}


export default Login;
