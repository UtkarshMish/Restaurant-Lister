import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import restaurantdesc from "./restaurantdesc";
import { Route, Switch } from "react-router-dom";
import Home from "./home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <React.Fragment>
          <Switch>
            <Route path="/:id?" component={Home} className=" item" exact />
            <Route
              path="/restaurantdesc/:id"
              component={restaurantdesc}
              className=" item"
            />
          </Switch>
        </React.Fragment>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
