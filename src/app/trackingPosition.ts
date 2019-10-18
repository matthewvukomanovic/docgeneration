import { Coordinate } from './coordinate';

export class TrackingPosition {
  readonly currentPosition: Coordinate = new Coordinate({row: 1,column: 1});
  readonly usedPositions: Coordinate = new Coordinate({row: 0,column: 0});

  updateCurrentPosition(row: number = 0, column: number = 0) {
    this.currentPosition.row += row;
    this.currentPosition.column += column;
  }

  updateUsedPositions(row: number = 0, column: number = 0) {
    if (this.usedPositions.row < row) {
      this.usedPositions.row = row;
    }
    this.usedPositions.column += column;
  }

  usePosition(row: number = 0, column: number = 0) {
    this.currentPosition.column += column;
    this.updateUsedPositions(row, column);
  }

  applyCurrentAndUsed() {
    this.currentPosition.row += this.usedPositions.row;
    this.currentPosition.column -= this.usedPositions.column;
    this.usedPositions.row = 0;
    this.usedPositions.column = 0;
  }

}
