import React, { useState, useEffect, useCallback } from "react";
import API from "../../controllers/API";
import CreateVisitForm from "../Forms/CreateVisitForm/CreateVisitForm";
import VisitListComponent from "../VisitListComponent/VisitListComponent";
import "./HomePage.scss";

const HomePage = () => {
  const [visits, setVisits] = useState("");
  const getAllVisits = useCallback(async () => {
    API.getAllVisits().then((res) => {
      setVisits(res.data.data);
    });
  }, []);

  useEffect(async () => {
    getAllVisits();
  }, []);

  return (
    <div className="home-page">
      <CreateVisitForm getAllVisits={getAllVisits} />
      <VisitListComponent visits={visits} />
    </div>
  );
};

export default HomePage;
