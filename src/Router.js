import React from "react";
import App from "./App";
import Home from "./pages/Home";
import CardFunc from "./pages/Card";
import Art from "./pages/Art";
import Credits from "./pages/Credits";

const routes = {
  "/": () => <Home />,
  "/TheLavenderWitch": () => <Home />,
  "/ErinCard": () => <CardFunc />,
  "/ErinArt": () => <Art />,
  "/ErinCredits": () => <Credits />,
  "/ErinHome": () => <Home />,
};

export default routes;