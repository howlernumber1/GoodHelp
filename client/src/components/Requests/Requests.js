import React from 'react';
import $ from 'axios';

const request = (props) => (
  <div>
    <p>{props.category}</p>
    <p>{props.description}</p>
    </div>
)

    class Requests extends React.Component {

        state = {
          requests: []
        }

        getRequests = () => {
          $.get('api/requests')
            .then((result) => {
              this.setState({ requests: result.data });
            });
        }

        componentDidMount() {
          this.getRequests();
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
                                <h1 className="display-4 text-center">Requests</h1>
                                <p></p>
                            </div>
                            {this.state.requests.map(request => (
                              <request>
                                {request.category} ----------------------------
                                {request.description}
                              </request>
                            ))}
                        </div>
                    </div>
                </div>

                </div>

                )}

                handleChange = event => {
                    this.setState({ request: event.target.value });
                  }
                
                  handleSubmit = event => {
                    event.preventDefault();
                
                    const thisRequest = {
                      request: this.state.request
                    };
                
                    $.post(`/requests`, { request })
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                  }
                
                  render() {
                    return (
                      <div>
                        <form onSubmit={this.handleSubmit}>
                          <label>
                            Request:
                            <input type="button" value="OPEN/CLOSED" onChange={this.handleChange} />
                          </label>
                          {this.handleChange.value}
                        </form>
                      </div>
                    )
                  }
                }

export default Requests;







  