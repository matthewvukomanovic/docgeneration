export class Coordinate {
  row?: number;
  column?: number;

  constructor(data?: {row:number, column:number}) { 
    if( data != null) {
      this.row = data.row;
      this.column = data.column;
    }
  }

  public clone() : Coordinate {
    let coord = new Coordinate ();
    coord.row = this.row;
    coord.column = this.column;
    return coord;
  }
}
