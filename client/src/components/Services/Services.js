
import React from 'react';
import $ from 'axios';

    class Services extends React.Component {

        state = {
          services: []
        }

        getServices = () => {
          $.get('api/services')
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
                            <div className="row">
                                <div className="col-4 col-md-3 m-auto">
                                    <img className="rounded-circle" src="//www.gravatar.com/avatar/8cb7902f0a6c100e16cd43f97c0cf0f7?s=200&amp;rating=pg&amp;default=mm" alt=""></img>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="display-4 text-center">Services</h1>
                                <p></p>
                            </div>
                            <div getServices={this.getServices}></div>
                        </div>
                    </div>
                </div>

                </div>





                )}


            }

export default Services;
