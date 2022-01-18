import * as React from "react";
import { MenuItem, FormControl, Select } from "@mui/material/";
import "./SelectFieldComponent.scss";

const SelectFieldComponent = ({ value, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} className="form-control">
      <Select
        className="select-field"
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"Иванов Иван Иванович"}>Иванов Иван Иванович</MenuItem>
        <MenuItem value={"Иванов Иван Иванович"}>Иванов Иван Иванович</MenuItem>
        <MenuItem value={"Иванов Иван Иванович"}>Иванов Иван Иванович</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectFieldComponent;
