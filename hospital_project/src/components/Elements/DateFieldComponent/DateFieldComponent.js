import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./DateFieldComponent.scss"

const DateFieldComponent = ({value, setValue}) => {
  return (
    <div className="date-field-div">
      <LocalizationProvider dateAdapter={AdapterDateFns} className="data-field">
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} className="text-input-field" />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateFieldComponent;
