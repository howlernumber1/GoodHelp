import React from 'react';

const SearchPage = () => (
  <div>  
    <h4>Looking for a specific service provider?</h4>
    <p>Search here:</p>
    <form class="form-inline">
  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

 <br />

<div class="results">
 <p> Research Results Append Here </p>
  </div>

</div>

)


export default SearchPage;