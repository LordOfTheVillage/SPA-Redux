import {
  addAlbumsAction,
  getAlbumAction,
  getUserAlbumsAction,
} from './store/albums/albumsReduser'
import { addUsersAction, getUserAction } from './store/users/usersReducer'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export async function getData(url) {
  const res = await fetch(BASE_URL + url)
  return res.json()
}

export function setData(url, fn) {
  fetch(BASE_URL + url)
    .then((response) => response.json())
    .then((json) => fn(json))
}

export const setDataByURL = async (url, cb) => {
  const res = await getData(url)
  cb(res)
}

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const response = await fetch(BASE_URL + 'users/' + id)
    const user = await response.json()
    dispatch(getUserAction(user))
  } catch (e) {
    console.error(e)
    dispatch({ type: 'FETCH_ERROR', payload: e.message })
  }
}

// export const getUser = (id) => {
//   return (dispatch) => {
//     fetch(BASE_URL + 'users/' + id)
//       .then((res) => res.json())
//       .then((json) => dispatch(getUserAction(json)))
//   }
// }

// fetch(url)
//     .then(resp => {
//         if (!resp.ok) {
//             throw Error(`is not ok: ` + resp.status);
//         }
//     return resp.json();
//     })
//     .catch((err) => {
//         console.warn(err)
//     })

// fetch(BASE_URL + 'users/' + id)
// .then((res) => res.json())
// .then((json) => dispatch(getUserAction(json)))

export const getUsers = () => {
  return (dispatch) => {
    fetch(BASE_URL + 'users')
      .then((res) => res.json())
      .then((json) => dispatch(addUsersAction(json)))
  }
}

export const getAlbum = (id) => {
  return (dispatch) => {
    fetch(BASE_URL + 'albums/' + id)
      .then((res) => res.json())
      .then((json) => dispatch(getAlbumAction(json)))
  }
}

export const getAlbums = () => {
  return (dispatch) => {
    fetch(BASE_URL + 'albums')
      .then((res) => res.json())
      .then((json) => dispatch(addAlbumsAction(json)))
  }
}

export const getUserAlbums = (id) => {
  return (dispatch) => {
    fetch(BASE_URL + 'albums?userId=' + id)
      .then((res) => res.json())
      .then((json) => dispatch(getUserAlbumsAction(json)))
  }
}
