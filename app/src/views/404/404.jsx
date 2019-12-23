import React from "react";
import style from "./style.module.scss";

class NotFound extends React.Component {
  render() {
    return (
      <div className={style.title}>
        Хм... Я не уверен, что вы искали именно это...
      </div>
    );
  }
}

export default NotFound;
