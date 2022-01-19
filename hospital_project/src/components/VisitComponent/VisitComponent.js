import React from "react";
import { TableCell, TableRow } from "@mui/material";
import EditVisitModalForm from "../Forms/EditVisitModalForm/EditVisitModalForm";
import DeleteVisitModalForm from "../Forms/DeleteVisitModalForm/DeleteVisitModalForm";
import moment from "moment";

const VisitComponent = ({ index, visit, getAllVisits }) => {
  const { _id, patient_name, doc_name, date, complaints } = visit;

  return (
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
          <DeleteVisitModalForm id={_id} getAllVisits={getAllVisits} />
          <EditVisitModalForm
            oldVisitDate={visit}
            getAllVisits={getAllVisits}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default VisitComponent;
