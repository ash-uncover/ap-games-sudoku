import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'

import * as BoardHelper from 'lib/game/board/board.helper'
import * as ElementHelper from 'lib/game/board/elements/element.helper'
import * as TileHelper from 'lib/game/board/tiles/tile.helper'

import { Maps, Terrains } from 'lib/data'
import { shuffleMap } from 'lib/data/map.helper'

import {
  GameState,
  GameBoard,
  GameBoardTiles,
  GameStatuses,
} from 'store/game/game.state'

import CONFIG from 'config'

// STATE //

const initialState: GameState = {
  size: 3,
  status: GameStatuses.GAME_NOT_STARTED,
  startTime: null,
  endTime: null,
  board: {
    grids: []
  },
  grids: {},
  tiles: {},
}

// REDUCERS //

interface StartGamePayload {}
const startGame: CaseReducer<GameState, PayloadAction<StartGamePayload>> = (state, action) => {
  const {} = action.payload

  const data = '000260001601075803020000000106000005495103786800000409000000050204630107900012000'
}

interface SetValuePayload {
  tileId: string
  value: number
}
const setValue:CaseReducer<GameState, PayloadAction<SetValuePayload>> = (state, action) => {
  const {
    tileId,
    value
  } = action.payload
}

const endGame: CaseReducer<GameState, PayloadAction<void>> = (state, action) => {
  Object.assign(
    state,
    initialState,
    { size: state.size }
  )
}

// SLICE //

const GameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    startGame,

    setValue,

    endGame,
  },
})

export default GameSlice
