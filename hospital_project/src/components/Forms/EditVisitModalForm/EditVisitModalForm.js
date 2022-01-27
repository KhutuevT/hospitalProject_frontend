import { React, useState, useEffect } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import API from "../../../controllers/API";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import SnackbarComponent from "../../Elements/SnackbarComponent/SnackbarComponent";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import SelectFieldComponent from "../../Elements/SelectFieldComponent/SelectFieldComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./EditVisitModalForm.scss";

const doc_names = [
  {
    inputName: "Иванов Иван Иванович",
  },
  {
    inputName: "Петров Иван Иванович",
  },
  {
    inputName: "Иванов Иван Иванович",
  },
];

const EditVisitModalForm = ({ oldVisitDate, getAllVisits, handleClose }) => {
  const { _id, patient_name, doc_name, date, complaints } = oldVisitDate;
  const [errMessages, setErrMessages] = useState({
    isOpen: false,
    errMessage: "",
  });

  const [visitForm, setVisitForm] = useState({
    new_patient_name: patient_name,
    new_doc_name: doc_name,
    new_date: date,
    new_complaints: complaints,
  });

  const { new_patient_name, new_doc_name, new_date, new_complaints } =
    visitForm;

  const handleSubmit = () => {
    if (
      new_patient_name.trim().length !== 0 &&
      new_doc_name.trim().length !== 0 &&
      new_date.trim().length !== 0 &&
      new_complaints.trim().length !== 0
    ) {
      API.updateVisit({
        _id,
        patient_name: new_patient_name,
        doc_name: new_doc_name,
        date: new_date,
        complaints: new_complaints,
      })
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
      new_doc_name: event.target.value,
    });
  };

  const setDate = (full_date) => {
    const new_date = moment(full_date).format();
    setVisitForm({
      ...visitForm,
      new_date,
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
      <div className="edit-modal-div">
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
              Изменить приём
            </Typography>
            <form className="edit-modal-form">
              <div className="form-div">
                <label>Имя</label>
                <TextInputFieldComponent
                  id={"new_patient_name"}
                  handleChange={setVisit}
                  value={new_patient_name}
                />
              </div>
              <div className="form-div">
                <label>Врач</label>
                <SelectFieldComponent
                  value={new_doc_name}
                  handleChange={setDocName}
                  items={doc_names}
                />
              </div>
              <div className="form-div">
                <label>Дата</label>
                <DateFieldComponent value={new_date} setValue={setDate} />
              </div>
              <div className="form-div">
                <label>Жалобы</label>
                <TextInputFieldComponent
                  id={"new_complaints"}
                  handleChange={setVisit}
                  value={new_complaints}
                />
              </div>
            </form>
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
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default EditVisitModalForm;
