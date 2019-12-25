import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { getAllGames } from "../../redux/actions/games";
import { setFindText } from "../../redux/actions/general";

const { Search } = Input;

class Finder extends React.Component {
  onSearch = value => {
    this.props.setFindText(value);
    this.props.getAllGames({ search: value, page_size: "36" });
  };

  render() {
    return (
      <div className={"place"}>
        <Search
          placeholder="Enter game name here..."
          onSearch={this.onSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games });
const mapDispatchToProps = {
  getAllGames,
  setFindText
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
