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
import { useSelector } from "react-redux";
import VisitComponent from "./VisitComponent/VisitComponent";
import SortVisitsComponent from "./SortVisitsComponent/SortVisitsComponent";
import FilterVisitsComponent from "./FilterVisitsComponent/FilterVisitsComponent";
import "./VisitListComponent.scss";

const tableTitle = ["Имя", "Врач", "Дата", "Жалобы"];

const VisitListComponent = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const filterVisits = useSelector((state) => state.filterVisits);

  return (
    <div className="visit-list-component">
      <div className="sort-filter-visits">
        <SortVisitsComponent />

        {!filterOpen && (
          <div className="open-filter">
            <p>Добавить фильтр по дате:</p>
            <AddIcon className="add-img" onClick={() => setFilterOpen(true)} />
          </div>
        )}
      </div>

      {filterOpen && <FilterVisitsComponent setFilterOpen={setFilterOpen} />}

      <TableContainer className="visit-list" component={Paper}>
        <Table stickyHeader aria-label="sticky table">
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
