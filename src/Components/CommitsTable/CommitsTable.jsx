import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 15,
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
    minWidth: 500,
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
    <CommitsTableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Day</StyledTableCell>
              <StyledTableCell align="center">Hour</StyledTableCell>
              <StyledTableCell align="center">Commit name</StyledTableCell>
              <StyledTableCell align="center">Commit URL</StyledTableCell>
              <StyledTableCell align="center">Author</StyledTableCell>
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
                <StyledTableCell align="center">
                  {data.commit.message}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Link href={data.html_url} target="_blank" rel="noopener">
                    Link to Commit
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data.commit.author.name}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CommitsTableContainer>
  );
}

const CommitsTableContainer = styled.div`
  @media (max-width: 769px) {
    width: 100%;
  }
`;
