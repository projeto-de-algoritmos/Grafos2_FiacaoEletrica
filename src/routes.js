import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "./pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={DashBoard} />
    </Switch>
  );
}
