import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../Styles/RefTable.module.css";
import EditButton from "./EditButton";
import WeightageSelector from "./WeightageSelector";
import { FormatBold } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#E9E9E9",
    },
  },
}))(TableRow);


// const rows = [
//   createData("My Referral Program 1", 13, 5, "$22", "50%"),
//   createData("My Referral Program 2", 15, 10, "$60", "50%"),
//   createData("My Referral Program 3", 13, 5, "$22", "50%"),
//   createData("My Referral Program 4", 15, 10, "$60", "50%"),
//   createData("My Referral Program 5", 13, 5, "$22", "50%"),
//   createData("My Referral Program 6", 13, 5, "$22", "50%"),
//   createData("My Referral Program 7", 13, 5, "$22", "50%"),
//   createData("My Referral Program 8", 13, 5, "$2", "50%"),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function RefTable(props) {
  const classes = useStyles();

  return (
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
            <StyledTableCell align="right">Customers</StyledTableCell>
            <StyledTableCell align="right">
              Orders Placed using Coupon
            </StyledTableCell>
            <StyledTableCell align="right">Total Revenue</StyledTableCell>
            <StyledTableCell align="right">Audience Weightage</StyledTableCell>
            <StyledTableCell align="right" className={styles.tableHeadRight}>
              Preview/Settings
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}.
              </StyledTableCell>
              <StyledTableCell align="right">{row.ReferalProgramName}</StyledTableCell>
              <StyledTableCell align="right">{row.Customers}</StyledTableCell>
              <StyledTableCell align="right">
                {row.OrdersPlacedUsingCoupons}
              </StyledTableCell>
              <StyledTableCell align="right">{row.TotalRevenue}</StyledTableCell>
              <StyledTableCell align="right">
                <WeightageSelector AudienceWeightage={row.AudienceWeightage}/>
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
  );
}
