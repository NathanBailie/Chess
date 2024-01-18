import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackPawn from 'shared/assets/img/figures/black-pawn.png';
import whitePawn from 'shared/assets/img/figures/white-pawn.png';

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackPawn : whitePawn;
        this.name = FigureNames.PAWN;
    }
}
