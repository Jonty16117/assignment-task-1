import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../Styles/SplittedRefTable.module.css";
import EditButton from "./EditButton";
import WeightageSelector from "./WeightageSelector";
import { FormatBold } from "@material-ui/icons";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },

  tableLayout: "fixed",
  width: "100%",

  // table: { tableLayout: "fixed", width: "100%" },
}))(TableCell);

const UnderlinedTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },

  tableLayout: "fixed",
  width: "100%",

  // table: { tableLayout: "fixed", width: "100%" },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#E9E9E9",
      tableLayout: "fixed",
      width: "100%",
    },
    "&:nth-of-type(odd)": {
      tableLayout: "fixed",
      width: "100%",
    },
    // table: { tableLayout: "fixed", width: "100%" },
  },
}))(TableRow);

// const rows = [
//   createData("My Referral Program 1", 13, 5, "$22", "50%"),
//   createData("My Referral Program 2", 15, 10, "$60", "50%"),
//   // createData("My Referral Program 3", 13, 5, "$22", "50%"),
//   // createData("My Referral Program 4", 15, 10, "$60", "50%"),
//   // createData("My Referral Program 5", 13, 5, "$22", "50%"),
//   // createData("My Referral Program 6", 13, 5, "$22", "50%"),
//   // createData("My Referral Program 7", 13, 5, "$22", "50%"),
//   // createData("My Referral Program 8", 13, 5, "$2", "50%"),
// ];

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export default function SplittedRefTable(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            // style={{ tableLayout: "fixed", width: "100%" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableHeadLeft}>
                  S. No.
                </StyledTableCell>
                <StyledTableCell align="right">
                  Referral Program Name
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  inkBarStyle={{ backgroundColor: "#e77600" }}
                >
                  <div className={styles.underlinedHeading}>Customerss</div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}.
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ReferalProgramName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Customers}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableHeadLeft}>
                  S. No.
                </StyledTableCell>
                <StyledTableCell align="right">
                  Referral Program Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className={styles.underlinedHeading}>
                    Orders Placed using Coupons
                  </div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}.
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ReferalProgramName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.OrdersPlacedUsingCoupons}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableHeadLeft}>
                  S. No.
                </StyledTableCell>
                <StyledTableCell align="right">
                  Referral Program Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className={styles.underlinedHeading}>Total Revenue</div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}.
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ReferalProgramName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.TotalRevenue}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableHeadLeft}>
                  S. No.
                </StyledTableCell>
                <StyledTableCell align="right">
                  Referral Program Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className={styles.underlinedHeading}>
                    Audience Weightage
                  </div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}.
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ReferalProgramName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <WeightageSelector AudienceWeightage={row.AudienceWeightage}/>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableHeadLeft}>
                  S. No.
                </StyledTableCell>
                <StyledTableCell align="right">
                  Referral Program Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className={styles.underlinedHeading}>
                    Preview/Settings
                  </div>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.tableData.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}.
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ReferalProgramName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <EditButton />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}
