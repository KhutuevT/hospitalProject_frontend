import * as React from "react";
import { MenuItem, FormControl, Select } from "@mui/material/";
import "./SelectFieldComponent.scss";

const SelectFieldComponent = ({ value, handleChange }) => {
  const doc_names = [
    "Иванов Иван Иванович",
    "Иванов Иван Иванович",
    "Иванов Иван Иванович",
  ];
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} className="form-control">
      <Select
        className="select-field"
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {doc_names.map((doc_name) => (
          <MenuItem value={doc_name}>{doc_name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFieldComponent;
