import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  state = {
    date: "",
    time: "",
    reward: "",
    eventName: "",
    dateNextEvent: "",
    timeNextEvent: "",
    rewardNextEvent: "",
    eventNameNextEvent: "",
  };
  componentDidMount() {
    Axios.get("http://localhost:9000/api/running-event").then((res) => {
      this.setState({
        date: res.data.startsAt,
        reward: res.data.reward,
        time: res.data.time,
        eventName: res.data.eventName,
      });
    });
    Axios.get("http://localhost:9000/api/next-event").then((res) => {
      this.setState({
        dateNextEvent: res.data.date,
        rewardNextEvent: res.data.reward,
        timeNextEvent: res.data.time,
        eventNameNextEvent: res.data.eventName,
      });
      console.log(this.state.dateNextEvent);
    });
  }
  render() {
    const flag = this.state.date;
    const flagNextEvent = this.state.dateNextEvent;
    return (
      <div>
        {flag ? (
          <div class="card text-center">
            <div class="card-header">
              <h1> Running Lucky Draw event </h1>
            </div>
            <div class="card-body">
              <h3>{this.state.eventName}</h3>
              <h5 class="card-title">Reward - {this.state.reward}</h5>
              <p class="card-text">
                Started on - {this.state.date} {this.state.time}
              </p>

              <Link to="/participate" class="btn btn-primary">
                Participate
              </Link>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        ) : (
          <div>
            <h1>No running event, sorry</h1>
          </div>
        )}
        {flagNextEvent ? (
          <div class="card text-center">
            <div class="card-header">
              <h1> Upcoming next event</h1>
            </div>
            <div class="card-body">
              <h3>{this.state.eventNameNextEvent}</h3>

              <h5 class="card-title">Reward - {this.state.rewardNextEvent}</h5>
              <p class="card-text">
                Starts on - {this.state.dateNextEvent}{" "}
                {this.state.timeNextEvent}
              </p>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default home;
