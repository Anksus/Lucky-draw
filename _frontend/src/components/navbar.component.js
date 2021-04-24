import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand" style={{ color: "red" }}>
          Home
        </Link>
        <Link to="/add-event" className="navbar-brand">
          Add Event
        </Link>
        <Link
          to="/event-winner"
          className="navbar-brand"
          style={{ color: "red" }}
        >
          Event Winners
        </Link>
        <Link to="/add-user" className="navbar-brand">
          Add user
        </Link>

        <Link
          to="/get-ticket"
          className="navbar-brand"
          style={{ color: "red" }}
        >
          Get ticket
        </Link>
      </nav>
    );
  }
}

export default Navbar;
