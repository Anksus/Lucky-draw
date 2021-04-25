import Axios from "axios";
import React, { Component } from "react";

class Participate extends Component {
  state = {
    userData: [
      {
        email: "",
        tickets: "",
      },
    ],
    email: "",
    eventName: "",
  };

  componentDidMount() {
    Axios.get("https://lucky-draw-grofers.herokuapp.com/api/users").then(
      (res) => {
        if (res.data.length > 0) {
          this.setState({
            email: res.data[0].email,
            userData: res.data,
          });
        }
      }
    );
    Axios.get(
      "https://lucky-draw-grofers.herokuapp.com/api/running-event"
    ).then((res) => {
      this.setState({
        eventName: res.data.eventName,
      });
    });
  }
  onchangeEmail = (e) => this.setState({ email: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      event: this.state.eventName,
    };
    Axios.post("https://lucky-draw-grofers.herokuapp.com/api/participate", data)
      .then((t) => {
        window.location = "/";
      })
      .catch((e) => {
        alert("You can't participate");
      });
  };

  render() {
    return (
      <div>
        <h3>Participate in {this.state.eventName}</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>email </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onchangeEmail}
              onBlur={this.onchangeEmail}
            >
              {this.state.userData.map(function (val) {
                return (
                  <option key={val.email} value={val.email}>
                    {val.email} (available tickets - {val.tickets})
                  </option>
                );
              })}
            </select>
          </div>{" "}
          <div className="form-group">
            <input
              type="submit"
              value="Participate"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Participate;
