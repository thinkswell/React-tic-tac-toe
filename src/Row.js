import React, { Component } from "react";
import Box from "./Box";

export default class Row extends Component {
  render() {
    return (
      <div className="row">
        <Box
          value={this.props.values[0]}
          currentVal={this.props.currentVal}
          setThis={this.props.setThis}
          wins={this.props.wins}
        />
        <Box
          value={this.props.values[1]}
          currentVal={this.props.currentVal}
          setThis={this.props.setThis}
          wins={this.props.wins}
        />
        <Box
          value={this.props.values[2]}
          currentVal={this.props.currentVal}
          setThis={this.props.setThis}
          wins={this.props.wins}
        />
      </div>
    );
  }
}
