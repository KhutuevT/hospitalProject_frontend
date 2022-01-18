import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ruLocale from 'date-fns/locale/ru';
import "./DateFieldComponent.scss"


const DateFieldComponent = ({value, setValue}) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns} className="data-field" locale={ruLocale}>
        <DatePicker
          mask={'__.__.____'}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} className="text-input-field" />}
        />
      </LocalizationProvider>
  );
};

export default DateFieldComponent;
