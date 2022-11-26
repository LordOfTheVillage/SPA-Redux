const ADD_USERS = 'ADD_USERS'
const GET_USER = 'GET_USER'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_START = 'FETCH_START'
const defaultState = {
  users: [],
  activeUser: {},
  loading: false,
  error: null,
}
const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, loading: false, error: true }
    case ADD_USERS:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...action.payload],
      }
    case GET_USER:
      return {
        ...state,
        loading: false,
        error: null,
        activeUser: action.payload,
      }
    default:
      return state
  }
}
export const addUsersAction = (payload) => ({ type: ADD_USERS, payload })
export const getUserAction = (payload) => ({ type: GET_USER, payload })
export default usersReducer
