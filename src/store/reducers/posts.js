import { GET_POSTS_SUCCESS, GET_POSTS_PENDING, GET_POSTS_FAILED } from '../action-types/index'

const initialState = {
  loading: false,
  data: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_POSTS_PENDING:
    return {
      ...state,
      loading: true
    }
  case GET_POSTS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case GET_POSTS_FAILED:
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
