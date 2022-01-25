import { React, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import moment from "moment";
import EditVisitModalForm from "../../Forms/EditVisitModalForm/EditVisitModalForm";
import DeleteVisitModalForm from "../../Forms/DeleteVisitModalForm/DeleteVisitModalForm";
import "./VisitComponent.scss";

const VisitComponent = ({ index, visit, getAllVisits }) => {
  const { _id, patient_name, doc_name, date, complaints } = visit;
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <TableRow
      className="table-row"
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="table-cell" align="center">{patient_name}</TableCell>
      <TableCell align="center">{doc_name}</TableCell>
      <TableCell align="center">{moment(date).format("DD-MM-YYYY")}</TableCell>
      <TableCell align="center">{complaints}</TableCell>
      <TableCell className="buttons" align="center">
        <div className="button-img-div">
          <img
            onClick={handleOpenEdit}
            className="edit-img"
            src="/images/Edit.svg"
            alt=" "
          />
          {openEdit && (
            <EditVisitModalForm
              oldVisitDate={visit}
              getAllVisits={getAllVisits}
              handleClose={handleCloseEdit}
            />
          )}
          <img
            onClick={handleOpenDelete}
            className="delte-img"
            src="/images/Delete.svg"
            alt=" "
          />
          {openDelete && (
            <DeleteVisitModalForm
              id={_id}
              getAllVisits={getAllVisits}
              handleClose={handleCloseDelete}
            />
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default VisitComponent;
