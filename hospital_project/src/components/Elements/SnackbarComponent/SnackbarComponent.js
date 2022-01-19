import { React, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
const vertical = "top";
const horizontal = "center";

const SnackbarComponent = ({ errMessages, setErrMessages }) => {
  const {isOpen, errMessage} = errMessages;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrMessages(()=>{
      return {
        isOpen: false,
        errMessage: ''
      }
    })
  };

  return (
    <Snackbar
    anchorOrigin={{ vertical, horizontal }}
    open={isOpen}
    autoHideDuration={6000}
    onClose={handleClose}
    message={errMessage}
  />
  );
};

export default SnackbarComponent;
