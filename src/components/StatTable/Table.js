import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
//import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Switch } from "@material-ui/core";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  }
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05" },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>AccessControl</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }).isRequired
};

const rows = [
  createData(
    "Management Team",
    <button
      style={{
        background: "#c2f0c2",
        cursor: "pointer",
        color: "green",
        //outline: 'none',
        border: "1pt",
        borderColor: "red",
        borderRadius: "50px 50px",
        width: "200px",
        height: "40px"
      }}
    >
      {" "}
      All Access
    </button>,
    "4",
    "1 min ago",
    <Switch />,
    3.99
  ),
  createData(
    "Procurrent Team",
    <button
      disabled
      style={{
        cursor: "pointer",
        border: "12pt",
        borderColor: "red",
        borderRadius: "50px 50px",
        width: "200px",
        height: "40px"
      }}
    >
      {" "}
      No Access
    </button>,
    "8",
    "1 min ago",
    <Switch />,
    4.99
  ),
  createData(
    "Project Team",
    <button
      style={{
        background: "#ffb3b3",
        cursor: "pointer",
        color: "red",
        //outline: 'none',
        border: "1pt",
        borderColor: "red",
        borderRadius: "50px 50px",
        width: "200px",
        height: "40px"
      }}
    >
      {" "}
      Restricted Access
    </button>,
    "16",
    "1 min ago",
    <Switch />,
    3.79
  ),
  createData(
    "IT Team",
    <button
      style={{
        background: "#ffb3b3",
        cursor: "pointer",
        color: "red",
        borderOutline: "3pt",
        border: "1pt",
        borderColor: "red",
        borderRadius: "50px 50px",
        width: "200px",
        height: "40px"
      }}
    >
      {" "}
      Restricted Access
    </button>,
    "4",
    "1 min ago",
    <Switch />,
    2.5
  ),
  createData(
    "Super Admin",
    <button
      style={{
        background: "#c2f0c2",
        cursor: "pointer",
        color: "green",
        //outline: 'none',
        border: "1pt",
        borderColor: "red",
        borderRadius: "50px 50px",
        width: "200px",
        height: "40px"
      }}
    >
      {" "}
      All Access
    </button>,
    "1",
    "1 min ago",
    <Switch />
  )
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Deparment/Role Name</TableCell>
            <TableCell align="right">Access Level</TableCell>
            <TableCell align="right">No of members</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
