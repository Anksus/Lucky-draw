import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="/admin" className="navbar-brand">
          admin
        </Link>
      </nav>
    );
  }
}

export default Navbar;
