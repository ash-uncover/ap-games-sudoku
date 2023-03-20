import { ArrayUtils } from '@uncover/js-utils'
import { GameBoardTileStates } from '../../../store/game/game.state'

const SudokuHelper: any = {}

SudokuHelper.buildGrid = (gridRaw: string) => {
  if (!gridRaw) {
    throw new Error('grid data cannot be empty')
  }
  if (!SudokuHelper.checkGridFormat(gridRaw)) {
    throw new Error('grid data is invalid')
  }

  const square = Math.sqrt(gridRaw.length)

  const result = []
  for (let i = 0; i < square; i++) {
    result.push([])
  }
  for (let i = 0; i < gridRaw.length; i++) {
    const v = gridRaw.charAt(i)
    const x = Math.floor(i / square)
    result[x].push(v)
  }
  return result
}

SudokuHelper.checkGrid = (gridRaw: string) => {
  const grid = SudokuHelper.buildGrid(gridRaw)

  const size = grid.length
  const square = Math.sqrt(size)
  const rows = []
  const cols = []
  const subs = []
  for (let i = 0; i < size; i++) {
    rows.push([])
    cols.push([])
    subs.push([])
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rows[i].push(grid[i][j])
      cols[i].push(grid[j][i])
      const subIndex = Math.floor(i / square) * square + Math.floor(j / square)
      subs[subIndex].push(grid[i][j])
    }
  }

  return [
    ...rows,
    ...cols,
    ...subs
  ].every(SudokuHelper.checkArray)
}

SudokuHelper.checkGridFormat = (gridRaw: string) => {
  const boardSize = Math.sqrt(gridRaw.length)
  return SudokuHelper.isSquare(gridRaw.length) && SudokuHelper.isSquare(boardSize)
}

SudokuHelper.isSquare = (value: number) => {
  const valueSquared = Math.sqrt(value)
  const valueFloored = Math.floor(valueSquared)
  return valueSquared * valueSquared === valueFloored * valueFloored
}

SudokuHelper.checkArray = (array: string[]) => {
  const values = ArrayUtils.createIntArray(array.length).map(i => String(i + 1))
  const bResult = values.every(value => array.indexOf(value) !== -1)
  return bResult
}


export default SudokuHelper