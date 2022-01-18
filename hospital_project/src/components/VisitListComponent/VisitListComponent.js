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
import VisitComponent from "../VisitComponent/VisitComponent";
import moment from "moment";
import "./VisitListComponent.scss";

const VisitListComponent = ({ visits }) => {
  const arrVisits = Array.from(visits);
  const tableTitle = ["Имя", "Врач", "Дата", "Жалобы"];
  return (
    <div className="visit-list-component">
      <TableContainer className="visit-list" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableTitle.map((title) => (
                <TableCell align="center">{title}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arrVisits.map((visit, index) => (
              <VisitComponent index={index} visit={visit} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VisitListComponent;
