// external imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// internal imports
import { Text } from "@/components/global/text/text";

// child-category-table component
export function DataTable({
  columns = [],
  tableData = [],
}: Readonly<{
  columns: any[];
  tableData: any[];
}>) {
  // helper vars
  const hasTableDataToShow = tableData.length > 0;

  // render
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell key={column.field}>
                  {column.headerBody ? column.headerBody() : column.header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {!hasTableDataToShow && (
            <TableRow>
              <TableCell>
                <Text>No Users Were Found</Text>
              </TableCell>
            </TableRow>
          )}
          {hasTableDataToShow &&
            tableData.map((row) => (
              <TableRow
                key={crypto.randomUUID()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell
                    key={crypto.randomUUID()}
                    component="th"
                    scope="row"
                  >
                    {column.body ? column.body(row) : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
