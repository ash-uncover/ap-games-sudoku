import Logger from '@uncover/js-utils-logger'
const LOGGER = new Logger('CONFIG')

// Default hard-coded values
const CONFIG: {
  AP_GAMES_SUDOKU_PLUGIN: string
  AP_GAMES_SUDOKU_PUBLIC: string
  AP_GAMES_SUDOKU_ENVIRONMENT: string
} = {
  AP_GAMES_SUDOKU_PLUGIN: 'http://localhost:8081/plugin.json',
  AP_GAMES_SUDOKU_PUBLIC: '',
  AP_GAMES_SUDOKU_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_SUDOKU_PLUGIN) {
    CONFIG.AP_GAMES_SUDOKU_PLUGIN = process.env.AP_GAMES_SUDOKU_PLUGIN
  }
  if (process.env.AP_GAMES_SUDOKU_PUBLIC) {
    CONFIG.AP_GAMES_SUDOKU_PUBLIC = process.env.AP_GAMES_SUDOKU_PUBLIC
  }
  if (process.env.AP_GAMES_SUDOKU_ENVIRONMENT) {
    CONFIG.AP_GAMES_SUDOKU_ENVIRONMENT = process.env.AP_GAMES_SUDOKU_ENVIRONMENT
  }
} catch (error) {
  LOGGER.warn('Failed to load from process.env')
}

console.log('CONFIG')
Object.keys(CONFIG).forEach((confKey) => {
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})

export default CONFIG
