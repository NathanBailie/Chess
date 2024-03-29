import { type Cell } from '../Cell';
import { type Colors } from '../Colors';
import type logo from 'shared/assets/img/figures/black-king.png';

export enum FigureNames {
    FIGURE = 'Figure',
    KING = 'King',
    QUEEN = 'Queen',
    ROOK = 'Rook',
    BISHOP = 'Bishop',
    KNIGHT = 'Knight',
    PAWN = 'Pawn'
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false;
        }

        if (target.figure?.name === FigureNames.KING) {
            return false;
        }

        return true;
    }

    moveFigure(target: Cell) {

    }
}
