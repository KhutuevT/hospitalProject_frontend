import { React } from "react";
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
import SortVisitsComponent from "./SortVisitsComponent/SortVisitsComponent";
import "./VisitListComponent.scss";

const tableTitle = ["Имя", "Врач", "Дата", "Жалобы"];

const VisitListComponent = ({ visits, getAllVisits, setVisits }) => {
  return (
    <div className="visit-list-component">
      <SortVisitsComponent
        visits={visits}
        getAllVisits={getAllVisits}
        setVisits={setVisits}
      />
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
