import { GET_USERS_SUCCESS, GET_USERS_PENDING, GET_USERS_FAILED } from '../action-types'

const initialState = {
  loading: false,
  data: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_USERS_PENDING:
    return {
      ...state,
      loading: true
    }
  case GET_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case GET_USERS_FAILED:
    return {
      ...state,
      loading: false,
      error: true,
      data: action.payload
    }
  default:
    return state
  }
}
