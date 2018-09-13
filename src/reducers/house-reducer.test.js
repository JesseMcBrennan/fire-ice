import { houseReducer } from './house-reducer'
import * as actions from '../actions';


describe('houseReducer', () => {
  it('should return the intitial state', () => {
    const expected = []

    const result = houseReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the payload of houses', () => {
    const mockHouseData = [{url: "https://www.anapioficeandfire.com/api/houses/81", name: "House Corbray of Heart's Home", region: "", coatOfArms: "Three black ravens in flight, holding three red he…ble, each clutching in their claws a heart gules)", words: ""}]

    const expected = mockHouseData
    const result = houseReducer([], actions.setHouseData(mockHouseData))

    expect(expected).toEqual(result)
  })
})
