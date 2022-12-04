const ADD_USERS = 'ADD_USERS'
const GET_USER = 'GET_USER'
const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
const FETCH_USER_START = 'FETCH_USER_START'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const defaultState = {
  users: [],
  loading: false,
  error: null,
}
const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, loading: true }
    case FETCH_USER_ERROR:
      return { ...state, loading: false, error: true }
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, error: false }
    case ADD_USERS:
      return {
        ...state,
        users: [...action.payload],
      }
    case GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    default:
      return state
  }
}
export const addUsersAction = (payload) => ({ type: ADD_USERS, payload })
export const getUserAction = (payload) => ({ type: GET_USER, payload })
export const fetchErrorAction = (payload) => ({
  type: FETCH_USER_ERROR,
  payload,
})
export const fetchStartAction = () => ({ type: FETCH_USER_START })
export const fetchSuccessAction = () => ({ type: FETCH_USER_SUCCESS })
export default usersReducer
