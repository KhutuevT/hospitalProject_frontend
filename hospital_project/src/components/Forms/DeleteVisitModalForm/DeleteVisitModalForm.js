import React from "react";
import API from "../../../controllers/API";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import "./DeleteVisitModalForm.scss";

const DeleteVisitModalForm = ({ id, getAllVisits, handleClose }) => {
  const deleteVisit = () => {
    API.deleteVisit(id).then(() => {
      getAllVisits();
      handleClose();
    });
  };

  return (
    <div>
      <div className="delete-modal-div">
        <Modal
          open={true}
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
            <Typography id="modal-modal-description" className="modal-body">
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
