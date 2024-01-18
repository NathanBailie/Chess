import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackQueen from 'shared/assets/img/figures/black-queen.png';
import whiteQueen from 'shared/assets/img/figures/white-queen.png';

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackQueen : whiteQueen;
        this.name = FigureNames.QUEEN;
    }
}
