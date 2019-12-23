import React from "react";
import { Route, Switch } from "react-router-dom";

import PageWrapper from "../src/containers/pageWrapper/PageWrapper";
import NotFound from "./views/404/404";
import WelcomePage from "./views/welcomePage/WelcomePage";
import SearchPage from "./views/searchPage/SearchPage";

class App extends React.Component {
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
                title="Добро пожаловать :)"
                component={WelcomePage}
              />
            )}
          />
          <Route
            path="/search"
            render={props => (
              <PageWrapper
                {...props}
                title="Поиск игр"
                component={SearchPage}
              />
            )}
          />
          <Route
            path="*"
            render={props => (
              <PageWrapper {...props} title="Ошибка?" component={NotFound} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
