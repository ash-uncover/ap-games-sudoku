import { GameBoardTileState } from "store/game/game.state"
import SudokuBoardGrid from "./SudokuBoardGrid"
import { buildGrid, checkGrid } from "./sudoku.helper"

class SudokuBoardTile {

  /* Attributes */

  _grid: SudokuBoardGrid

  _index: number

  _state: GameBoardTileState
  _value: string

  /* Constructor */

  constructor(
    grid: SudokuBoardGrid,
    index: number,
    state: GameBoardTileState,
    value?: string
  ) {
    this._grid = grid
    this._index = index
    this._state = state
    this._value = value
  }

  /* Methods */

  // Getter & Setters //

  get grid() {
    return this._grid
  }

  get index() {
    return this._index
  }

  get state() {
    return this._state
  }
  set state(state) {
    this._state = state
  }

  get value() {
    return this._value
  }
  set value(value) {
    this._value = value
  }

  // Other Methods //
}

export default SudokuBoardTile