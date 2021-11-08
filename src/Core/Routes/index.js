import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotePage } from "../../Note";
import { NotesPage } from "../../Notes";
import { SplashPage } from "../../Splash";
import { siteMap } from "./siteMap";

export const AppRoutes = () => {
  const { NoteRoute, NotesRoute, SplashRoute } = siteMap;

  return (
    <Router>
      <Routes>
        <Route exact path={NotesRoute.path} element={<NotesPage />} />
        <Route exact path={NoteRoute.path} element={<NotePage />} />
        <Route exact path={SplashRoute.path} element={<SplashPage />} />
      </Routes>
    </Router>
  );
};
