import { React, useState } from "react";
import API from "../../../controllers/API";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import "./DeleteVisitModalForm.scss";

const DeleteVisitModalForm = ({ id, getAllVisits }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteVisit = () => {
    API.deleteVisit(id).then(() => {
      getAllVisits();
      handleClose();
    });
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        className="delete-img"
        src="/images/Delete.svg"
        alt=" "
      />
      <div className="delete-modal-div">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Box">
            <Typography
              className="modal-title"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Удалить прием
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Вы действительно хотите удалить прием?
            </Typography>
            <div className="form-div-button">
              <ButtonComponent
                text={"Cancel"}
                onClick={() => {
                  handleClose();
                }}
              />
              <ButtonComponent
                text={"Delete"}
                onClick={() => {
                  deleteVisit();
                }}
              />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteVisitModalForm;
