import { GET_COMMENTS_SUCCESS, GET_COMMENTS_PENDING, GET_COMMENTS_FAILED } from '../action-types/index'

const initialState = {
  loading: false,
  data: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_COMMENTS_PENDING:
    return {
      ...state,
      loading: true
    }
  case GET_COMMENTS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case GET_COMMENTS_FAILED:
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
