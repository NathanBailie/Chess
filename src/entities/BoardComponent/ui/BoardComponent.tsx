import { classNames } from 'shared/lib/classNames/classNames';
import React, { useEffect, useState } from 'react';
import { CellComponent } from 'entities/CellComponent';
import { type Board } from 'shared/models/Board';
import cls from './BoardComponent.module.scss';
import { type Cell } from 'shared/models/Cell';
import { type Player } from 'shared/models/Player';

interface BoardComponentProps {
    className?: string
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    togglePlayer: () => void
}

export const BoardComponent = (props: BoardComponentProps) => {
    const { className, board, setBoard, currentPlayer, togglePlayer } = props;
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells()
    }, [selectedCell]);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            togglePlayer()
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    const content = board.cells.map((row, rowId) => {
        return (
            <React.Fragment key={rowId}>
                {
                    row.map((cell) => (
                        <CellComponent
                            key={cell.id}
                            cell={cell}
                            cellColor={cell.color}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            click={click}
                        />
                    ))
                }
            </React.Fragment>
        )
    })

    return (
        <div className={classNames(cls.BoardComponent, {}, [className])}>
            {content}
        </div>
    );
};

BoardComponent.displayName = 'Board';
