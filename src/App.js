import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import editEvent from "./components/addEvent.component";
import home from "./components/home.component";
import participate from "./components/participate.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <br />
          <Route path="/admin" component={editEvent} />
          <Route path="/" exact component={home} />
          <Route path="/participate" component={participate} />
        </Router>
      </div>
    );
  }
}
export default App;
