import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home"));

const Routers = () => {
  return (
    <Switch>
      <Route path="/:demoId" exact component={HomePage} />
      <Route path="/popup-pano2vr/:demoId" component={HomePage} />
    </Switch>
  );
};

export default Routers;
