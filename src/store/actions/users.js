import { GET_USERS_SUCCESS, GET_USERS_PENDING, GET_USERS_FAILED } from '../action-types/index'
import { USERS_LIST } from '../url'
import axios from 'axios'

export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersPending())
    axios.get(USERS_LIST).then(resp => {
      dispatch(getUsersSuccess(resp.data))
    }).catch(error => {
      dispatch(getUsersFailed(error))
    })
  }
}

const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data
})

const getUsersPending = () => ({
  type: GET_USERS_PENDING
})

const getUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  payload: error
})