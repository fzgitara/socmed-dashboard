import { GET_ALBUMS_SUCCESS, GET_ALBUMS_PENDING, GET_ALBUMS_FAILED } from '../action-types/index'
import { ALBUMS_LIST } from '../url'
import axios from 'axios'

export const getAlbums = (userId) => {
  return dispatch => {
    dispatch(getAlbumsPending())
    axios.get(ALBUMS_LIST+'?userId='+userId).then(resp => {
      dispatch(getAlbumsSuccess(resp.data))
    }).catch(error => {
      dispatch(getAlbumsFailed(error))
    })
  }
}

const getAlbumsSuccess = (data) => ({
  type: GET_ALBUMS_SUCCESS,
  payload: data
})

const getAlbumsPending = () => ({
  type: GET_ALBUMS_PENDING
})

const getAlbumsFailed = (error) => ({
  type: GET_ALBUMS_FAILED,
  payload: error
})