import { GET_PHOTOS_SUCCESS, GET_PHOTOS_PENDING, GET_PHOTOS_FAILED } from '../action-types/index'

const initialState = {
  loading: false,
  data: [],
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_PHOTOS_PENDING:
    return {
      ...state,
      loading: true
    }
  case GET_PHOTOS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload
    }
  case GET_PHOTOS_FAILED:
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
