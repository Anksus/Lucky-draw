import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import editEvent from "./components/addEvent.component";
import home from "./components/home.component";
import participate from "./components/participate.component";
import winners from "./components/winners.component";
import addUser from "./components/addUser.component";
import getTicket from "./components/getTicket.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <br />
          <Route path="/add-event" component={editEvent} />
          <Route path="/" exact component={home} />
          <Route path="/participate" component={participate} />
          <Route path="/event-winner" component={winners} />
          <Route path="/add-user" component={addUser} />
          <Route path="/get-ticket" component={getTicket} />
        </Router>
      </div>
    );
  }
}
export default App;
