/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import moment from "moment";

const VisitComponent = ({index, visit}) => {
    const {patient_name, doc_name, date, complaints} = visit
    return(
        <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{patient_name}</TableCell>
        <TableCell align="center">{doc_name}</TableCell>
        <TableCell align="center">
          {moment(date).format("MM-DD-YYYY")}
        </TableCell>
        <TableCell align="center">{complaints}</TableCell>
        <TableCell align="center">
          <div className="button-div">
            <img className="delete-img" src="/images/Delete.svg" />
            <img className="edit-img" src="/images/Edit.svg" />
          </div>
        </TableCell>
      </TableRow>
    )
}

export default VisitComponent;