import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes }  from '@fortawesome/free-solid-svg-icons';
ReactModal.setAppElement('#root');

const AreaButton = (props) => (
  <div className="form-group">
    <label htmlFor="areaServiced">Areas Serviced:</label>
    <input name="areasServiced" type="text" onChange={props.handleChange} className="form-control" placeholder="Required" />
    <button key={props.key} onClick={props.addArea}>+</button>
  </div>
)

class UpdateProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      typeOfClient: 'provider',
      businessName: '',
      servicesProvided: [],
      yearsOfExperience: '',
      websiteLink: '',
      businessPhone: '',
      businessEmail: '',
      areasButton: [
        <AreaButton />
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

  onCheckChange = (e) => {
    const services = this.state.servicesProvided
    let index

    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      services.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = services.indexOf(+e.target.value)
      services.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ servicesProvided: services })
  }

  addArea = (e) => {
    e.preventDefault();
    let Array = this.state.areasButton
    Array.push(<AreaButton />)
    this.setState({
      areasButton: Array
    })
  }

  update = (event) => {
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
        years_of_experience: this.state.yearsOfExperience,
        website_link: this.state.websiteLink,
        phone: this.state.businessPhone,
        email: this.state.businessEmail
      }
      console.log(newProvider)
    }
    this.handleCloseModal()
  }

  render() {
    return (
      <div>
        <button className="btnLink" onClick={this.handleOpenModal}>Update Profile</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <form>
            <button className="close-float btnLink" onClick={this.handleCloseModal}><FontAwesomeIcon icon={faTimes} size="1x" /></button>
          <br></br>
            <label htmlFor="typeOfClient">What are you?</label>
            <select name="typeOfClient" onChange={this.handleChange} className="form-control" defaultValue="customer">
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
                <label htmlFor="InputUsername">Services Provided</label>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Auto Services" />
                  <label className="form-check-label" value="Auto Services">
                    Auto Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Assembly Services" />
                  <label className="form-check-label" value="Assembly Services">
                    Assembly Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Boat Services" />
                  <label className="form-check-label" value="Boat Services">
                    Boat Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Cleaning Services" />
                  <label className="form-check-label" value="Cleaning Services">
                    Cleaning Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value=" Delivery and Pick Up / Moving Services" />
                  <label className="form-check-label" value=" Delivery and Pick Up / Moving Services">
                    Delivery and Pick Up / Moving Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Electrical Services" />
                  <label className="form-check-label" value="Electrical Services">
                    Electrical Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="HVAC Services" />
                  <label className="form-check-label" value="HVAC Services">
                    HVAC Services
                   </label>
                </div>
                <div onChange={this.onCheckChange} name="servicesProvided" className="form-check">
                  <input className="form-check-input" type="checkbox" value="Landscaping and Lawn Services" />
                  <label className="form-check-label" value="Landscaping and Lawn Services">
                    Landscaping and Lawn Services
                  </label>
                </div>
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

          <button className="btn btn-primary" onClick={this.update}>Update Profile</button>
        </ReactModal>
      </div>
    );
  }
}


export default UpdateProfile;