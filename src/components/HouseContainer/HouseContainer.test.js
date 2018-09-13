import { mapStateToProps } from '../HouseContainer/HouseContainer'
import { setHouseData } from '../../actions/'

describe('mapStateToProps', () => {
  it('it should return an object with the houses array', () => {
    const mockState = {
      houseData: [{name: 'name'}]
    }

    const expected = {
      houseData: [{name: 'name'}]
    }

    const mappedProps = mapStateToProps(mockState)

    expect(expected).toEqual(mockState)

  })
})