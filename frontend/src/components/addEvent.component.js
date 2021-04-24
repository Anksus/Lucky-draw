import Axios from "axios";
import React, { Component } from "react";

class addEvent extends Component {
  state = {
    eventName: "",
    startsAt: "",
    duration: 0,
    reward: "",
  };

  onchangeEventName = (e) => this.setState({ eventName: e.target.value });
  onChangeDuration = (e) => this.setState({ duration: e.target.value });

  onchangeReward = (e) => this.setState({ reward: e.target.value });
  onchangeDate = (e) => this.setState({ startsAt: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      eventName: this.state.eventName,
      startsAt: this.state.startsAt,
      duration: this.state.duration,
      reward: this.state.reward,
    };
    Axios.post("http://localhost:9000/api/add-event", data).then((t) =>
      console.log(t.data)
    );

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Conduct new Lucky Draw event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.eventName}
              onChange={this.onchangeEventName}
              onBlur={this.onchangeEventName}
            />
          </div>{" "}
          <div className="form-group">
            <label>
              Date and Timing (YYYY/MM/DD HH:MM:SS) Note - Add event, which will
              start in future.{" "}
            </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.startsAt}
              onChange={this.onchangeDate}
              onBlur={this.onchangeDate}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="number"
              className="form-control"
              required
              value={this.state.duration}
              onChange={this.onChangeDuration}
              onBlur={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Reward</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.reward}
              onChange={this.onchangeReward}
              onBlur={this.onchangeReward}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Event"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default addEvent;
