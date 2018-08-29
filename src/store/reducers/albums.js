import { GET_ALBUMS_SUCCESS, GET_ALBUMS_PENDING, GET_ALBUMS_FAILED } from '../action-types/index'

const initialState = {
  loading: false,
  data: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_ALBUMS_PENDING:
    return {
      ...state,
      loading: true
    }
  case GET_ALBUMS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case GET_ALBUMS_FAILED:
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
