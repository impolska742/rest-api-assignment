import React from "react";

const TableRow = ({ userId, id, title, body }) => {
  return (
    <tr>
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default TableRow;
