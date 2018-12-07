import React from 'react';




const TableRow = (props) =>(


    <tr>
     
        <td>{props.data.provider}</td>
        <td>{props.data.title}</td>
        <td>{props.data.service}</td>
        <td>{props.data.status}</td>
        <td>{props.data.review}</td>
        {/* // BUTTON  */}
        {/* <td> <button onClick={() => props.onClick(props.data.id)} type="button" className="btn btn-secondary" >Add/Edit Review</button></td> */}
        <td> <button type="button" className="btn btn-secondary" id="reviewModal" data-toggle="modal" data-target="#exampleModal">Add/Edit Review</button></td>

    </tr>


)



export default TableRow;