import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { CellComponent } from 'entities/CellComponent';
import { Board } from 'shared/models/Board';
import cls from './BoardComponent.module.scss';
import { Cell } from 'shared/models/Cell';

interface BoardComponentProps {
    className?: string
    board: Board
    setBoard: (board: Board) => void
}

export const BoardComponent = memo((props: BoardComponentProps) => {
    const { className, board, setBoard } = props;
    const [selectedCell, setCelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (cell.figure) {
            setCelectedCell(cell);
        }
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
});

BoardComponent.displayName = 'Board';
