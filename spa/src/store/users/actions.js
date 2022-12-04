import { getUser, getUsers } from '../../api'
import {
  addUsersAction,
  fetchSuccessAction,
  fetchErrorAction,
  fetchStartAction,
  getUserAction,
} from './usersReducer'

export const fetchUser = (id) => async (dispatch) => {
  dispatch(fetchStartAction())
  try {
    const user = await getUser(id)
    dispatch(getUserAction(user))
    dispatch(fetchSuccessAction())
  } catch (e) {
    dispatch(fetchErrorAction(e.message))
  }
}

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchStartAction())
  try {
    const users = await getUsers()
    dispatch(addUsersAction(users))
    dispatch(fetchSuccessAction())
  } catch (e) {
    dispatch(fetchErrorAction(e.message))
  }
}
