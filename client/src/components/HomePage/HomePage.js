import React from 'react';

const HomePage = () => (

  <div className="wrapper">

{/* home section */}

<div className="jumbotron">

<h1 className="display-4">Welcome to <span class="title">GoodHelp</span></h1>
<p className="lead">They say "Good Help" is hard to find...well, not anymore. </p>
<hr className="my-4"/>
<p>Search within our large list of credited and reliable businesses to find the right one for your property management needs.</p>
<p>If you are a small business who wants to join 'Good Help', sign up now as a provider and grow your clientele (or business).</p>
<a className="btn btn-lg" href="#" role="button">Get Started</a>

 </div>


{/* search section */}

<div className="searchSection">  
    <h4>Looking for a specific service provider?</h4>
    <p>Search here:</p>
    <form className="form-inline">
  <input className="form-control mr-sm-2" type="search" placeholder="Provider Name" aria-label="Search" />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

 <br />

<div className="results">
 <p> Research Results Append Here </p>
  </div>

</div>

<hr />

{/* Services Section */}

  <div className="container">
    <br />
    <div className="card-deck row">
      <div className="card col-2">
        <img className="card-img-top img-fluid" src="./images/auto.png" alt="broken down blue car" />
        <div className="card-body">
          <h5 className="card-title">Auto Services</h5>
          <a href="auto" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-3">
        <img className="card-img-top" src=".../100px200/" alt="assembly" />
        <div className="card-body">
          <h5 className="card-title">Assembly Services</h5>
          <a href="assembly" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-3">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="boat" />
        <div className="card-body">
          <h5 className="card-title">Boat Services</h5>
          <a href="boat" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
   
    <br />
    
      <div className="card col-3">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="housekeeping" />
        <div className="card-body">
          <h5 className="card-title">Cleaning & Housekeeping Services</h5>
          <a href="housekeeping" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      </div>
      <div className="card-deck row">
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="delivery" />
        <div className="card-body">
          <h5 className="card-title">Delivery & Pick-Up Services</h5>
          <a href="delivery" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="light bulb" />
        <div className="card-body">
          <h5 className="card-title">Electrical Services</h5>
          <a href="electical" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
    </div>
    <br />
    <div className="card-deck row">
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="hvac system" />
        <div className="card-body">
          <h5 className="card-title">HVAC Services</h5>
          <a href="hvac" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="lawnmower" />
        <div className="card-body">
          <h5 className="card-title">Lawn & Landscaping Services</h5>
          <a href="lawn" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="flat screen tv" />
        <div className="card-body">
          <h5 className="card-title">Mounting & Installation Services</h5>
          <a href="mount" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
    </div>
    <br />
    <div className="card-deck row">
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="moving boxes" />
        <div className="card-body">
          <h5 className="card-title">Moving Services</h5>
          <a href="move" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="organized and color coded files" />
        <div className="card-body">
          <h5 className="card-title">Organization Services</h5>
          <a href="organize" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="paint roller" />
        <div className="card-body">
          <h5 className="card-title">Painting Services</h5>
          <a href="paint" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
    </div>
    <br />
    <div className="card-deck row">
      <div className="card col-4">
        <img className="card-img-top img-fluid" src=".../100px200/" alt="leaky faucet" />
        <div className="card-body">
          <h5 className="card-title">Plumbing Services</h5>
          <a href="plumbing" className="btn btn-primary iconBtn">View Businesses</a>
        </div>
      </div>
    </div>
  </div>

  {/* footer */}
<footer className="footer">
<div >
  <span>Copyright @ 2018</span>
  </div>
  </footer>

  </div>

)


export default HomePage;
