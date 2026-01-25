import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

export default function Table({ data, columns }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table border="1" cellPadding="10">
        <thead>
            {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                <th key={header.id}>
                    {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                    )}
                </th>
                ))}
            </tr>
            ))}
        </thead>

        <tbody>
            {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                    {flexRender(
                    cell.column.columnDef.cell ?? cell.column.columnDef.accessorKey,
                    cell.getContext()
                    )}
                </td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
}
