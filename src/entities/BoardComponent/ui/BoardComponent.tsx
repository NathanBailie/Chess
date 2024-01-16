import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, Fragment } from 'react';
import cls from './BoardComponent.module.scss';
import { Board } from 'shared/lib/Classes/Board';
import { CellComponent } from 'entities/CellComponent';

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
