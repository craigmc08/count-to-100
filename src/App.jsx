import React from 'react';

import ProgressBar from 'Components/ProgressBar/ProgressBar';
import Inputs from 'Components/Inputs/Inputs';

import './App.less';

const inputs = [ 1, 2, 3,  4, 5, 6, 7, 8, 9, 10 ];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      playerOneTurn: true,
      count: 0,
      winner: false,
    };
  }

  start() {
    this.setState({
      started: true,
      count: 0,
      winner: false,
      playerOneTurn: true,
    });
  }
  turn(val) {
    if (!this.state.started) return;
    const count = this.state.count + val;
    const winner = count === 100 ? this.state.playerOneTurn ? 1 : 2 : count > 100 ? null : false;
    this.setState({
      count,
      winner,
    });

    if (typeof winner === 'boolean' && !winner) {
      setTimeout(() => this.setState({
        playerOneTurn: !this.state.playerOneTurn,
      }), 500);
    }
  }

  render() {
    const themeColors = {
      '--theme-bright': this.state.playerOneTurn ? '#00aaff' : '#ff9900',
      '--theme-dark': this.state.playerOneTurn ? '#0099e5' : '#e58a00',
    };
    return (
      <div className="outer" style={themeColors}>
        <div className="container">
          <div className="display-count">
            <h1 className="count">{this.state.count}</h1>
            <ProgressBar progress={this.state.count / 100} />
          </div>
          <Inputs values={inputs} onPress={this::this.turn} />
        </div>
        {!this.state.started ?
          <div className="popup popup-start">
            <div className="popup-inner">
              <h1>count to 100</h1>
              <h2>Get a friend (if you have one). When you start, take turns adding a number to the total. Whoever adds the number that pushes the total to 100, wins!</h2>
              <button onClick={this::this.start} className="popup-cta">Start</button>
            </div>
          </div>
          : null
        }
        {this.state.winner !== false ?
          <div className="popup popup-start">
            <div className="popup-inner">
              <h1>
                {
                  this.state.winner === null ?
                    `Uh oh... someone went over! Tie!` :
                    `Player ${this.state.winner} won! Good job!`
                }
                </h1>
              <h2>
                {
                  this.state.winner === null ?
                    `Why did you do that? How did you do that? Did you miss click? What a waste of time...` :
                    `Oh uh, you, the other guy, you did OK too, I guess.`
                }
              </h2>
              <button onClick={this::this.start} className="popup-cta">Play Again</button>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}