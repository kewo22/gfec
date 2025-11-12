"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Trash } from 'lucide-react';
import { GetInTouchResponse } from "@/app/_interfaces/get-in-touch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Button from "@/app/_components/ui/button";
import { PopoverArrow, PopoverClose } from "@radix-ui/react-popover";

interface DataGridProps {
  data: GetInTouchResponse[];
  deleteRow: (row: GetInTouchResponse) => void;
}

export function DataGrid(props: DataGridProps) {
  const { data, deleteRow } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<GetInTouchResponse>[] = [
    {
      id: "firstName",
      accessorKey: "firstName",
      header: ({ table }) => <>First Name</>,
      cell: ({ row }) => <>{row.original.firstName}</>,
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "lastName",
      accessorKey: "lastName",
      header: ({ table }) => <>Last Name</>,
      cell: ({ row }) => <>{row.original.lastName}</>,
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "email",
      accessorKey: "email",
      header: ({ table }) => <>Email</>,
      cell: ({ row }) => <>{row.original.email}</>,
      enableSorting: true,
      enableHiding: false,
    },
    {
      id: "mobile",
      header: ({ table }) => <>Mobile</>,
      cell: ({ row }) => <>{row.original.mobile}</>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "preferredTime",
      header: ({ table }) => <>Preferred Time</>,
      cell: ({ row }) => <>{row.original.preferredTime ? row.original.preferredTime : '-'}</>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "preferredDate",
      header: ({ table }) => <>Preferred Date</>,
      cell: ({ row }) => <>{row.original.preferredDate ? new Date(row.original.preferredDate).toLocaleDateString() : '-'}</>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      header: ({ table }) => (
        <span className="text-center w-full block">Actions</span>
      ),
      enableHiding: false,
      cell: ({ row }) => {
        const record = row.original;
        return (
          <>
            <Popover>
              <PopoverTrigger asChild>
                <Trash
                  className="cursor-pointer hover:text-secondary h-5 w-5 mx-auto"
                />
              </PopoverTrigger>
              <PopoverContent className="w-72 bg-red-700 border-none outline-none" side="left" align="center">
                <PopoverArrow className="fill-red-700 h-1.5 w-3.5" />
                <p className="text-white">Are you sure you want to delete {record.firstName} {record.lastName} ?</p>
                <div className="flex justify-end mt-2 gap-2">
                  <PopoverClose asChild>
                    <Button size="xs">Cancel</Button>
                  </PopoverClose>
                  <Button size="xs" customClass="bg-red-950" >
                    Delete
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: data.length,
      },
    },
  });

  const onDeleteRow = (row: GetInTouchResponse) => {
    deleteRow(row);
  };

  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-start justify-start">
      <div className="flex items-center gap-2 py-4">
        <input
          placeholder="Filter by first name"
          value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-slate-500 rounded pl-2"
        />
        <input
          placeholder="Filter by last name"
          value={(table.getColumn("lastName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("lastName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-slate-500 rounded pl-2"
        />
        <input
          placeholder="Filter by email"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-slate-500 rounded pl-2"
        />
      </div>
      <div className="w-full rounded-md border grow overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}