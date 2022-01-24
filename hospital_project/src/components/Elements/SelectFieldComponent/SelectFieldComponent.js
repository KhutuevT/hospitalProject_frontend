import * as React from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import "./SelectFieldComponent.scss";

const SelectFieldComponent = ({ value, handleChange, items }) => {
  return (
    <FormControl className="form-control">
      <Select
        className="select-field"
        value={value}
        onChange={(e) => handleChange(e)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {items.map((name, index) => (
          <MenuItem
            key={`menu-item${index}`}
            value={name.value || name.inputName}
          >
            {name.inputName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFieldComponent;
