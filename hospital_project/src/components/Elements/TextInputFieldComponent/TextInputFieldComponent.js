import * as React from "react";
import TextField from "@mui/material/TextField";
import "./TextInputFieldComponent.scss";

const TextInputFieldComponent = ({ id, handleChange }) => {
  return (
    <div className="text-input-field-div">
      <TextField
        className="text-input-field"
        id={id}
        variant="outlined"
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInputFieldComponent;
