import { BoardComponent } from 'entities/BoardComponent';
import { useEffect, useState } from 'react';
import { Board } from 'shared/models/Board';
import { Colors } from 'shared/models/Colors';
import { Player } from 'shared/models/Player';

const App = () => {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    function togglePlayer(): void {
        const player = currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer;

        setCurrentPlayer(player);
    }

    return (
        <div className="app">
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                togglePlayer={togglePlayer}
            />
        </div>
    )
}

export default App;
