import { useState } from "react";
import Button from '@mui/material/Button';
import "./tictactoe.css";
export function TicTacToe() {


    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

    // const [board,setBoard]=useState([0,1,2,3,4,5,6,7,8])
    const decideWinner = (board) => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (var i in lines) {

            const [a, b, c] = lines[i];
            // console.log(a,b,c)
            if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }

            // console.log(`winner is ${board[a]}`)
        }

        return null;

    };



    const winner = decideWinner(board);



    const draw = (board) => {
        if (!board.includes(null) && winner === null) {
            return "draw";
        }
    };
    const drawn = draw(board);



    const [isxturn, setXTurn] = useState(true);
    // const xO = isxturn ? "X" : "O";
    const handleClick = (index) => {
        if (winner === null && board[index] === null) {
            const boardCopy = ([...board]);

            boardCopy[index] = isxturn ? "X" : "O";
            setBoard(boardCopy);
            setXTurn(!isxturn);
        }
    };

    const btnstyle = {
        display: board[0] || board[1] || board[2] || board[2] || board[3] || board[4] || board[5] || board[6] || board[7] || board[8] !== null ? "none" : "block"
    }



    return (<div className="full-game">
        <div style={btnstyle} className="player-select-button">
            <Button variant="outlined" onClick={() => setXTurn(true)}>Player X</Button>
            <Button variant="outlined" onClick={() => setXTurn(false)}>Player O</Button>

        </div>
        <span className={winner || drawn ? "playerturnhide" : "playerturnshow"}>{isxturn ? <h2>X Turn🎮</h2> : <h2>O Turn🎮</h2>}</span>
        <div className="board">
            {board.map((val, index) => <GameBox val={val} key={index} onPlayerClick={() => handleClick(index)} />)}
            {/* <GameBox /> */}
        </div>
        {winner ? <h2>Winner is: 👏{winner}</h2> : ""}

        {drawn ? <h2>Match : 🤝{drawn}</h2> : ""}

        <div className="restart-btn"><Button variant="contained" onClick={() => setBoard([null, null, null, null, null, null, null, null, null])  }>Restart</Button></div>

    </div>
    );
}
function GameBox({ val, onPlayerClick }) {
    // const val="x"

    // const [val,setVal]=useState(null)
    const sytles = {
        color: val === 'X' ? "green" : "red"
    };

    return (
        <div
            onClick={() => onPlayerClick()}
            style={sytles}
            className="game-box"

        >
            {val}
        </div>
    );
}
