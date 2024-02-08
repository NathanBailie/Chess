import { classNames } from 'shared/lib/classNames/classNames';
import { type Cell } from 'shared/models/Cell';
import cls from './CellComponent.module.scss';

interface CellComponentProps {
    cellColor: string
    cell: Cell
    selected: boolean
    click: (cell: Cell) => void
}

export const CellComponent = (props: CellComponentProps) => {
    const { cellColor, cell, selected, click } = props;
    const selectedClass = selected ? 'selected' : '';

    return (
        <div className={classNames(cls.CellComponent, {}, [cellColor, selectedClass])}
            onClick={() => { click(cell) }}
            style={{ background: cell.available && cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && < div className='available' />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div >
    );
};

CellComponent.displayName = 'CellComponent';
