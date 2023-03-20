export interface GameState {
  size: number

  status: GameStatus

  startTime: number
  endTime: number

  board: GameBoard
  grids: GameBoardGrids
  tiles: GameBoardTiles
}

export type GameStatus =
  'GAME_NOT_STARTED' |
  'GAME_LOADING' |
  'GAME_READY' |
  'GAME_ON_GOING' |
  'GAME_ENDED_VICTORY' |
  'GAME_ENDED_DEFEAT'
export const GameStatuses: {
  GAME_NOT_STARTED: GameStatus
  GAME_LOADING: GameStatus
  GAME_READY: GameStatus
  GAME_ON_GOING: GameStatus
  GAME_ENDED_VICTORY: GameStatus
  GAME_ENDED_DEFEAT: GameStatus
} = {
  GAME_NOT_STARTED: 'GAME_NOT_STARTED',
  GAME_LOADING: 'GAME_LOADING',
  GAME_READY: 'GAME_READY',
  GAME_ON_GOING: 'GAME_ON_GOING',
  GAME_ENDED_VICTORY: 'GAME_ENDED_VICTORY',
  GAME_ENDED_DEFEAT: 'GAME_ENDED_DEFEAT'
}

export interface GameBoard {
  grids: GameBoardGrid[]
}

export interface GameBoardGrid {
  tiles: GameBoardTile[]
}

export interface GameBoardTile {
  value: number | null
  state: GameBoardTileState
}

export type GameBoardTileState =
  'initial' |
  'empty' |
  'default' |
  'conflict' |
  'success'

export const GameBoardTileStates: {
  INITIAL: GameBoardTileState
  EMPTY: GameBoardTileState
  DEFAULT: GameBoardTileState
  CONFLICT: GameBoardTileState
  SUCCESS: GameBoardTileState
} = {
  INITIAL: 'initial',
  EMPTY: 'empty',
  DEFAULT: 'default',
  CONFLICT: 'conflict',
  SUCCESS: 'success',
}

export interface GameBoardGrids {
  [key: string]: GameBoardGrid
}

export interface GameBoardTiles {
  [key: string]: GameBoardTile
}