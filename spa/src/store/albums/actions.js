import { getAlbum, getAlbums } from '../../api'
import {
  addAlbumsAction,
  fetchErrorAction,
  fetchStartAction,
  fetchSuccessAction,
  getAlbumAction,
} from './albumsReducer'

export const fetchAlbum = (id) => async (dispatch) => {
  dispatch(fetchStartAction())
  try {
    const album = await getAlbum(id)
    dispatch(getAlbumAction(album))
    dispatch(fetchSuccessAction())
  } catch (e) {
    dispatch(fetchErrorAction(e.message))
  }
}

export const fetchAlbums = () => async (dispatch) => {
  dispatch(fetchStartAction())
  try {
    const albums = await getAlbums()
    dispatch(addAlbumsAction(albums))
    dispatch(fetchSuccessAction())
  } catch (e) {
    dispatch(fetchErrorAction(e.message))
  }
}
