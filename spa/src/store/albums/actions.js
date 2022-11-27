import { getAlbum, getAlbums } from '../../api'
import { addAlbumsAction, getAlbumAction } from './albumsReducer'

export const fetchAlbum = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const album = await getAlbum(id)
    dispatch(getAlbumAction(album))
  } catch (e) {
    dispatch({ type: 'FETCH_ERROR', payload: e.message })
  }
}

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const albums = await getAlbums()
    dispatch(addAlbumsAction(albums))
  } catch (e) {
    dispatch({ type: 'FETCH_ERROR', payload: e.message })
  }
}
