import React, { Component } from 'react';
import Board from '../components/Board';
import Utils from '../utils/Utils';
import './Game.css';
import {Row, Grid} from 'react-bootstrap';

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };

        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true
        });
    }

    handleSquareClick(index) {
        if (this.state.squares[index] || Utils.calculateWinner(this.state.squares) || this.isDraw()) {
            return;
        }
        const squaresCopy = this.state.squares.slice();
        squaresCopy[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squaresCopy});
        this.setState({xIsNext: !this.state.xIsNext});
    }

    nextPlayer() {
        let result = 'Next Player: ';
        if (Utils.calculateWinner(this.state.squares)) {
            result = 'Winner: ' + (this.state.xIsNext ? 'O' : 'X');
        } else if (this.isDraw()){
            result = 'Draw!'
        }  else {
            if (!this.state.xIsNext) {
                result = result + 'O';
            } else {
                result = result + 'X';
            }
        }
        return result;
    }

    isDraw() {
        let result = true;
        this.state.squares.forEach((item) => {
            if (!item) {
                result = false
            }
        });
        return result;
    }

    render() {
        const nextPlayer = this.nextPlayer();
        return (
            <Grid>
                <Row className="game-grid">
                    {nextPlayer}
                </Row>
                <div className="game">
                    <div className="game-grid">
                        <Row>
                            <Board squares={this.state.squares} onClick={this.handleSquareClick}/>
                        </Row>
                    </div>
                    <div>
                        <Row className="game-grid">
                            <button onClick={this.resetGame}>Reset</button>
                        </Row>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default Game;