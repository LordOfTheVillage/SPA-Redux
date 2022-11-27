import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAlbum } from '../store/albums/actions'
import { fetchUser } from '../store/users/actions'

export default function Album() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const album = useSelector((state) => state.albums.activeAlbum)
  const user = useSelector((state) => state.users.activeUser)
  const error = useSelector((state) => state.albums.error)

  const goBack = () => navigate(-1)
  const goToUser = (album) => {
    return navigate(`/users/${album.userId}`)
  }
  const goToNotfoundPage = () => navigate('/undefined')

  useEffect(() => {
    if (album.id !== +id) {
      dispatch(fetchAlbum(id))
    }
  }, [album, id, dispatch])

  useEffect(() => {
    if (album.id && user.id !== album.userId) dispatch(fetchUser(album.userId))
  }, [album])

  return (
    <>
      {error && goToNotfoundPage()}
      {album.title ? (
        <>
          {' '}
          <div className="flex justify-between px-0 py-4 text-gray-700 md:px-10">
            <div>
              <h2 className="font-medium text-lg md:text-4xl first-letter:capitalize">
                {album.title}
              </h2>
              <div className="flex text-gray-500">
                <p className="mr-2">Created by: </p>
                <button
                  className="hover:underline"
                  onClick={() => goToUser(album)}
                >
                  {user.name}
                </button>
              </div>
            </div>
            <div className=" h-1/5 flex justify-end">
              <button
                className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
                onClick={goBack}
              >
                Go back
              </button>
            </div>
          </div>
          <div className=" w-full lg:w-3/4 my-10 mx-auto grid gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-3">
            <div className="bg-slate-300 h-36 md:h-52 xl:h-80"></div>
            <div className="bg-slate-300"></div>
            <div className="bg-slate-300 "></div>
            <div className="bg-slate-300 h-36 md:h-52 xl:h-80"></div>
            <div className="bg-slate-300"></div>
            <div className="bg-slate-300 "></div>
            <div className="bg-slate-300 h-36 md:h-52 xl:h-80"></div>
            <div className="bg-slate-300"></div>
            <div className="bg-slate-300 "></div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}
