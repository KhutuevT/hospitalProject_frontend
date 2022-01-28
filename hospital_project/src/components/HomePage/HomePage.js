import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVisits } from "../../asyncActions/visits";
import CreateVisitForm from "../Forms/CreateVisitForm/CreateVisitForm";
import VisitListComponent from "../VisitListComponent/VisitListComponent";

import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const getAllVisits = () => {
    dispatch(getVisits());
  };

  useEffect(() => {
    if (!localStorage.token) {
      return;
    }
    getAllVisits();
  }, []);

  return (
    <div className="home-page">
      <CreateVisitForm getAllVisits={getAllVisits} />
      <VisitListComponent />
    </div>
  );
};

export default HomePage;
