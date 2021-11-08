import React from "react";
import { Route, Switch } from "react-router-dom";

import { NotePage } from "../../../Note";
import { NotesPage } from "../../../Notes";
import { SplashPage } from "../../../Splash";
import { siteMap } from "./siteMap";

export const Routes = () => {
  const { NoteRoute, NotesRoute, SplashRoute } = siteMap;

  return (
    <Switch>
      <Route exact path={NoteRoute.path} component={NotePage} />
      <Route exact path={NotesRoute.path} component={NotesPage} />
      <Route exact path={SplashRoute.path} component={SplashPage} />
    </Switch>
  );
};
