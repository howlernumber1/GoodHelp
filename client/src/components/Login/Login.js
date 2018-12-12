import React from 'react';
import ReactModal from 'react-modal';
import $ from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes }  from '@fortawesome/free-solid-svg-icons';
ReactModal.setAppElement('#root');


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      loginEmail: "",
      loginPassword: ""
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    const loginUser = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    };
    console.log(loginUser);
    $.post('clients/login', loginUser)
    .then(res => {
      console.log(res)
      if(res.data) {
        console.log('successful login')
        this.setState({redirectTo: '/'
        })
      } else {
        console.log('login error');
      }
    })
    .catch(error => {
      console.log('login server error:');
      console.log(error);
    })
    this.handleCloseModal();
  };

  render() {
    return (
      <div>
        <button className="btnLink" onClick={this.handleOpenModal}>
          Login
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
        <form>
          <button className="close-float btnLink" onClick={this.handleCloseModal}><FontAwesomeIcon icon={faTimes} size="1x" /></button>
          <br></br>
          <label htmlFor="typeOfClient">What are you?</label>
          <select
            name="typeOfClient"
            onChange={this.handleChange}
            className="form-control"
            defaultValue="client"
          >
            <option value="client">Client</option>
            <option value="provider">Provider</option>
          </select>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address:</label>
            <input type="email" className="form-control" onChange={this.handleChange} name = "loginEmail" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password:</label>
            <input type="password" className="form-control" onChange={this.handleChange} name = "loginPassword" id="InputPassword" placeholder="Password"/>
          </div>
          {/* <button type="submit" class="btn btn-primary">Submit</button>*/}
        </form>

          <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
        </ReactModal>
      </div>
    );
  }
}

export default Login;
