import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CommitsTable() {
  const [state, setState] = useState({
    apidata: [],
  });
  useEffect(() => {
    const apiUrl = `https://api.github.com/repos/mdominguez56/github-commits-api/commits`;
    axios.get(apiUrl).then((res) => {
      const apidata = res.data;
      setState({ apidata });
    });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Day</StyledTableCell>
              <StyledTableCell>Hour</StyledTableCell>
              <StyledTableCell align="right">Commit name</StyledTableCell>
              <StyledTableCell align="right">
                HTML Url of Commit
              </StyledTableCell>
              <StyledTableCell align="right">Author</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.apidata.map((data) => (
              <StyledTableRow key={data.node_id}>
                <StyledTableCell component="th" scope="row">
                  {moment(data.commit.author.date).format("MMMM Do YYYY")}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {moment(data.commit.author.date).format("h:mm:ss a")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data.commit.message}
                </StyledTableCell>
                <StyledTableCell align="right">{data.html_url}</StyledTableCell>
                <StyledTableCell align="right">
                  {data.commit.author.name}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
