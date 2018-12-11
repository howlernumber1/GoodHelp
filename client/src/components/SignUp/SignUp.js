import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes }  from '@fortawesome/free-solid-svg-icons';
ReactModal.setAppElement('#root');

const AreaButton = (props) => (
  <div className="form-group">
    <label htmlFor="areaServiced">Areas Serviced:</label>
    <input name="areasServiced" type="text" value={props.newArrayItem} onChange={props.handleChange} className="form-control" placeholder="Required" />
    <button className="d-inline float-right" key={props.key} onClick={props.addArea}>+</button>
  </div>
)

const ServiceProvided = (props) => (
  <div className="form-group">
    <label htmlFor="serviceProvided">Service Provided:</label>
    <input name="servicesProvided" type="text" onChange={props.handleChange} className="form-control" placeholder="Required" />
    <button className="d-inline float-right" key={props.key} onClick={props.addService}>+</button>
  </div>
)

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      newArrayItem: '',
      showModal: false,
      signUpEmail: '',
      signUpUsername: '',
      signUpPassword: '',
      signUpConfirm: '',
      typeOfClient: 'customer',
      businessName: '',
      servicesProvided: [],
      areasServiced: [],
      yearsOfExperience: '',
      websiteLink: '',
      businessPhone: '',
      businessEmail: '',
      areasButton: [
        <AreaButton />
      ],
      serviceButton: [
        <serviceProvided />
      ]
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleArrayChange= (event) => {
      event.preventDefault();
      const newArrayItem = this.state.newArrayItem
      this.setState({
        newArrayItem: event.target.value
      })
    }

    pushItem = () => {
      const newArrayItem = this.state.newArrayItem
      const newArray = this.state.servicesProvided;
      const newerArray = newArray.concat(newArrayItem)
      this.setState({
        servicesProvided: newerArray
      })
    }

  addArea = (e) => {
    e.preventDefault();
    let Array = this.state.areasButton
    Array.push(<AreaButton />)
    this.setState({
      areasButton: Array
    })
  }

  addService = (e) => {
    e.preventDefault();
    let Array = this.state.serviceButton
    Array.push(<ServiceProvided />)
    this.setState({
      serviceButton: Array
    })
  }

  signup = (event) => {
    event.preventDefault();
    if (this.state.typeOfClient === 'customer') {
      const newUser = {
        email: this.state.signUpEmail,
        username: this.state.signUpUsername,
        password: this.state.signUpPassword,
        confirm: this.state.signUpConfirm,
      }
      console.log(newUser)
    } else {
      const newProvider = {
        business_name: this.state.businessName,
        services_provided: this.state.servicesProvided,
        areas_serviced: this.state.areasServiced,
        years_of_experience: this.state.yearsOfExperience,
        website_link: this.state.websiteLink,
        phone: this.state.businessPhone,
        email: this.state.businessEmail,
      }
      console.log(newProvider)
    }
    this.handleCloseModal()
  }

  render() {
    return (
      <div>
        <button className="btnLink" onClick={this.handleOpenModal}>SignUp</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <form>
            <button className="close-float btnLink" onClick={this.handleCloseModal}><FontAwesomeIcon icon={faTimes} size="1x" /></button>
          <br></br>
            <label htmlFor="typeOfClient">What are you?</label>
            <select name="typeOfClient" onChange={this.handleChange} className="form-control" defaultValue="customer">
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
            </select>
            {this.state.typeOfClient === "customer" ?
              <div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email address:</label>
                  <input type="email" name="signUpEmail" onChange={this.handleChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="InputUsername">Username:</label>
                  <input type="text" name="signUpUsername" onChange={this.handleChange} className="form-control" id="InputUsername" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword">Password:</label>
                  <input type="password" name="signUpPassword" onChange={this.handleChange} className="form-control" id="InputPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Confirm Password:</label>
                  <input type="password" name="signUpConfirm" onChange={this.handleChange} className="form-control" id="PasswordConf" placeholder="Password" />
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
              </div>
              :
              <div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Business Name</label>
                  <input name="businessName" type="email" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" placeholder="Required" />
                </div>
                {this.state.serviceButton.map((eachField, i) => (
                  <ServiceProvided key={i} value={this.state.newArrayItem} addService={this.addService} handleChange={this.handleArrayChange} />
                ))}
                {this.state.areasButton.map((eachField, i) => (
                  <AreaButton key={i} addArea={this.addArea} handleChange={this.handleChange} />
                ))}
                <div className="form-group">
                  <label htmlFor="InputPassword">Years of experience:</label>
                  <input name="yearsOfExperience" type="text" onChange={this.handleChange} className="form-control" placeholder="Required" />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Website Link:</label>
                  <input name="websiteLink" type="text" onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Phone:</label>
                  <input name="businessPhone" type="text" onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="PasswordConf">Email:</label>
                  <input name="businessEmail" type="text" onChange={this.handleChange} className="form-control" />
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
