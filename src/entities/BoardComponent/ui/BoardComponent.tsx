import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { CellComponent } from 'entities/CellComponent';
import { Board } from 'shared/models/Board';
import cls from './BoardComponent.module.scss';

interface BoardComponentProps {
    className?: string
    board: Board
    setBoard: (board: Board) => void
}

export const BoardComponent = memo((props: BoardComponentProps) => {
    const { className, board, setBoard } = props;

    const content = board.cells.map((row, rowId) => {
        return (
            <React.Fragment key={rowId}>
                {
                    row.map((cell) => (
                        <CellComponent
                            key={cell.id}
                            cell={cell}
                            cellColor={cell.color}
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
