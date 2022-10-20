/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table"; 
import DATA from "@data/primary-copy.json";
import Table from "react-bootstrap/Table";

export default function ReactTable() {
  const columns = useMemo(() => DATA.columns, []);
  const data = useMemo(() => DATA.data, []);
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
      <Table striped hover {...getTableProps()} className="text-center mx-auto">
        <thead className="bg-asb-main text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
}
