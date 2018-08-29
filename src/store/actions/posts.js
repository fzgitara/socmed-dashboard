import { GET_POSTS_SUCCESS, GET_POSTS_PENDING, GET_POSTS_FAILED } from '../action-types/index'
import { POSTS_LIST } from '../url'
import axios from 'axios'

export const getPosts = (userId) => {
  return dispatch => {
    dispatch(getPostsPending())
    axios.get(POSTS_LIST+'?userId='+userId).then(resp => {
      dispatch(getPostsSuccess(resp.data))
    }).catch(error => {
      dispatch(getPostsFailed(error))
    })
  }
}

const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  payload: data
})

const getPostsPending = () => ({
  type: GET_POSTS_PENDING
})

const getPostsFailed = (error) => ({
  type: GET_POSTS_FAILED,
  payload: error
})