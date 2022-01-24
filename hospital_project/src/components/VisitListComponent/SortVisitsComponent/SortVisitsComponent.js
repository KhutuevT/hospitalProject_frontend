import { React, useState } from "react";
import SelectFieldComponent from "../../Elements/SelectFieldComponent/SelectFieldComponent";
import "./SortVisitsComponent.scss";

const sortFieldsArrRU = [
  {
    inputName: " ",
    value: "none",
  },
  {
    inputName: "Имя",
    value: "patient_name",
  },
  {
    inputName: "Врач",
    value: "doc_name",
  },
  {
    inputName: "Дата",
    value: "date",
  },
];
const sortDirectionArr = [
  {
    inputName: "По возрастанию",
    value: "asc",
  },
  {
    inputName: "По убыванию",
    value: "desc",
  },
];

const SortVisitsComponent = ({ visits, getAllVisits, setVisits }) => {
  const [sortFieldsItem, setSortFieldsItem] = useState("none");
  const [sortDirectionItem, setSortDirectionItem] = useState("asc");

  const sortArrVisits = (field, direction) => {
    visits.sort((a, b) =>
      a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
    );
    if (direction === "desc") {
      visits.reverse();
    }
    setVisits([...visits]);
  };

  const setDataSortField = (event) => {
    setSortFieldsItem(event.target.value);
    if (event.target.value !== "none") {
      sortArrVisits(event.target.value, sortDirectionItem);
    } else getAllVisits();
  };

  const setDatasortDirection = (event) => {
    setSortDirectionItem(event.target.value);
    sortArrVisits(sortFieldsItem, event.target.value);
  };

  return (
    <div className="sort-field">
      <div>
        <p>Сортировать по:</p>
        <SelectFieldComponent
          value={sortFieldsItem}
          handleChange={setDataSortField}
          items={sortFieldsArrRU}
        />
      </div>
      {sortFieldsItem !== "none" && (
        <div>
          <p>Направление:</p>
          <SelectFieldComponent
            value={sortDirectionItem}
            handleChange={setDatasortDirection}
            items={sortDirectionArr}
          />
        </div>
      )}
    </div>
  );
};

export default SortVisitsComponent;
