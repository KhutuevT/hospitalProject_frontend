import { React, useState } from "react";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import DateFieldComponent from "../../Elements/DateFieldComponent/DateFieldComponent";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./FilterVisitsComponent.scss";

const FilterVisitsComponent = ({
  visits,
  setFilterVisits,
  getAllVisits,
  setFilterOpen,
}) => {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const dateFilter = () => {
    const startDate = minDate ? new Date(minDate) : null;
    const endDate = maxDate ? new Date(maxDate) : null;
    setFilterVisits(
      visits.filter((visit) => {
        const date = new Date(visit.date);
        return !(
          (startDate && startDate > date) ||
          (endDate && endDate < date)
        );
      })
    );
  };

  const filterExit = () => {
    setFilterOpen(false);
    getAllVisits();
  };
  
  return (
    <div className="filter-div">
      <div>
        <p>С :</p>
      </div>
      <div>
        <DateFieldComponent value={minDate} setValue={setMinDate} />
      </div>
      <div>
        <p>По :</p>
      </div>
      <div>
        <DateFieldComponent value={maxDate} setValue={setMaxDate} />
      </div>
      <div>
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
