import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="/add-event" className="navbar-brand">
          Add Event
        </Link>
        <Link to="/event-winner" className="navbar-brand">
          Event Winners
        </Link>
      </nav>
    );
  }
}

export default Navbar;
