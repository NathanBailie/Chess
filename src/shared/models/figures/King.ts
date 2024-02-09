import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { type Cell } from 'shared/models/Cell';
import blackKing from 'shared/assets/img/figures/black-king.png';
import whiteKing from 'shared/assets/img/figures/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackKing : whiteKing;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dirX = Math.abs(this.cell.x - target.x);
        const dirY = Math.abs(this.cell.y - target.y);

        if (this.cell.isVerticalEmpty(target) && dirY <= 1) {
            return true;
        }

        if (this.cell.isHorizontalEmpty(target) && dirX <= 1) {
            return true;
        }

        if (this.cell.isDiagonalEmpty(target) && dirY <= 1 && dirX <= 1) {
            return true;
        }

        return false;
    }
}
