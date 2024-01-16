import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CellComponent.module.scss';
import { Cell } from 'shared/lib/Classes/Cell';

interface CellComponentProps {
    cellColor: string
    cell: Cell
}

export const CellComponent = memo((props: CellComponentProps) => {
    const { cellColor, cell } = props;

    return (
        <div className={classNames(cls.CellComponent, {}, [cellColor])}>

        </div>
    );
});

CellComponent.displayName = 'CellComponent';
