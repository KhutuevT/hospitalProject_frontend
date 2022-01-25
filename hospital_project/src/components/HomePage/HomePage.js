import React, { useState, useEffect, useCallback } from "react";
import API from "../../controllers/API";
import CreateVisitForm from "../Forms/CreateVisitForm/CreateVisitForm";
import VisitListComponent from "../VisitListComponent/VisitListComponent";
import "./HomePage.scss";

const HomePage = () => {
  const [filterVisits, setFilterVisits] = useState([]);
  const [visits, setVisits] = useState([]);

  const getAllVisits = useCallback(async () => {
    await API.getAllVisits().then((res) => {
      setFilterVisits(res.data.data);
      setVisits(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (!localStorage.token) {
      return;
    }
    getAllVisits();
  }, []);

  return (
    <div className="home-page">
      <CreateVisitForm getAllVisits={getAllVisits} />
      <VisitListComponent
        visits={visits}
        setVisits={setVisits}
        filterVisits={filterVisits}
        setFilterVisits={setFilterVisits}
        getAllVisits={getAllVisits}
      />
    </div>
  );
};

export default HomePage;
