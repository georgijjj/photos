const ACCESS =
  '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

//client_id

const URI = 'https://api.unsplash.com/'

const ENDPOINTS = {
  GET_PHOTOS_LIST: (page, perPage) =>
    `${URI}photos/?client_id=${ACCESS}&page=${page}&per_page=${perPage}`,
}

export default ENDPOINTS
