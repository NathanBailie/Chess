import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Cell } from 'shared/models/Cell';
import cls from './CellComponent.module.scss';

interface CellComponentProps {
    cellColor: string
    cell: Cell
    selected: boolean
    click: (cell: Cell) => void
}

export const CellComponent = memo((props: CellComponentProps) => {
    const { cellColor, cell, selected, click } = props;
    const selectedClass = selected ? 'selected' : '';

    return (
        <div className={classNames(cls.CellComponent, {}, [cellColor, selectedClass])}
            onClick={() => { click(cell) }}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    );
});

CellComponent.displayName = 'CellComponent';
