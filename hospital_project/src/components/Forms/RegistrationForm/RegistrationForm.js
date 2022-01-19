import { React, useState } from "react";
import { useHistory } from "react-router";
import API from "../../../controllers/API";
import Button from "../../Elements/ButtonComponent/ButtonComponent";
import SnackbarComponent from "../../Elements/SnackbarComponent/SnackbarComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./RegistrationForm.scss";


const RegistrationForm = () => {
  const history = useHistory();
  const [regForm, setRegForm] = useState({
    login: "",
    password: "",
    reapeatPassword: "",
  });

  const setReg = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setRegForm({
      ...regForm,
      [id]: value,
    });
  };

  const [errMessages, setErrMessages] = useState({
    isOpen: false,
    errMessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { login, password, reapeatPassword } = regForm;
    const loginIsValid = login.match(/^[а-яА-Яa-zA-Z\d]{6,}$/gm);
    const passwordIsValid = password.match(/^(?=.*\d)[a-zA-Z\d]{6,}$/gm);
    if (
      (login.trim().length !== 0) &
      (password.trim().length !== 0) &
      (reapeatPassword.trim().length !== 0)
    ) {
      if (loginIsValid) {
        if (passwordIsValid) {
          if (password === reapeatPassword) {
            API.registration(login, password)
              .then((result) => {
                history.push(`/home`);
              })
              .catch((e) => {
                setErrMessages({
                  isOpen: true,
                  errMessage: 'Такой логин уже используется!'
                });
              });
          } else {
            setErrMessages({
              isOpen: true,
              errMessage: 'Пароли не совпадают!'
            });
          }
        } else {
          setErrMessages({
            isOpen: true,
            errMessage:  `Пароль должен: - содержать только латинские символы
              - быть длиной не менее 6 символов
              - содержать хотя бы одну цифру
              - не содержать пробелы`
          });
        }
      } else {
        setErrMessages({
          isOpen: true,
          errMessage: "Длина логина должна быть больше 6 символов!",
        });
      }
    } else {
      setErrMessages({
        isOpen: true,
        errMessage: "Форма не должна содержать пустые поля!",
      });
    }
  };

  return (
    <div className="registration-field-div">
      <div>
      <SnackbarComponent
        errMessages={errMessages}
        setErrMessages={setErrMessages}
      />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <p>Регистрация</p>
        </div>
        <div className="form-body">
          <div className="input-div">
            <label>Login:</label>
            <TextInputFieldComponent
              id={"login"}
              value={regForm.login}
              handleChange={setReg}
            />
          </div>
          <div className="input-div">
            <label>Password:</label>
            <TextInputFieldComponent
              id={"password"}
              value={regForm.password}
              handleChange={setReg}
              type={"password"}
            />
          </div>
          <div className="input-div">
            <label>Repeat password:</label>
            <TextInputFieldComponent
              id={"reapeatPassword"}
              value={regForm.reapeatPassword}
              handleChange={setReg}
              type={"password"}
            />
          </div>
          <div className="buttons-div">
            <Button text={"Зарегистрироваться"} />
            <a href="/authorization">Авторизоваться</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
