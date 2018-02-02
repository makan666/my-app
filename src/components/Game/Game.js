import React from 'react'
import Board from '../Board/Board'
import PropTypes from 'prop-types'
import './Game.css'

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares : Array(81).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7],
      [4, 5, 6, 7, 8],

      [9, 10, 11, 12, 13],
      [10, 11, 12, 13, 14],
      [11, 12, 13, 14, 15],
      [12, 13, 14, 15, 16],
      [13, 14, 15, 16, 17],

      [18, 19, 20, 21, 22],
      [19, 20, 21, 22, 23],
      [20, 21, 22, 23, 24],
      [21, 22, 23, 24, 25],
      [22, 23, 24, 25, 26],

      [27, 28, 29, 30, 31],
      [28, 29, 30, 31, 32],
      [29, 30, 31, 32, 33],
      [30, 31, 32, 33, 34],
      [31, 32, 33, 34, 35],

      [36, 37, 38, 39, 40],
      [37, 38, 39, 40, 41],
      [38, 39, 40, 41, 42],
      [39, 40, 41, 42, 43],
      [40, 41, 42, 43, 44],

      [45, 46, 47, 48, 49],
      [46, 47, 48, 49, 50],
      [47, 48, 49, 50, 51],
      [48, 49, 50, 51, 52],
      [49, 50, 51, 52, 53],

      [54, 55, 56, 57, 58],
      [55, 56, 57, 58, 59],
      [56, 57, 58, 59, 60],
      [57, 58, 59, 60, 61],
      [58, 59, 60, 61, 62],

      [63, 64, 65, 66, 67],
      [64, 65, 66, 67, 68],
      [65, 66, 67, 68, 69],
      [66, 67, 68, 69, 70],
      [67, 68, 69, 70, 71],

      [72, 73, 74, 75, 76],
      [73, 74, 75, 76, 77],
      [74, 75, 76, 77, 78],
      [75, 76, 77, 78, 79],
      [76, 77, 78, 79, 80],

      [0, 9, 18, 27, 36],
      [9, 18, 27, 36, 45],
      [18, 27, 36, 45, 54],
      [27, 36, 45, 54, 63],
      [36, 45, 54, 63, 72],

      [1, 10, 19, 28, 37],
      [10, 19, 28, 37, 46],
      [19, 28, 37, 46, 55],
      [28, 37, 46, 55, 64],
      [37, 46, 55, 64, 73],

      [2, 11, 20, 29, 38],
      [11, 20, 29, 38, 47],
      [20, 29, 38, 47, 56],
      [29, 38, 47, 56, 65],
      [38, 47, 56, 65, 74],

      [3, 12, 21, 30, 39],
      [12, 21, 30, 39, 48],
      [21, 30, 39, 48, 57],
      [30, 39, 48, 57, 66],
      [39, 48, 57, 66, 75],

      [4, 13, 22, 31, 40],
      [13, 22, 31, 40, 49],
      [22, 31, 40, 49, 58],
      [31, 40, 49, 58, 67],
      [40, 49, 58, 67, 76],

      [5, 14, 23, 32, 41],
      [14, 23, 32, 41, 50],
      [23, 32, 41, 50, 59],
      [32, 41, 50, 59, 68],
      [41, 50, 59, 68, 77],

      [6, 15, 24, 33, 42],
      [15, 24, 33, 42, 51],
      [24, 33, 42, 51, 60],
      [33, 42, 51, 60, 69],
      [42, 51, 60, 69, 78],

      [7, 16, 25, 34, 43],
      [16, 25, 34, 43, 52],
      [25, 34, 43, 52, 61],
      [34, 43, 52, 61, 70],
      [43, 52, 61, 70, 79],

      [8, 17, 26, 35, 44],
      [17, 26, 35, 44, 53],
      [26, 35, 44, 53, 62],
      [35, 44, 53, 62, 71],
      [44, 53, 62, 71, 80],

      [0, 10, 20, 30, 40],
      [10, 20, 30, 40, 50],
      [20, 30, 40, 50, 60],
      [30, 40, 50, 60, 70],
      [40, 50, 60, 70, 80],

      [1, 11, 21, 31, 41],
      [11, 21, 31, 41, 51],
      [21, 31, 41, 51, 61],
      [31, 41, 51, 61, 71],

      [2, 12, 22, 32, 42],
      [12, 22, 32, 42, 52],
      [22, 32, 42, 52, 62],

      [3, 13, 23, 33, 43],
      [13, 23, 33, 43, 53],

      [4, 14, 24, 34, 44],

      [9, 19, 29, 39, 49],
      [19, 29, 39, 49, 59],
      [29, 39, 49, 59, 69],
      [39, 49, 59, 69, 79],

      [18, 28, 38, 48, 58],
      [28, 38, 48, 58, 68],
      [38, 48, 58, 68, 78],

      [27, 37, 47, 57, 67],
      [37, 47, 57, 67, 77],

      [36, 46, 56, 66, 76],

      [8, 16, 24, 32, 40],
      [16, 24, 32, 40, 48],
      [24, 32, 40, 48, 56],
      [32, 40, 48, 56, 64],
      [40, 48, 56, 64, 72],

      [7, 15, 23, 31, 39],
      [15, 23, 31, 39, 47],
      [23, 31, 39, 47, 55],
      [31, 39, 47, 55, 63],

      [6, 14, 22, 30, 38],
      [14, 22, 30, 38, 46],
      [22, 30, 38, 46, 54],

      [5, 13, 21, 29, 37],
      [13, 21, 29, 37, 45],

      [4, 12, 20, 28, 36],

      [17, 25, 33, 41, 49],
      [25, 33, 41, 49, 57],
      [33, 41, 49, 57, 65],
      [41, 49, 57, 65, 73],

      [26, 34, 42, 50, 58],
      [34, 42, 50, 58, 66],
      [42, 50, 58, 66, 74],

      [35, 43, 51, 59, 67],
      [43, 51, 59, 67, 75],

      [44, 52, 60, 68, 76],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e] = lines[i];
      if (squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] === squares[d] &&
        squares[a] === squares[e]) {
        return squares[a]
      }
    }
    return null;
  }

  handleClick(i) {
    console.log(i)
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? '●' : '○';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'Winner：' + winner;
    } else {
      status = 'Next player：' + (this.state.xIsNext ? 'X' : '0')
    }

    return (
      <div>
        <div>This is a {this.props.text}</div>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  text: PropTypes.string
}


export default Game
