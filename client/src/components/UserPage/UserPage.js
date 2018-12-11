import React from 'react';
import TableRow from './TableRow';


//Created fake data to test dynamic row creation
const fakeData = [
    {
        id: 1,
        provider: "M&M services",
        title: " Lawn Services ",
        service: "cut lawn",
        status: "Open",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 2,
        provider: "Joe Smoe",
        title: "Mobile Detail ",
        service: "Wash Car",
        status: "Closed",
        review: " "
    },
    {
        id: 3,
        provider: "Just Kidding",
        title: "Baby sitting",
        service: "baby sit young child",
        status: "closed",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 4,
        provider: "fdsfsd",
        title: "fdsfsf ",
        service: "fdsdfsf",
        status: "fdsdfsf",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }
]

class UserPage extends React.Component {

    state = {}

    // handles review creation/edit button
    // handleOnClick = (id) => {
    //     alert(id)
    // }

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
                                    <a href="/user" className="btn btn-primary pull-right  btn-lg active" role="button" id="contactInfoModal" data-toggle="modal" data-target="#userInfoModal" >Update contact Info</a>

                                    <a href="/user" className="btn btn-primary pull-right  btn-lg active" role="button" id="Order Service">Order Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* // Displays User service history */}
                <div className="row  col-md-12"> <br></br> <br></br> </div>

                {/* <a href="#" className="btn btn-primary btn-lg active" role="button" >Become a provider</a>
                <a href="#" className="btn btn-primary btn-lg active" role="button" >Order Service</a> */}

                <div className="row  col-md-12">
                    <table className="table table-hover table-striped">
                        <thead className="thead bg-secondary text-align-center">
                            <tr>
                                <th scope="col">Provider</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Service Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Review</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody className="table-body bg-light tbodypage">
                            {
                                fakeData.map(item => {

                                    return <TableRow onClick={this.handleOnClick} data={item} />
                                })
                            }

                        </tbody>
                    </table>
                </div>

                {/* <!-- Review Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Modal body
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- User Info Modal --> */}
                <div class="modal fade" id="userInfoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">customer Information</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <img className="rounded-circle" src="//www.gravatar.com/avatar/8cb7902f0a6c100e16cd43f97c0cf0f7?s=200&amp;rating=pg&amp;default=mm" alt=""></img>
                                    <div className="form-group">
                                        <label for="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPhone">Phone</label>
                                        <input type="text" className="form-control" id="inputPhone" placeholder="Phone Number"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputPhone">Email</label>
                                        <input type="text" className="form-control" id="inputEmail" placeholder="Email"></input>
                                    </div>

                                    </form>
                                            </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )}
               
                   
               }
               
               export default UserPage;
