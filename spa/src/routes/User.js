import { Suspense, useEffect, useState } from 'react'
import {
  Await,
  useNavigate,
  useLoaderData,
  Link,
  defer,
  useParams,
} from 'react-router-dom'
import {
  getData,
  setDataByURL,
  getUser,
  getAlbums,
  getAlbum,
  getUserAlbums,
} from '../api'
import { useDispatch, useSelector } from 'react-redux'

export default function User() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [checkingUser, setCheckingUser] = useState(true)
  const user = useSelector((state) => state.users.activeUser)
  const albums = useSelector((state) => state.albums.userAlbums)
  const loading = useSelector((state) => state.users.loading)

  const goBack = () => navigate(-1)
  const goToNotfoundedpage = () => navigate('/undefined')

  useEffect(() => {
    setCheckingUser(false)
    dispatch(getUserAlbums(id))
    dispatch(getUser(id))
  }, [])

  return (
    <div className="flex justify-between flex-row-reverse px-0 py-4 md:px-10">
      <div className=" h-1/5 flex justify-end">
        <button
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
          onClick={goBack}
        >
          Go back
        </button>
      </div>
      {!user.username && !loading && !checkingUser ? (
        goToNotfoundedpage()
      ) : (
        <div className="flex flex-col">
          <div className="text-gray-500">
            <h2 className="font-medium text-lg md:text-4xl text-gray-700">
              {user.name}
            </h2>
            <ul className="list-none">
              <li>Username: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {toString(user.phone).replaceAll('.', '-')}</li>
              <li>Site: {user.website}</li>
            </ul>
          </div>
          <div className="my-6 text-gray-700">
            <h2 className=" font-medium text-lg md:text-4xl">Albums: </h2>
            {albums.length > 0 ? (
              albums.map((album) => (
                <Link key={album.id} to={`/albums/${album.id}`}>
                  <span className="flex items-center">
                    <img
                      src="/icons/album-icon.png"
                      className="w-4 mt-1 h-4 mr-1"
                      alt="album"
                    />
                    <p className="hover:underline first-letter:capitalize">
                      {album.title}
                    </p>
                  </span>
                </Link>
              ))
            ) : (
              <div>Hello</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
