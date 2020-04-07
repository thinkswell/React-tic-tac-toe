import React, { Component } from "react";
import "./App.css";
import Row from "./Row";

class App extends Component {
  constructor() {
    super();
    this.state = {
      matrix: [null, null, null, null, null, null, null, null, null],
      currentVal: "X",
      player: ["Player 1", "Player 2"],
      palyerState: ["X", "O", "Wins!!"],
      showP: 0,
      showS: 0,
      wins: false,
    };
    this.setThis = this.setThis.bind(this);
  }

  setThis = (index) => {
    if (this.state.wins) return;
    const { currentVal, matrix } = this.state;
    if (matrix[index] !== null) return;
    var newMatrix = matrix;
    newMatrix[index] = currentVal;
    this.setState({
      matrix: newMatrix,
      currentVal: `${currentVal === "X" ? "O" : "X"}`,
    });
    this.setState({
      showP: this.state.showP === 0 ? 1 : 0,
      showS: this.state.showS === 0 ? 1 : 0,
    });
    console.log(matrix);
    this.checkWinner();
    console.log("ShowP ", this.state.showP, "ShowS ", this.state.showS);
  };

  checkWinner = () => {
    const { matrix } = this.state;

    console.log("Checking Winner !!");
    const winsIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winsIndex.forEach((cool, i) => {
      const [a, b, c] = winsIndex[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[b] === matrix[c]) {
        this.setState({
          showP: matrix[a] === "X" ? 0 : 1,
          showS: 2,
          wins: true,
        });
        return;
      }
    });
    return null;
  };

  render() {
    return (
      <div className="App">
        <div
          className="display"
          style={{ color: this.state.showP === 1 ? "blue" : "red" }}
        >
          {this.state.player[this.state.showP]} :{" "}
          <span>{this.state.palyerState[this.state.showS]}</span>
        </div>
        <div className="container">
          <Row
            values={[0, 1, 2]}
            currentVal={this.state.currentVal}
            setThis={this.setThis}
            wins={this.state.wins}
          />
          <Row
            values={[3, 4, 5]}
            currentVal={this.state.currentVal}
            setThis={this.setThis}
            wins={this.state.wins}
          />
          <Row
            values={[6, 7, 8]}
            currentVal={this.state.currentVal}
            setThis={this.setThis}
            wins={this.state.wins}
          />
        </div>
      </div>
    );
  }
}

export default App;
