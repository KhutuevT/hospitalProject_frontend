import * as React from "react";
import TextField from "@mui/material/TextField";
import "./TextInputFieldComponent.scss";

const TextInputFieldComponent = ({ id, handleChange, value, type}) => {
  return (
    <div className="text-input-field-div">
      <TextField
        className="text-input-field"
        id={id}
        variant="outlined"
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default TextInputFieldComponent;
