import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from "./Menu";

export default function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Menu} />
    </Router>
  );
}
