
export const fetchHouseData = async () => {
  const url = 'http://localhost:3001/api/v1/houses'
  const response = await fetch(url)
  const result = await response.json()
  return result
}

