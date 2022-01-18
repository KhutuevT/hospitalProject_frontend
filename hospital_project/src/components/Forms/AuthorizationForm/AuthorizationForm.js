import {React, useState } from "react";
import { useHistory } from "react-router";
import API from "../../../controllers/API";
import Snackbar from "@mui/material/Snackbar";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./AuthorizationForm.scss";

const vertical = "top";
const horizontal = "center";

const AuthorizationForm = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const [authForm, setauthForm] = useState({
    login: "",
    password: "",
  });

  const setAuth = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setauthForm({ 
      ...authForm, 
      [id]: value 
    });
  };

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
    const { login, password } = authForm;
    const loginIsValid = login.match(/^[а-яА-Яa-zA-Z\d]{6,}$/gm);
    const passwordIsValid = password.match(/^(?=.*\d)[a-zA-Z\d]{6,}$/gm);
    if ((login.trim().length !== 0) & (password.trim().length !== 0)) {
      if (loginIsValid) {
        if (passwordIsValid) {
          API.authorization(login, password)
            .then(() => {
              history.push(`/home`);
            })
            .catch((e) => {
              const errorCode = e.response.data.code;
              setOpen(false);
              switch (errorCode) {
                case 301:
                  setErrMessage("Неправильный пароль");
                  break;
                case 302:
                  setErrMessage("Пользователя с данным логином несуществует");
                  break;
                default:
                  break;
              }
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
            <TextInputFieldComponent
              id={"login"}
              value={authForm.login}
              handleChange={setAuth}
            />
          </div>
          <div className="input-div">
            <label>Password:</label>
            <TextInputFieldComponent
              id={"password"}
              type={"password"}
              value={authForm.password}
              handleChange={setAuth}
            />
          </div>
          <div className="buttons-div">
            <ButtonComponent text={"Войти"} />
            <a href="/registration">Зарегистрироваться</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthorizationForm;
