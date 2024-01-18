import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackBishop from 'shared/assets/img/figures/black-bishop.png';
import whiteBishop from 'shared/assets/img/figures/white-bishop.png';

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackBishop : whiteBishop;
        this.name = FigureNames.BISHOP;
    }
}
