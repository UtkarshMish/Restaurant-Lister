import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import restaurantdesc from "./restaurantdesc";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <div className="ui">
            <React.Fragment>
              <Switch>
                <Route path="/" component={Home} className=" item" exact />
                <Route
                  path="/restaurantdesc"
                  component={restaurantdesc}
                  className=" item"
                />
              </Switch>
            </React.Fragment>
          </div>
        </BrowserRouter>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
