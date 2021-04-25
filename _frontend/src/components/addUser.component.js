import Axios from "axios";
import React, { Component } from "react";

class addUser extends Component {
  state = {
    email: "",
    username: "",
  };

  onchangeEmail = (e) => this.setState({ email: e.target.value });
  onchangeUsername = (e) => this.setState({ username: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      username: this.state.username,
    };
    Axios.post("https://lucky-draw-grofers.herokuapp.com/api/add-user", data)
      .then((t) => {
        alert("User added! ");
      })
      .catch((e) => {
        alert("User can't be added. Make sure you type correct email! ");
      });
  };

  render() {
    return (
      <div>
        <h3>Add new user </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.duration}
              onChange={this.onchangeUsername}
              onBlur={this.onchangeUsername}
            />
          </div>{" "}
          <div className="form-group">
            <label>Email </label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.duration}
              onBlur={this.onchangeEmail}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default addUser;
