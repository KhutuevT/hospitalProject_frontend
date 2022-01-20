import { React, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import VisitComponent from "./VisitComponent/VisitComponent";
import SelectFieldComponent from "../Elements/SelectFieldComponent/SelectFieldComponent";
import "./VisitListComponent.scss";

const sortFieldsArrRU = [" ", "Имя", "Врач", "Дата"];
const sortFieldsArr = [" ", "patient_name", "doc_name", "date"];
const sortDirectionArr = ["По возрастанию", "По убыванию"];
const tableTitle = ["Имя", "Врач", "Дата", "Жалобы"];

const VisitListComponent = ({ visits, getAllVisits, setVisits }) => {
  const [sortFieldsItem, setSortFieldsItem] = useState(0);
  const [sortDirectionItem, setSortDirectionItem] = useState(0);

  const sortArrVisits = (field, direction) => {
    let sortArr = visits.sort((a, b) => {
      let fieldName = sortFieldsArr[field];
      if (a[fieldName] > b[fieldName]) {
        return 1;
      } else {
        return -1;
      }
    });
    if (direction === 1) {
      sortArr = sortArr.reverse();
    }
    setVisits(sortArr);
  };

  const setDataSortField = (event) => {
    setSortFieldsItem(event.target.value);
    if (event.target.value !== 0) {
      sortArrVisits(event.target.value, sortDirectionItem);
    } else getAllVisits();
  };

  const setDatasortDirection = (event) => {
    setSortDirectionItem(event.target.value);
    sortArrVisits(sortFieldsItem, event.target.value);
  };

  return (
    <div className="visit-list-component">
      <div>
        <div className="sort-field">
          <div>
            <p>Сортировать по:</p>
            <SelectFieldComponent
              value={sortFieldsItem}
              handleChange={setDataSortField}
              items={sortFieldsArrRU}
            />
          </div>
          {sortFieldsItem !== 0 && (
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
      </div>
      <TableContainer className="visit-list" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableTitle.map((title, index) => (
                <TableCell key={`table_cell${index}`} align="center">
                  {title}
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visits.map((visit, index) => (
              <VisitComponent
                getAllVisits={getAllVisits}
                key={`visit-${index}`}
                index={index}
                visit={visit}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VisitListComponent;
