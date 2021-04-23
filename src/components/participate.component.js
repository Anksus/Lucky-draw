import Axios from "axios";
import React, { Component } from "react";

class Participate extends Component {
  state = {
    emails: [],
    email: "",
    eventName: "",
  };

  componentDidMount() {
    Axios.get("http://localhost:9000/api/users").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          email: res.data[0],
          emails: res.data,
        });
      }
      console.log(this.state.emails);
    });
    Axios.get("http://localhost:9000/api/next-event").then((res) => {
      console.log(res.data);

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
    Axios.post("http://localhost:9000/api/participate", data)
      .then((t) => {
        window.location = "/";
      })
      .catch((e) => {
        alert("You cant participate");
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
              {this.state.emails.map(function (email) {
                return (
                  <option key={email} value={email}>
                    {email}
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
