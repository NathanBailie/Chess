import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { type Cell } from 'shared/models/Cell';
import blackPawn from 'shared/assets/img/figures/black-pawn.png';
import whitePawn from 'shared/assets/img/figures/white-pawn.png';

export class Pawn extends Figure {
    isFirstMove: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackPawn : whitePawn;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dir = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstMoveDir = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + dir || this.isFirstMove &&
            (target.y === this.cell.y + firstMoveDir)) &&
            target.x === this.cell.x &&
            this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        if (target.y === this.cell.y + dir &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstMove = false;
    }
}
