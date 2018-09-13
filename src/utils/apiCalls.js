// import { houseDataCleaner } from './dataCleaner'

// // export const fetchHouseData = async () => {
// //   const url = 'http://localhost:3001/api/v1/houses'
// //   const response = await fetch(url)
// //   const result = await response.json()
// //   return result
// // }


export const fetchSwornMembers = async (id) => {
  // const url = `http://localhost:3001/api/v1/character/:${id}`
  const url = `http://localhost:3001/api/v1/character/:1`
  const response = await fetch(url)
  const result = await response.json()
  return result
}

