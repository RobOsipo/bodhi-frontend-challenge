// external imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

// internal imports

// mobile-data-table component
export function MobileDataTable({ columns = [], tableData = [] }: any) {
  // helper vars
  const hasTableDataToShow = tableData.length > 0;

  // sx styles
  const tableBodySx = {
    border: "solid #ccc 2px",
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    "&:nth-child(odd)": { backgroundColor: "#e6e5e5 !important" },
  };

  const headerCellSx = {
    minWidth: "125px",
    fontWeight: "700",
  };

  // render
  return (
    <Stack direction="column" sx={{ pt: "1rem" }}>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: "100%",
          minWidth: "100%",
          mt: "0.35rem",
        }}
      >
        <Table
          aria-label="mobile data table"
          sx={{ width: "100%", maxWidth: "100%", minWidth: "100%" }}
        >
          {!hasTableDataToShow && (
            <TableBody sx={tableBodySx}>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    minWidth: "25px",
                    width: "25px !important",
                    fontWeight: "700",
                  }}
                >
                  No Users Were Found
                </TableCell>
              </TableRow>
            </TableBody>
          )}
          {hasTableDataToShow &&
            tableData.map((rowData: any) => {
              return (
                <TableBody
                  key={rowData._id ?? crypto.randomUUID()}
                  sx={tableBodySx}
                >
                  {columns.map((columnData: any) => {
                    return (
                      <TableRow key={columnData.field}>
                        <TableCell align="left" sx={headerCellSx}>
                          {columnData.header}
                        </TableCell>
                        {columnData.mobileBody && (
                          <TableCell align="left">
                            {columnData.mobileBody(rowData, columnData)}
                          </TableCell>
                        )}
                        {!columnData.mobileBody && (
                          <TableCell align="left">
                            {rowData[columnData.field]}
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                </TableBody>
              );
            })}
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default MobileDataTable;
