import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackKing from 'shared/assets/img/figures/black-king.png';
import whiteKing from 'shared/assets/img/figures/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackKing : whiteKing;
        this.name = FigureNames.KING;
    }
}
