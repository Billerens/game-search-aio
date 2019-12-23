import React from "react";
import style from "./style.module.scss";
import { Input } from "antd";

const { Search } = Input;

class Finder extends React.Component {
  render() {
    return (
      <div className={style.finder}>
        <Search
          placeholder="Enter game name here..."
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default Finder;
