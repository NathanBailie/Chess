import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackRook from 'shared/assets/img/figures/black-rook.png';
import whiteRook from 'shared/assets/img/figures/white-rook.png';

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackRook : whiteRook;
        this.name = FigureNames.ROOK;
    }
}
