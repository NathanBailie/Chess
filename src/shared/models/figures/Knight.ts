import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { type Cell } from 'shared/models/Cell';
import blackKnight from 'shared/assets/img/figures/black-knight.png';
import whiteKnight from 'shared/assets/img/figures/white-knight.png';

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackKnight : whiteKnight;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dirX = Math.abs(this.cell.x - target.x);
        const dirY = Math.abs(this.cell.y - target.y);

        return (dirX === 1 && dirY === 2) || (dirX === 2 && dirY === 1);
    }
}
