import { React, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moment from "moment";
import SnackbarComponent from "../../Elements/SnackbarComponent/SnackbarComponent";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import SelectFieldComponent from "../../Elements/SelectFieldComponent/SelectFieldComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import API from "../../../controllers/API";
import "./EditVisitModalForm.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditVisitModalForm = ({ oldVisitDate, getAllVisits }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errMessages, setErrMessages] = useState({
    isOpen: false,
    errMessage: "",
  });

  const [visitForm, setVisitForm] = useState({
    id: oldVisitDate._id,
    patient_name: oldVisitDate.patient_name,
    doc_name: oldVisitDate.doc_name,
    date: oldVisitDate.date,
    complaints: oldVisitDate.complaints,
  });

  const handleSubmit = () => {
    const { patient_name, doc_name, date, complaints } = visitForm;
    if (
      patient_name.trim().length !== 0 &&
      doc_name.trim().length !== 0 &&
      date.trim().length !== 0 &&
      complaints.trim().length !== 0
    ) {
      API.updateVisit(visitForm)
        .then(() => {
          getAllVisits();
          handleClose();
        })
        .catch((err) => {});
    } else {
      setErrMessages({
        isOpen: true,
        errMessage: "Форма не должна содержать пустые поля!",
      });
    }
  };

  const setDocName = (event) => {
    setVisitForm({
      ...visitForm,
      doc_name: event.target.value,
    });
  };

  const setDate = (full_date) => {
    const date = moment(full_date).format();
    setVisitForm({
      ...visitForm,
      date,
    });
  };

  const setVisit = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setVisitForm({
      ...visitForm,
      [id]: value,
    });
  };
  return (
    <div>
      <SnackbarComponent
        errMessages={errMessages}
        setErrMessages={setErrMessages}
      />
      <img
        onClick={handleOpen}
        className="edit-img"
        src="/images/Edit.svg"
        alt=" "
      />
      <div className="edit-modal-div">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className="modal-title"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Изменить приём
            </Typography>
            <form className="edit-modal-form">
              <div className="form-div">
                <label>Имя</label>
                <TextInputFieldComponent
                  id={"patient_name"}
                  handleChange={setVisit}
                  value={visitForm.patient_name}
                />
              </div>
              <div className="form-div">
                <label>Врач</label>
                <SelectFieldComponent
                  value={visitForm.doc_name}
                  handleChange={setDocName}
                />
              </div>
              <div className="form-div">
                <label>Дата</label>
                <DateFieldComponent value={visitForm.date} setValue={setDate} />
              </div>
              <div className="form-div">
                <label>Жалобы</label>
                <TextInputFieldComponent
                  id={"complaints"}
                  handleChange={setVisit}
                  value={visitForm.complaints}
                />
              </div>
              <div className="form-div-button">
                <ButtonComponent
                  text={"Cancel"}
                  onClick={() => {
                    handleClose();
                  }}
                />
                <ButtonComponent
                  text={"Save"}
                  onClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default EditVisitModalForm;
