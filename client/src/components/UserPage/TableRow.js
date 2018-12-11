import React from "react";
import ServiceReview from "./ServiceReviewModal";

const TableRow = props => (
  <tr>
    <td>{props.data.provider}</td>
    <td>{props.data.title}</td>
    <td>{props.data.service}</td>
    <td>{props.data.status}</td>
    <td>{props.data.review}</td>
    {/* // BUTTON  */}
    <td>
      <ServiceReview updateData={props.handleUpdate} data={props.data} />
    </td>
  </tr>
);

export default TableRow;
