const ADD_ALBUMS = 'ADD_ALBUMS'
const GET_ALBUM = 'GET_ALBUM'
const FETCH_ALBUM_ERROR = 'FETCH_ALBUM_ERROR'
const FETCH_ALBUM_START = 'FETCH_ALBUM_START'
const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS'
const defaultState = {
  albums: [],
  activeAlbum: {},
  loading: false,
  error: null,
}
const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_START:
      return { ...state, loading: true }
    case FETCH_ALBUM_ERROR:
      return { ...state, loading: false, error: true }
    case FETCH_ALBUM_SUCCESS:
      return { ...state, loading: false, error: false }
    case ADD_ALBUMS:
      return {
        ...state,
        albums: [...action.payload],
      }
    case GET_ALBUM:
      return {
        ...state,
        albums: [...state.albums, action.payload],
      }
    default:
      return state
  }
}
export const addAlbumsAction = (payload) => ({ type: ADD_ALBUMS, payload })
export const getAlbumAction = (payload) => ({ type: GET_ALBUM, payload })
export const fetchErrorAction = (payload) => ({
  type: FETCH_ALBUM_ERROR,
  payload,
})
export const fetchStartAction = () => ({ type: FETCH_ALBUM_START })
export const fetchSuccessAction = () => ({ type: FETCH_ALBUM_SUCCESS })
export default albumsReducer
