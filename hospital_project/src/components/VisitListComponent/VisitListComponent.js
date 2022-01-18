import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import moment from "moment";
import "./VisitListComponent.scss";

const VisitListComponent = ({ visits }) => {
  const arrVisits = Array.from(visits);
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
            {arrVisits.map(({patient_name, doc_name, date, complaints}, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{patient_name}</TableCell>
                <TableCell align="center">{doc_name}</TableCell>
                <TableCell align="center">{moment(date).format("MM-DD-YYYY")}</TableCell>
                <TableCell align="center">{complaints}</TableCell>
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
