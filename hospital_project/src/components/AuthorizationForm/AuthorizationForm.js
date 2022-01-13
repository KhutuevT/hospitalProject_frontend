import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Snackbar from "@mui/material/Snackbar";
import API from "../../controllers/API";
import "./AuthorizationForm.scss";

const vertical = "top";
const horizontal = "center";

const AuthorizationForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginIsValid = login.match(/^[а-яА-Яa-zA-Z\d]{6,}$/gm);
    const passwordIsValid = password.match(/^(?=.*\d)[a-zA-Z\d]{6,}$/gm);
    if ((login.trim().length !== 0) & (password.trim().length !== 0)) {
      if (loginIsValid) {
        if (passwordIsValid) {
          API.authorization(login, password)
            .then((result) => {
              history.push(`/home`);
            })
            .catch((e) => {
              setOpen(false);
              setErrMessage("Неверные данные!");
              handleClick();
            });
        } else {
          setOpen(false);
          setErrMessage(
            `Пароль должен: - содержать только латинские символы
            - быть длиной не менее 6 символов 
            - содержать хотя бы одну цифру
            - не содержать пробелы`
          );
          handleClick();
        }
      } else {
        setOpen(false);
        setErrMessage("Длина логина должна быть больше 6 символов!");
        handleClick();
      }
    } else {
      setOpen(false);
      setErrMessage("Форма не должна содержать пустые поля!");
      handleClick();
    }
  };

  return (
    <div className="authorization-field-div">
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={errMessage}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <p>Войти в ситему</p>
        </div>
        <div className="form-body">
          <div className="input-div">
            <label>Login:</label>
            <input
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            ></input>
          </div>
          <div className="input-div">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons-div">
            <button>Войти</button>
            <a href="/registration">Зарегистрироваться</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
