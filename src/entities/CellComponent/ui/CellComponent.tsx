import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Cell } from 'shared/models/Cell';
import cls from './CellComponent.module.scss';

interface CellComponentProps {
    cellColor: string
    cell: Cell
}

export const CellComponent = memo((props: CellComponentProps) => {
    const { cellColor, cell } = props;

    return (
        <div className={classNames(cls.CellComponent, {}, [cellColor])}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    );
});

CellComponent.displayName = 'CellComponent';
