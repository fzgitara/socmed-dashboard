import { GET_COMMENTS_SUCCESS, GET_COMMENTS_PENDING, GET_COMMENTS_FAILED } from '../action-types/index'
import { COMMENTS_LIST } from '../url'
import axios from 'axios'

export const getComments = (postId) => {
  return dispatch => {
    dispatch(getCommentsPending())
    axios.get(COMMENTS_LIST+'?postId='+postId).then(resp => {
      dispatch(getCommentsSuccess(resp.data))
    }).catch(error => {
      dispatch(getCommentsFailed(error))
    })
  }
}

const getCommentsSuccess = (data) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: data
})

const getCommentsPending = () => ({
  type: GET_COMMENTS_PENDING
})

const getCommentsFailed = (error) => ({
  type: GET_COMMENTS_FAILED,
  payload: error
})