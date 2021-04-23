import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  state = {
    date: "",
    reward: "",
    eventName: "",
  };
  componentDidMount() {
    Axios.get("http://localhost:9000/api/running-event").then((res) => {
      console.log(res.data);

      this.setState({
        date: res.data.startsAt,
        reward: res.data.reward,
        eventName: res.data.eventName,
      });
    });
  }
  render() {
    const val = this.state.date;
    return (
      <div>
        {val ? (
          <div class="card text-center">
            <div class="card-header">Running Lucky Draw event</div>
            <div class="card-body">
              <h5 class="card-title">Reward - {this.state.reward}</h5>
              <p class="card-text">
                Starts On - {this.state.date} {this.state.time}
              </p>

              <Link to="/participate" class="btn btn-primary">
                Participate
              </Link>
            </div>
            <div class="card-footer text-muted"></div>
          </div>
        ) : (
          <div>
            <h1>No event sorry</h1>
          </div>
        )}
      </div>
    );
  }
}

export default home;
