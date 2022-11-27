import { getUser, getUsers } from '../../api'
import { addUsersAction, getUserAction } from './usersReducer'

export const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const user = await getUser(id)
    dispatch(getUserAction(user))
  } catch (e) {
    dispatch({ type: 'FETCH_ERROR', payload: e.message })
  }
}

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const users = await getUsers()
    dispatch(addUsersAction(users))
  } catch (e) {
    dispatch({ type: 'FETCH_ERROR', payload: e.message })
  }
}
