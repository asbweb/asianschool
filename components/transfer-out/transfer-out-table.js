/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import Link from "next/Link";
import { useTable, useSortBy, useGlobalFilter } from "react-table"; 
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import GlobalFilter from "./global-filter";
import DateFormatter from "../display-items/date-formatter";
import DATA from "../../data/transfer-out.json";

export default function TransferOutTable() {
  const columns = useMemo(() => 
  [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Scholar Number",
      accessor: "scholar-number"
    }
    ,
    {
      Header: "Grade",
      accessor: "grade"
    },
    {
      Header: "Last Attendance Date",
      accessor: "last-attendance-date", 
      Cell: ({value}) => {return  <DateFormatter dateString={value}/>}
    },
    {
      Header: "Transfer Certificate",
      accessor: "url",
      Cell: ({value})=> {return <Link href={value}><a target="_blank"><Icon icon="bi:download" width={15}/> Download</a></Link>} 
    }
  ], []);
  const data = useMemo(() => DATA.data, []);
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({
    columns,
    data,
  },
  useGlobalFilter,
  useSortBy
  );

  const { globalFilter} = state

  return (
    <>
    <Col md={6} className="mx-auto"> 
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    </Col> 
      <Table striped hover {...getTableProps()} className="text-center mx-auto">
        <thead className="bg-asb-main text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? 
                  <Icon icon="bi:sort-down" width={30} className="ms-2"/> : <Icon icon="bi:sort-up" width={30} className="ms-2" />) : '' }
                </span>
                </th>
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
      </>
  );
}