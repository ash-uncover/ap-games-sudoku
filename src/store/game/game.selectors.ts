import { RootState } from 'store/state'

export const base = (state: RootState) => state.game

export const status = (state: RootState) => base(state).status

export const board = (state: RootState) => base(state).board
export const boardTiles = (state: RootState) => board(state)?.tiles
export const boardElements = (state: RootState) => board(state)?.elements

export const tiles = (state: RootState) => base(state).tiles
export const tile = (tileId: string) => (state: RootState) => tiles(state)[tileId]

export const elements = (state: RootState) => base(state).elements
export const element = (elementId: string) => (state: RootState) => elements(state)[elementId]

const GameSelectors = {
  status,

  board,
  boardTiles,
  boardElements,

  tiles,
  tile,

  elements,
  element,
}

export default GameSelectors
