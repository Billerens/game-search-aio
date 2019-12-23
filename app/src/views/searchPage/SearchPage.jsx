import React from "react";
import style from "./style.module.scss";
import Finder from "../../components/finder/Finder";

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Finder />
      </div>
    );
  }
}

export default SearchPage;
