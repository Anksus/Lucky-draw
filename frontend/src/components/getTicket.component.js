import Axios from "axios";
import React, { Component } from "react";

class GetTicket extends Component {
  state = {
    userData: [
      {
        email: "",
        tickets: "",
      },
    ],
    email: "",
  };

  componentDidMount() {
    Axios.get("http://localhost:9000/api/users").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          userData: res.data,
          email: res.data[0].email,
        });
      }
      //   console.log(this.state.userData);
    });
  }
  onchangeEmail = (e) => {
    this.setState({ email: e.target.value });
    // console.log(this.state.email);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const email = {
      email: this.state.email,
    };
    console.log(email);
    Axios.post("http://localhost:9000/api/get-ticket", email)
      .then((t) => {
        window.location = "/get-ticket";
      })
      .catch((e) => {
        alert("Can't add ticket");
      });
  };

  render() {
    return (
      <div>
        <h3>You need Raffle ticket to participate. So, get a new one.</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onchangeEmail}
              onBlur={this.onchangeEmail}
            >
              {this.state.userData.map(function (userData) {
                return (
                  <option key={userData.email} value={userData.email}>
                    {userData.email} (available tickets : {userData.tickets})
                  </option>
                );
              })}
            </select>
          </div>{" "}
          <div className="form-group">
            <input
              type="submit"
              value="Get ticket"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default GetTicket;
