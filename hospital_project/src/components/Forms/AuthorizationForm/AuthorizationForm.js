import { React, useState } from "react";
import { useHistory } from "react-router";
import API from "../../../controllers/API";
import SnackbarComponent from "../../Elements/SnackbarComponent/SnackbarComponent";
import ButtonComponent from "../../Elements/ButtonComponent/ButtonComponent";
import TextInputFieldComponent from "../../Elements/TextInputFieldComponent/TextInputFieldComponent";
import "./AuthorizationForm.scss";

const AuthorizationForm = () => {
  const history = useHistory();

  const [errMessages, setErrMessages] = useState({
    isOpen: false,
    errMessage: "",
  });

  const [authForm, setauthForm] = useState({
    login: "",
    password: "",
  });

  const setAuth = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setauthForm({
      ...authForm,
      [id]: value,
    });
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
              switch (errorCode) {
                case 301:
                  setErrMessages({
                    isOpen: true,
                    errMessage: "Неправильный пароль",
                  });
                  break;
                case 302:
                  setErrMessages({
                    isOpen: true,
                    errMessage: "Пользователя с данным логином несуществует",
                  });
                  break;
                default:
                  break;
              }
            });
        } else {
          setErrMessages({
            isOpen: true,
            errMessage: `Пароль должен: - содержать только латинские символы
              - быть длиной не менее 6 символов
              - содержать хотя бы одну цифру
              - не содержать пробелы`,
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
    <div className="authorization-field-div">
      <SnackbarComponent
        errMessages={errMessages}
        setErrMessages={setErrMessages}
      />
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
