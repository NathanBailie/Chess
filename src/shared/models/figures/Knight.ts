import { Figure, FigureNames } from './Figure';
import { Colors } from 'shared/models/Colors';
import { Cell } from 'shared/models/Cell';
import blackKnight from 'shared/assets/img/figures/black-knight.png';
import whiteKnight from 'shared/assets/img/figures/white-knight.png';

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackKnight : whiteKnight;
        this.name = FigureNames.KNIGHT;
    }
}
