import React from "react";
import { Route, Switch } from "react-router-dom";

import { siteMap } from "./siteMap";

export const Routes = () => {
  const { NotePage, NotesPage, SplashPage } = siteMap;
  
  return (
    <Switch>
      <Route exact path={NotePage.path} component={} />
      <Route exact path={NotesPage.path} component={} />
      <Route exact path={SplashPage.path} component={} />
    </Switch>
  );
};
