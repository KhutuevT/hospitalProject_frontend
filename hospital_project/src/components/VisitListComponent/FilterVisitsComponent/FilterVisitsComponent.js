import { React, useState } from "react";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
import { getVisits } from "../../../asyncActions/visits";
import { addFilterVisitAction } from "../../../store/visitsReducer";
import "./FilterVisitsComponent.scss";

const FilterVisitsComponent = ({ setFilterOpen }) => {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const visits = useSelector((state) => state.visits);
  const dispatch = useDispatch();
  const dateFilter = () => {
    const startDate = minDate ? new Date(minDate) : null;
    const endDate = maxDate ? new Date(maxDate) : null;
    dispatch(
      addFilterVisitAction(
        visits.filter((visit) => {
          const date = new Date(visit.date);
          return !(
            (startDate && startDate > date) ||
            (endDate && endDate < date)
          );
        })
      )
    );
  };

  const filterExit = () => {
    setFilterOpen(false);
    dispatch(getVisits());
  };

  return (
    <div className="filter">
      <div className="filter-div">
        <p>С :</p>
        <DateFieldComponent value={minDate} setValue={setMinDate} />
      </div>
      <div className="filter-div">
        <p>По :</p>
        <DateFieldComponent value={maxDate} setValue={setMaxDate} />
      </div>
      <div className="filter-div">
        <ButtonComponent
          text={"Фильтровать"}
          onClick={() => {
            dateFilter();
          }}
        />
      </div>
      <div>
        <DeleteOutlineIcon onClick={() => filterExit()} />
      </div>
    </div>
  );
};

export default FilterVisitsComponent;
