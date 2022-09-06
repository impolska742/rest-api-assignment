/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Alert, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTableDataAction } from "../../actions/tableActions";
import TableRow from "./TableRow";

const TableComponent = () => {
  const dispatch = useDispatch();
  const getTableData = useSelector((state) => state.getTableData);
  console.log({ getTableData });

  const { loading, error, tableData } = getTableData;

  useEffect(() => {
    dispatch(getTableDataAction());
  }, []);

  return loading ? (
    <Spinner />
  ) : !error ? (
    <Table style={{ marginTop: "40px" }} striped bordered hover>
      <thead>
        <tr>
          <th style={{ minWidth: "80px" }}>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th style={{ minWidth: "200px" }}>Body</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((row) => {
            return (
              <TableRow
                key={row.id}
                id={row?.id}
                userId={row?.userId}
                title={row?.title}
                body={row?.body}
              />
            );
          })}
      </tbody>
    </Table>
  ) : (
    <Alert variant="danger">{error}</Alert>
  );
};
export default TableComponent;
