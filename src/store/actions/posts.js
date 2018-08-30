import { GET_POSTS_SUCCESS, GET_POSTS_PENDING, GET_POSTS_FAILED } from '../action-types/index'
import { POSTS_LIST } from '../url'
import axios from 'axios'

export const getPosts = (userId) => {
  return dispatch => {
    dispatch(getPostsPending())
    let POSTS_URL = ''
    if(userId) {
      POSTS_URL = POSTS_LIST+'?userId='+userId
    } else {
      POSTS_URL = POSTS_LIST
    }
    axios.get(POSTS_URL).then(resp => {
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