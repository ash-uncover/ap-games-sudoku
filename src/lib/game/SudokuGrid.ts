import { buildGrid, checkGrid } from "./sudoku.helper"

class SudokuGrid {

  /* Attributes */

  _gridRaw: string

  _size: number

  _rows: string[][]
  _cols: string[][]
  _grids: string[][]

  /* Constructor */

  constructor(gridRaw: string) {
    const grid = buildGrid(gridRaw)
    this._gridRaw = gridRaw
    this._size = grid.size
    this._rows = grid.rows
    this._cols = grid.cols
    this._grids = grid.grids
  }

  /* Methods */

  // Getter & Setters //

  get rows() {
    return this._rows
  }

  get cols() {
    return this._cols
  }

  get grids() {
    return this._grids
  }

  // Other Methods //

  check () {
    checkGrid(this._gridRaw)
  }
}

export default SudokuGrid