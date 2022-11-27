const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export async function getData(url) {
  const response = await fetch(BASE_URL + url)
  if (!response.ok) throw Error()
  return response.json()
}

export const getUser = async (id) => {
  return getData('users/' + id)
}

export const getAlbum = async (id) => {
  return getData('albums/' + id)
}

export const getUsers = async () => {
  return getData('users/')
}

export const getAlbums = async () => {
  return getData('albums/')
}
