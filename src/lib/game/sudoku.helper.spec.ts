import * as SudokuHelper from "./sudoku.helper"

describe('sudiku.helper', () => {

  /* TEST DATA */

  /* TEST SETUP */

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()

  })

  afterEach(() => {
  })

  /* TEST CASES */

  // checkGrid //

  describe('checkGrid', () => {

    test('when the grid is valid', async () => {
      // Declaration
      const gridRaw = '3412123443212143'
      // Execution
      const bResult = SudokuHelper.checkGrid(gridRaw)
      // Assertion
      expect(bResult).toBe(true)
    })

    test('when the grid is not valid', async () => {
      // Declaration
      const gridRaw = '3412123443212134'
      // Execution
      const bResult = SudokuHelper.checkGrid(gridRaw)
      // Assertion
      expect(bResult).toBe(false)
    })
  })

  // buildGrid //

  describe('buildGrid', () => {

    test('builds the grid', async () => {
      // Declaration
      const gridRaw = '1234567890abcdef'
      // Execution
      const aResult = SudokuHelper.buildGrid(gridRaw)
      // Assertion
      const iExpectedSize = 2
      const aExpectedRows = [
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '0', 'a', 'b'],
        ['c', 'd', 'e', 'f'],
      ]
      const aExpectedCols = [
        ['1', '5', '9', 'c'],
        ['2', '6', '0', 'd'],
        ['3', '7', 'a', 'e'],
        ['4', '9', 'b', 'f'],
      ]
      const aExpectedGrids = [
        ['1', '2', '5', '6'],
        ['3', '4', '7', '8'],
        ['9', '0', 'c', 'd'],
        ['a', 'b', 'e', 'f'],
      ]
      expect(aResult.size).toEqual(iExpectedSize)
      expect(aResult.rows).toEqual(aExpectedRows)
      expect(aResult.cols).toEqual(aExpectedCols)
      expect(aResult.grids).toEqual(aExpectedGrids)
    })
  })

  // checkGridFormat //

  describe('checkGridFormat', () => {

    test('when length is not a double square', async () => {
      // Declaration
      const value = '123456789'
      // Execution
      const bResult = SudokuHelper.checkGridFormat(value)
      // Assertion
      expect(bResult).toBe(false)
    })

    test('when length is a double square', async () => {
      // Declaration
      const value = '123456789abcdefg'
      // Execution
      const bResult = SudokuHelper.checkGridFormat(value)
      // Assertion
      expect(bResult).toBe(true)
    })
  })

  // isSquare //

  describe('isSquare', () => {

    test('when number is not a square', async () => {
      // Declaration
      const value = 8
      // Execution
      const bResult = SudokuHelper.isSquare(value)
      // Assertion
      expect(bResult).toBe(false)
    })

    test('when number is a square', async () => {
      // Declaration
      const value = 9
      // Execution
      const bResult = SudokuHelper.isSquare(value)
      // Assertion
      expect(bResult).toBe(true)
    })
  })

  // checkArray //

  describe('checkArray', () => {

    test('when array contains dupplicated element', async () => {
      // Declaration
      const array = ['1', '1']
      // Execution
      const bResult = SudokuHelper.checkArray(array)
      // Assertion
      expect(bResult).toBe(false)
    })

    test('when array does not contain the correct elements', async () => {
      // Declaration
      const array = ['1', '4']
      // Execution
      const bResult = SudokuHelper.checkArray(array)
      // Assertion
      expect(bResult).toBe(false)
    })

    test('when array contains the correct elements', async () => {
      // Declaration
      const array = ['2', '1']
      // Execution
      const bResult = SudokuHelper.checkArray(array)
      // Assertion
      expect(bResult).toBe(true)
    })
  })
})
