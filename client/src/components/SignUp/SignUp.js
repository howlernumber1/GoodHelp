import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


class SignUp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      signUpEmail: '',
      signUpUsername: '',
      signUpPassword: '',
      signUpConfirm: '',
      typeOfClient: 'customer'
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  signup = (event) => {
    event.preventDefault();
    const newUser = {
      email: this.state.signUpEmail,
      username: this.state.signUpUsername,
      password: this.state.signUpPassword,
      confirm: this.state.signUpConfirm,
    }
    console.log(newUser)
    this.handleCloseModal()
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
        <label htmlFor="typeOfClient">What are you?</label>
          <select name="typeOfClient" onChange={this.handleChange} className="form-control" defaultValue="customer">
            <option value="customer">Customer</option>
            <option value="provider">Provider</option>
          </select>
          {this.state.typeOfClient === "customer" ?
          <div>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address:</label>
            <input type="email" name="signUpEmail" onChange={this.handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="InputUsername">Username:</label>
            <input type="text" name="signUpUsername" onChange={this.handleChange} className="form-control" id="InputUsername" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password:</label>
            <input type="password" name="signUpPassword" onChange={this.handleChange} className="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="PasswordConf">Confirm Password:</label>
            <input type="password" name="signUpConfirm" onChange={this.handleChange} className="form-control" id="PasswordConf" placeholder="Password"/>
          </div>
          {/* <button type="submit" class="btn btn-primary">Submit</button> */}
          </div>
          : 
          <div>
                      <div className="form-group">
            <label htmlFor="InputEmail">Business Name</label>
            <input type="email" name="signUBusinessName" onChange={this.handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Required"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputUsername">Username:</label>
            <input type="text" name="signUpUsername" onChange={this.handleChange} className="form-control" id="InputUsername" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password:</label>
            <input type="password" name="signUpPassword" onChange={this.handleChange} className="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="PasswordConf">Confirm Password:</label>
            <input type="password" name="signUpConfirm" onChange={this.handleChange} className="form-control" id="PasswordConf" placeholder="Password"/>
          </div>
          </div>
        }
        </form>

          <button className="btn btn-primary" onClick={this.signup}>Register</button>
        </ReactModal>
      </div>
    );
  }
}


export default SignUp;
