import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PageWrapper from "../src/containers/pageWrapper/PageWrapper";
import NotFound from "./views/404/404";
import SearchPage from "./views/searchPage/SearchPage";
import { getAllGames } from "./redux/actions/games";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllGames({ page_size: "36" });
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <PageWrapper
                {...props}
                title="Game finder"
                component={SearchPage}
              />
            )}
          />
          <Route
            path="*"
            render={props => (
              <PageWrapper {...props} title="Error?" component={NotFound} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games });
const mapDispatchToProps = {
  getAllGames
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
