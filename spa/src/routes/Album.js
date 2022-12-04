import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getElementById } from '../config'
import { fetchAlbum } from '../store/albums/actions'
import { fetchUser } from '../store/users/actions'

export default function Album() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const albums = useSelector((state) => state.albums.albums)
  const error = useSelector((state) => state.albums.error)
  const loadingAlbum = useSelector((state) => state.albums.loading)
  const users = useSelector((state) => state.users.users)
  const loadingUser = useSelector((state) => state.users.loading)
  const [user, setUser] = useState({})
  const [album, setAlbum] = useState({})

  const goBack = () => navigate(-1)
  const goToNotfoundPage = () => navigate('/undefined')

  useEffect(() => {
    const suspect = getElementById(albums, +id) || null
    if (!suspect) dispatch(fetchAlbum(id))
    else setAlbum(suspect || {})
  }, [albums, id, dispatch])

  useEffect(() => {
    if (album.id) {
      const suspect = getElementById(users, +album.userId) || null
      if (!suspect) dispatch(fetchUser(album.userId))
      else setUser(suspect || {})
    }
  }, [album, users, id, dispatch])

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
                <Link className="hover:underline" to={`/users/${album.userId}`}>
                  {loadingUser ? <h1>Loading...</h1> : user.name}
                </Link>
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
