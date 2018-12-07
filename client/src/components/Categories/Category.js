import React from 'react';

const Category = (props) => (
    <div className="card col-3 img-fluid">
        <img className="card-img-top" src={props.img} alt={props.alt} />
        <div className="card-body">
            <h5 className="card-title">{props.category}</h5>
            <button onClick={props.handleServiceClick} value={props.category} className="btn btn-primary iconBtn">View Businesses</button>
        </div>
        </div>
        )
export default Category;