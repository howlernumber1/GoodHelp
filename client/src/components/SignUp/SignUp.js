import React from "react";
import ReactModal from "react-modal";
import $ from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
ReactModal.setAppElement("#root");

const AreaButton = props => (
  <div className="form-group">
    <label htmlFor="areaServiced">Areas Serviced:</label>
    <input
      id={props.id}
      name="areasServiced"
      type="text"
      onChange={props.handleChange}
      className="form-control"
      placeholder="Required"
    />
  </div>
);

const ServiceProvided = props => (
  <div className="form-group">
    <label htmlFor="serviceProvided">Service Provided:</label>
    <input
      id={props.id}
      name="servicesProvided"
      type="text"
      onChange={props.handleChange}
      className="form-control"
      placeholder="Required"
    />
  </div>
);

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      newArrayItem: "",
      showModal: false,
      signUpEmail: "",
      signUpPhone: "",
      signUpClientname: "",
      signUpPassword: "",
      // signUpConfirm: "",
      typeOfClient: "client",
      businessName: "",
      servicesProvided: [],
      areasServiced: [],
      yearsOfExperience: "",
      websiteLink: "",
      businessPhone: "",
      businessEmail: ""
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

  handleArrayChange = event => {
    event.preventDefault();
    const arrayType = event.target.name;

    const updateIdx = event.target.id;
    const updatedArray = this.state[arrayType];
    updatedArray[updateIdx] = event.target.value;
    this.setState({
      [arrayType]: updatedArray
    });
  };

  addArea = e => {
    e.preventDefault();
    const newArray = this.state.areasServiced.concat("");
    this.setState({
      areasServiced: newArray
    });
  };

  addService = e => {
    e.preventDefault();
    const newArray = this.state.servicesProvided.concat("");
    this.setState({
      servicesProvided: newArray
    });
  };

  signup = event => {
    event.preventDefault();
    if (this.state.typeOfClient === "client") {
      const newUser = {
        phone: this.state.signUpPhone,
        email: this.state.signUpEmail,
        clientname: this.state.signUpClientname,
        password: this.state.signUpPassword
      };
      console.log(newUser);
      $.post('/api/clients/register', newUser)
      .then(res => {
        console.log(res)
        if(res.data) {
          console.log('successful signup')
          this.setState({redirectTo: '/'
          })
        } else {
          console.log('signup error');
        }
      })
      .catch(error => {
        console.log('Sign up server error:');
        console.log(error);
      })
    } else {
      const newProvider = {
        business_name: this.state.businessName,
        services_provided: this.state.servicesProvided,
        areas_serviced: this.state.areasServiced,
        years_of_experience: this.state.yearsOfExperience,
        website_link: this.state.websiteLink,
        phone: this.state.businessPhone,
        email: this.state.businessEmail
      };
      console.log(newProvider);
      $.post('/api/clients/register', newProvider)
      .then(res => {
        console.log(res)
        if(res.data) {
          console.log('successful signup')
          this.setState({redirectTo: '/'
          })
        } else {
          console.log('signup error');
        }
      })
      .catch(error => {
        console.log('Sign up server error:');
        console.log(error);
      })
    }

    // $.post('/register', {
    //   if (this.state.typeOfClient === "client") {
    //
    //   }
    // })
    // .then({
    //
    // })
    this.handleCloseModal();
  };

  render() {
    return (
      <div>
        <button className="btnLink" onClick={this.handleOpenModal}>
          SignUp
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <form>
            <button
              className="close-float btnLink"
              onClick={this.handleCloseModal}
            >
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </button>
            <br />
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
            {this.state.typeOfClient === "client" ? (
              <div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email address:</label>
                  <input
                    type="email"
                    name="signUpEmail"
                    onChange={this.handleChange}
                    className="form-control"
                    id="InputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="InputUsername">Username:</label>
                  <input
                    type="text"
                    name="signUpClientname"
                    onChange={this.handleChange}
                    className="form-control"
                    id="InputUsername"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputUsername">Phone:</label>
                  <input
                    type="text"
                    name="signUpPhone"
                    onChange={this.handleChange}
                    className="form-control"
                    id="InputPhone"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword">Password:</label>
                  <input
                    type="password"
                    name="signUpPassword"
                    onChange={this.handleChange}
                    className="form-control"
                    id="InputPassword"
                    placeholder="Password"
                  />
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Business Name</label>
                  <input
                    name="businessName"
                    type="email"
                    onChange={this.handleChange}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Required"
                  />
                </div>
                {this.state.servicesProvided.length <= 0 ? (
                  <ServiceProvided
                    id="0"
                    value={this.state.servicesProvided[0]}
                    addService={this.addService}
                    handleChange={this.handleArrayChange}
                  />
                ) : (
                  this.state.servicesProvided.map((providedService, i) => (
                    <ServiceProvided
                      key={i}
                      id={i}
                      value={providedService}
                      handleChange={this.handleArrayChange}
                    />
                  ))
                )}
                <button
                  className="d-inline float-right"
                  onClick={this.addService}
                  name="servicesProvided"
                >+</button>
                {this.state.areasServiced.length <= 0 ? (
                  <AreaButton
                  id="0"
                  value={this.state.areasServiced[0]}
                  handleChange={this.handleArrayChange}
                  />
                )
              : (
                this.state.areasServiced.map((serviceArea, i) => (
                  <AreaButton
                    key={i}
                    id={i}
                    value={serviceArea}
                    handleChange={this.handleArrayChange}
                  />
                ))
              )}
                <button name="areasServiced" className="d-inline float-right" onClick={this.addArea}>
                 +
               </button>
                <div className="form-group">
                  <label htmlFor="InputPassword">Years of experience:</label>
                  <input
                    name="yearsOfExperience"
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Required"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Website Link:</label>
                  <input
                    name="websiteLink"
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Phone:</label>
                  <input
                    name="businessPhone"
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Email:</label>
                  <input
                    name="businessEmail"
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
              </div>
            )}
          </form>

          <button className="btn btn-primary" onClick={this.signup.bind(this)}>Register</button>
        </ReactModal>
      </div>
    );
  }
}

export default SignUp;
