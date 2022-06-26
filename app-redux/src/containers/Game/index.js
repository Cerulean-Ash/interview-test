import React from "react";
import Board from "../../components/Board";

import {selectSquare, selectMove} from '../../redux/game/index';
import {connect} from 'react-redux'


/**
 * A game of tic-tac-toe.
 */
class Game extends React.Component {


    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];


        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.props.jumpToMove(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (this.props.winner) {
            status = "Winner: " + this.props.winner;
        } else {
            status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.props.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        winner: state.game.winner,
        xIsNext: state.game.xIsNext,
        history: state.game.history,
        stepNumber: state.game.stepNumber
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: squareNumber => dispatch(selectSquare(squareNumber)),
        jumpToMove: moveNumber => dispatch(selectMove(moveNumber)),


    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);