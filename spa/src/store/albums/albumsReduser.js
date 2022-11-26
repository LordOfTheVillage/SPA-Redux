const ADD_ALBUMS = 'ADD_ALBUMS'
const GET_ALBUM = 'GET_ALBUM'
const GET_USER_ALBUMS = 'GET_USER_ALBUMS'
const defaultState = {
  albums: [],
  userAlbums: [],
  activeAlbum: {},
}
const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return { ...state, albums: [...action.payload] }
    case GET_ALBUM:
      return { ...state, activeAlbum: action.payload }
    case GET_USER_ALBUMS:
      return { ...state, userAlbums: [...action.payload] }
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
