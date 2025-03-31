import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/header";
import AppRoutes from "./components/routes/routes";

function App() {
  return (
    <Router>
      <Header/>
      <AppRoutes/>
    </Router>
  );
}

export default App;
