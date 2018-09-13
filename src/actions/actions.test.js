import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of SET_HOUSE_DATA', () => {
    const houseData = [{}]

    const expectedAction = {
      type: 'SET_HOUSE_DATA',
      houseData
    }

    const result = actions.setHouseData(houseData)

    expect(result).toEqual(expectedAction)
  })
})