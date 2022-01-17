import { useMemo } from "react";
import useGetAddresses from "../hooks/useGetAddresses";
import { usePagination, useTable } from "react-table";
import Button from "../components/Button";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";
import TableActionCell from "../components/TableActionCell";

export default function AddressList() {
  const { data } = useGetAddresses();
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Address", accessor: "address1" },
      { Header: "Address 2", accessor: "address2" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip", accessor: "zip" },
      {
        Header: (
          <Button varient="success" onClick={() => navigate("/create")}>
            Create
          </Button>
        ),
        accessor: "action",
        Cell: TableActionCell,
      },
    ],
    [navigate]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data: data ?? [] }, usePagination);

  return (
    <Page title="All Addresses">
      <table
        {...getTableProps()}
        className="w-full border-b border-gray-200 shadow"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-2 text-xs text-gray-500 text-left"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white">
          {page.map((row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="whitespace-nowrap">
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className="px-6 py-4">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex">
        <Button onClick={() => previousPage()}>Previous</Button>
        <Button onClick={() => nextPage()} className="ml-4">
          Next
        </Button>

        <span className="ml-8">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="ml-auto"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </Page>
  );
}
