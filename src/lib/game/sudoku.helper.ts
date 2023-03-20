import { ArrayUtils } from '@uncover/js-utils'

export const buildGrid = (gridRaw: string) => {
  if (!gridRaw) {
    throw new Error('grid data cannot be empty')
  }
  if (!checkGridFormat(gridRaw)) {
    throw new Error('grid data is invalid')
  }

  const size = Math.sqrt(gridRaw.length)
  const square = Math.sqrt(size)

  const rows = []
  const cols = []
  const grids = []
  for (let i = 0; i < size; i++) {
    rows.push([])
    cols.push([])
    grids.push([])
  }
  for (let i = 0; i < gridRaw.length; i++) {
    const v = gridRaw.charAt(i)

    const y = Math.floor(i / size)
    const x = y % size

    const z = Math.floor(x / square) * square + Math.floor(y / square)

    rows[y].push(v)
    cols[x].push(v)
    grids[z].push(v)
  }
  return {
    size: square,
    rows,
    cols,
    grids
  }
}

export const checkGrid = (gridRaw: string) => {
  const grid = buildGrid(gridRaw)
  return [
    ...grid.rows,
    ...grid.cols,
    ...grid.grids
  ].every(checkArray)
}

export const checkGridFormat = (gridRaw: string) => {
  const boardSize = Math.sqrt(gridRaw.length)
  return isSquare(gridRaw.length) && isSquare(boardSize)
}

export const isSquare = (value: number) => {
  const valueSquared = Math.sqrt(value)
  const valueFloored = Math.floor(valueSquared)
  return valueSquared * valueSquared === valueFloored * valueFloored
}

export const checkArray = (array: string[]) => {
  const values = ArrayUtils.createIntArray(array.length).map(i => String(i + 1))
  const bResult = values.every(value => array.indexOf(value) !== -1)
  return bResult
}
