
import React from 'react';


    class ProviderPage extends React.Component {

        state = {}
    
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
                                <h1 className="display-4 text-center">Customer Name</h1>
                                <p className="lead text-center">Phone <span>Email</span>
                                </p><p></p>
                                <div>
                                    <a href="#" className="btn btn-primary pull-right  btn-lg active" role="button" id="contactInfoModal" data-toggle="modal" data-target="#userInfoModal" >Update contact Info</a>

                                    <a href="#" className="btn btn-primary pull-right  btn-lg active" role="button" id="Order Service">Order Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>





                )}

    
            }

export default ProviderPage;