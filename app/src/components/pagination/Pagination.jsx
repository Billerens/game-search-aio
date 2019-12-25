import React from "react";
import { connect } from "react-redux";
import { Pagination } from "antd";
import { getAllGames } from "../../redux/actions/games";

class Showcase extends React.Component {
  onPageChange = value => {
    this.props.getAllGames({
      page_size: "36",
      page: value,
      search: this.props.generals.currentlyFinding
    });
  };

  render() {
    return (
      <Pagination
        defaultCurrent={1}
        onChange={this.onPageChange}
        pageSize={36}
        total={this.props.games.allGamesCount}
        style={{ marginBottom: "10px" }}
      />
    );
  }
}

const mapStateToProps = ({ games, generals }) => ({ games, generals });
const mapDispatchToProps = {
  getAllGames
};

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
