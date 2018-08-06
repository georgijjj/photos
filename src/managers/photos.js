import ENDPOINTS from '../api'

export const getPhotos = async (page, perPage) => {
  const answer = await fetch(ENDPOINTS.GET_PHOTOS_LIST(page, perPage))

  const count = answer.headers.map['x-total'][0]
  const data = await answer.json()

  return { count, data }
}
