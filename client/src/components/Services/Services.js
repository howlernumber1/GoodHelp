import React from 'react';
import $ from 'axios';

const service = (props) => (
  <div>
    <p>{props.category}</p>
    <p>{props.description}</p>
    </div>
)

    class Services extends React.Component {

        state = {
          services: []
        }

        getServices = () => {
          $.get('/api/services')
            .then((result) => {
              this.setState({ services: result.data });
            });
        }

        componentDidMount() {
          this.getServices();
        }


        render() {
            return (

                <div className="container mt-5">
                {/* <div className="row  col-md-12"> */}

                <div className="row">
                    <div className="col-md-12">
                        {/* <div className="card card-body bg-info text-white mb-3"> */}
                        <div className="card card-body bg-Light text-black mb-3">
                            <div className="text-center">
                                <h1 className="display-4 text-center">Services</h1>
                                <p></p>
                            </div>
                            {this.state.services.map(service => (
                              <service>
                                {service.category} ----------------------------
                                {service.description}
                              </service>
                            ))}
                        </div>
                    </div>
                </div>

                </div>

                )}
            }

export default Services;
