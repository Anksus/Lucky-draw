import Axios from "axios";
import React, { Component } from "react";

class winners extends Component {
  state = {
    data: [
      {
        event: "",
        winner: "",
      },
    ],
  };
  componentDidMount() {
    Axios.get("http://localhost:9000/api/last-week-winners").then((res) => {
      const values = res.data.map((val) => {
        return {
          event: val.eventName,
          winner: val.winner,
        };
      });
      this.setState({
        data: values,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map((val) => {
          return (
            <div class="card">
              <div class="card-header">{val.event}</div>
              <div class="card-body">
                <h5 class="card-title">Winner - {val.winner}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default winners;
