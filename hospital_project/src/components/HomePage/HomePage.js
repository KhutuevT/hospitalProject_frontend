import React, { useState, useEffect, useCallback } from "react";
import API from "../../controllers/API";
import CreateVisitForm from "../Forms/CreateVisitForm/CreateVisitForm";
import VisitListComponent from "../VisitListComponent/VisitListComponent";
import "./HomePage.scss";

// import SnackbarComponent from "../Elements/SnackbarComponent/SnackbarComponent";

const HomePage = () => {
  const [visits, setVisits] = useState("");
  // const [ errMessages, setErrMessages ] = useState({
  //   isOpen: false,
  //   errMessage: ''
  // });
  const getAllVisits = useCallback(async () => {
    API.getAllVisits().then((res) => setVisits(res.data.data));
    // setErrMessages({
    //   isOpen: true,
    //   errMessage: 'Ошибка регистрации'
    // });
  }, []);


  useEffect(() => {
    getAllVisits();
  }, []); // check async await

  return (
    <div className="home-page">
      {/* <SnackbarComponent errMessages={errMessages} setErrMessages={setErrMessages}/> */}
      <CreateVisitForm getAllVisits={getAllVisits} />
      <VisitListComponent visits={visits} getAllVisits={getAllVisits} />
    </div>
  );
};

export default HomePage;