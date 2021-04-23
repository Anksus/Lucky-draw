import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  state = {
    date: "",
    reward: "",
    time: "",
  };
  componentDidMount() {
    Axios.get("http://localhost:9000/api/next-event").then((res) => {
      console.log(res.data.time);

      this.setState({
        date: res.data.date,
        reward: res.data.reward,
        time: res.data.time,
      });
    });
  }
  render() {
    return (
      <div>
        <div class="card text-center">
          <div class="card-header">Lucky Draw</div>
          <div class="card-body">
            <h5 class="card-title">
              Participate in lucky draw to win {this.state.reward}
            </h5>
            <p class="card-text">
              event starts on {this.state.date} {this.state.time}
            </p>
            <Link to="/participate" class="btn btn-primary">
              Participate
            </Link>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}

export default home;
