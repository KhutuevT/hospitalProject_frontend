import { React, useState } from "react";
import API from "../../../controllers/API";
import moment from "moment";
import SnackbarComponent from "../../Elements/SnackbarComponent/SnackbarComponent";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import SelectFieldComponent from "../../Elements/SelectFieldComponent/SelectFieldComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./CreateVisitForm.scss";

const todayDate = moment().format();

const CreateVisitForm = ({ getAllVisits }) => {
  const [visitForm, setVisitForm] = useState({
    patient_name: "",
    doc_name: "",
    date: todayDate,
    complaints: "",
  });

  const [errMessages, setErrMessages] = useState({
    isOpen: false,
    errMessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { patient_name, doc_name, date, complaints } = visitForm;
    if (
      patient_name.trim().length !== 0 &&
      doc_name.trim().length !== 0 &&
      date.trim().length !== 0 &&
      complaints.trim().length !== 0
    ) {
      API.addNewVisit(visitForm)
        .then((result) => {
          setVisitForm({
            patient_name: "",
            doc_name: "",
            date: "",
            complaints: "",
          });
          getAllVisits();
        })
        .catch((err) => {}); //add error log
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
    <div className="create-visit-div">
      <div>
        <SnackbarComponent
          errMessages={errMessages}
          setErrMessages={setErrMessages}
        />
      </div>
      <form onSubmit={handleSubmit} className="create-visit-form">
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
        <div className="form-div">
          <ButtonComponent text={"Добавить"} />
        </div>
      </form>
    </div>
  );
};

export default CreateVisitForm;
