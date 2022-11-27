import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AlbumList from '../components/AlbumList'
import { fetchAlbums } from '../store/albums/actions'

export default function Albums() {
  const dispatch = useDispatch()
  const albums = useSelector((state) => state.albums.albums)
  const navigate = useNavigate()
  const toCreateAlbumPage = () => navigate('create')

  useEffect(() => {
    if (!albums.length) dispatch(fetchAlbums())
  }, [])

  return (
    <div className="flex flex-row-reverse justify-between my-5">
      <div className=" h-1/5 flex justify-end">
        <button
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
          onClick={toCreateAlbumPage}
        >
          Create new album
        </button>
      </div>
      {albums.length > 0 ? (
        <div className="ml-8">
          <AlbumList albums={albums}></AlbumList>
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  )
}
