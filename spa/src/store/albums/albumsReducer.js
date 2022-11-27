const ADD_ALBUMS = 'ADD_ALBUMS'
const GET_ALBUM = 'GET_ALBUM'
const GET_USER_ALBUMS = 'GET_USER_ALBUMS'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_START = 'FETCH_START'
const defaultState = {
  albums: [],
  activeAlbum: {},
  userAlbums: [],
  loading: false,
  error: null,
}
const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, loading: false, error: true }
    case ADD_ALBUMS:
      return {
        ...state,
        loading: false,
        error: false,
        albums: [...action.payload],
      }
    case GET_ALBUM:
      return {
        ...state,
        loading: false,
        error: null,
        activeAlbum: action.payload,
      }
    case GET_USER_ALBUMS:
      return {
        ...state,
        loading: false,
        error: null,
        userAlbums: [...action.payload],
      }
    default:
      return state
  }
}
export const addAlbumsAction = (payload) => ({ type: ADD_ALBUMS, payload })
export const getAlbumAction = (payload) => ({ type: GET_ALBUM, payload })
export const getUserAlbumsAction = (payload) => ({
  type: GET_USER_ALBUMS,
  payload,
})
export default albumsReducer
