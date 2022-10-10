import React, { Component } from "react";
// import { Container } from "reactstrap";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import TableComponent from "./components/TableComponent";

import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import UpdateUserContainer from "./containers/UpdateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarComponent />

          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/create" component={CreateUserContainer} />
            <Route exact path="/update/:id" component={UpdateUserContainer} />
            <Route exact path="/detail/:id" component={DetailUserContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
