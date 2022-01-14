import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SelectFieldComponent.scss";

const SelectFieldComponent = ({value, handleChange}) => {
  return (
    <div className="select-field-div">
      <FormControl sx={{ m: 1, minWidth: 120 }} className="select-field">
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"Иванов Иван Иванович"}>
            Иванов Иван Иванович
          </MenuItem>
          <MenuItem value={"Иванов Иван Иванович"}>
            Иванов Иван Иванович
          </MenuItem>
          <MenuItem value={"Иванов Иван Иванович"}>
            Иванов Иван Иванович
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFieldComponent;
