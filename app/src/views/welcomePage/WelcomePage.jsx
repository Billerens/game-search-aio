import React from "react";
import style from "./style.module.scss";
import { Button } from "antd";
import history from "../../helpers/history";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className={style.container}>
        Hi!
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          className={style.loginButton}
          onClick={() => history.push("/login")}
        >
          Войти!
        </Button>
        Или
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          className={style.loginButton}
          onClick={() => history.push("/register")}
        >
          Зарегистрироваться!
        </Button>
        Ну или
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          className={style.loginButton}
          onClick={() => history.push("/")}
        >
          На главную!
        </Button>
      </div>
    );
  }
}

export default WelcomePage;
