import { GET_PHOTOS_SUCCESS, GET_PHOTOS_PENDING, GET_PHOTOS_FAILED } from '../action-types/index'
import { PHOTOS_LIST } from '../url'
import axios from 'axios'

export const getPhotos = (userId, albumId) => {
  return dispatch => {
    dispatch(getPhotosPending())
    axios.get(PHOTOS_LIST+'?userId='+userId+'?albumId='+albumId).then(resp => {
      dispatch(getPhotosSuccess(resp.data))
    }).catch(error => {
      dispatch(getPhotosFailed(error))
    })
  }
}

const getPhotosSuccess = (data) => ({
  type: GET_PHOTOS_SUCCESS,
  payload: data
})

const getPhotosPending = () => ({
  type: GET_PHOTOS_PENDING
})

const getPhotosFailed = (error) => ({
  type: GET_PHOTOS_FAILED,
  payload: error
})