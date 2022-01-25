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
import AddIcon from "@mui/icons-material/Add";
import VisitComponent from "./VisitComponent/VisitComponent";
import SortVisitsComponent from "./SortVisitsComponent/SortVisitsComponent";
import FilterVisitsComponent from "./FilterVisitsComponent/FilterVisitsComponent";
import "./VisitListComponent.scss";

const tableTitle = ["Имя", "Врач", "Дата", "Жалобы"];

const VisitListComponent = ({
  visits,
  setVisits,
  filterVisits,
  setFilterVisits,
  getAllVisits,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="visit-list-component">
      <div className="sort-visits">
        <SortVisitsComponent
          filterVisits={filterVisits}
          getAllVisits={getAllVisits}
          setFilterVisits={setFilterVisits}
        />
        {!filterOpen && (
          <div className="open-filter">
            <p>Добавить фильтр по дате:</p>
            <AddIcon onClick={() => setFilterOpen(true)} />
          </div>
        )}
      </div>
      {filterOpen && (
        <FilterVisitsComponent
          visits={visits}
          setFilterVisits={setFilterVisits}
          getAllVisits={getAllVisits}
          setFilterOpen={setFilterOpen}
        />
      )}
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
            {filterVisits.map((visit, index) => (
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
