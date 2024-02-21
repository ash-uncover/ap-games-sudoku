import SudokuBoard from "./SudokuBoard"
import SudokuBoardTile from "./SudokuBoardTile"
import { buildGrid, checkGrid } from "./sudoku.helper"

class SudokuBoardGrid {

  /* Attributes */

  _board: SudokuBoard
  _size: number
  _tiles: SudokuBoardTile[]

  /* Constructor */

  constructor(board: SudokuBoard) {
    const grid = buildGrid(board)
    this._board = board
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

export default SudokuBoardGrid