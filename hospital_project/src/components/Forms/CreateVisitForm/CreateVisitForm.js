import React from "react";
import { useState } from "react";
import API from "../../../controllers/API";
import Snackbar from "@mui/material/Snackbar";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import SelectFieldComponent from "../../Elements/SelectFieldComponent/SelectFieldComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./CreateVisitForm.scss";

const vertical = "top";
const horizontal = "center";

const CreateVisitForm = ({ getAllVisits }) => {
  const [visitForm, setVisitForm] = useState({
    patient_name: "",
    doc_name: "",
    date: "",
    complaints: "",
  });
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { patient_name, doc_name, date, complaints } = visitForm;
    console.log(patient_name, doc_name, date, complaints);
    if (
      patient_name.trim().length !== 0 &&
      doc_name.trim().length !== 0 &&
      date.trim().length !== 0 &&
      complaints.trim().length !== 0
    ) {
      handleClose();
      API.addNewVisit(visitForm)
        .then((result) => {
          getAllVisits();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      handleClose();
      setErrMessage("Форма не должна содержать пустые поля!");
      handleClick();
    }
  };

  const setDocName = (event) => {
    setVisitForm({ ...visitForm, doc_name: event.target.value });
  };

  const setDate = (full_date) => {
    const date = `${full_date.getFullYear()}.${
      full_date.getMonth() + 1
    }.${full_date.getDate()}`;
    console.log(date);
    console.log(full_date);
    setVisitForm({
      ...visitForm,
      date,
    });
  };
  
  const setVisit = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    console.log(id, value);
    setVisitForm({ ...visitForm, [id]: value });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="create-visit-div">
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={errMessage}
        />
      </div>
      <form onSubmit={handleSubmit} className="create-visit-form">
        <div className="form-div">
          <TextInputFieldComponent
            id={"patient_name"}
            handleChange={setVisit}
          />
        </div>
        <div className="form-div">
          <SelectFieldComponent
            value={visitForm.doc_name}
            handleChange={setDocName}
          />
        </div>
        <div className="form-div">
          <DateFieldComponent value={visitForm.date} setValue={setDate} />
        </div>
        <div className="form-div">
          <TextInputFieldComponent id={"complaints"} handleChange={setVisit} />
        </div>
        <div className="form-div">
          <ButtonComponent text={"Добавить"} />
        </div>
      </form>
    </div>
  );
};

export default CreateVisitForm;
