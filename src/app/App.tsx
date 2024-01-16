import { BoardComponent } from 'entities/BoardComponent';
import { useEffect, useState } from 'react';
import { Board } from 'shared/lib/Classes/Board';

const App = () => {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }
    return (
        <div className="app">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
        </div>
    )
}

export default App;
