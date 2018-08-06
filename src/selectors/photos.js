import * as R from 'ramda'

const getById = R.path(['photos', 'byId'])

const getAllIds = R.path(['photos', 'allIds'])

export const getPhotos = R.converge((byId, ids) => R.map(x => byId[x])(ids), [
  getById,
  getAllIds,
])

export const getPhotosIsLoading = R.path(['photos', 'isLoading'])

const getSelectedPhotoId = R.path(['photos', 'selectedPhoto'])

export const getSelectedPhoto = R.converge(
  (all, selected) => R.prop(selected)(all),
  [getById, getSelectedPhotoId]
)

export const getPhotosCount = R.path(['photos', 'count'])

export const getPhotosPage = R.path(['photos', 'page'])

export const getCountInPage = R.always(20)
