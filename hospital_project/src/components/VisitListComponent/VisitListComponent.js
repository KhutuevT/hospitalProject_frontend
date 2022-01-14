import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./VisitListComponent.scss";

const VisitListComponent = ({ visits }) => {
  const arrVisits = Array.from(visits);
  console.log(visits);
  return (
    <div className="visit-list-component">
      <TableContainer className="visit-list" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Имя</TableCell>
              <TableCell align="center">Врач</TableCell>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">Жалобы</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrVisits.map((visit) => (
              <TableRow
                key={visit.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{visit.patient_name}</TableCell>
                <TableCell align="center">{visit.doc_name}</TableCell>
                <TableCell align="center">{visit.date}</TableCell>
                <TableCell align="center">{visit.complaints}</TableCell>
                <TableCell align="center">
                  <div className="button-div">
                    <img className="delete-img" src="/images/Delete.svg" />
                    <img className="edit-img" src="/images/Edit.svg" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VisitListComponent;
