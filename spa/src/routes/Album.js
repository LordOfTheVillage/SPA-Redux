import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getAlbum, getData, getUser, setDataByURL } from '../api'

export default function Album() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const album = useSelector((state) => state.albums.activeAlbum)
  const user = useSelector((state) => state.users.activeUser)
  // const [album, setAlbum] = useState({})
  // const [user, setUser] = useState({})

  const goBack = () => navigate(-1)
  const goToUser = (album) => {
    return navigate(`/users/${album.userId}`)
  }

  useEffect(() => {
    dispatch(getAlbum(id))
  }, [])

  useEffect(() => {
    if (album.userId) dispatch(getUser(album.userId))
  }, [album])

  // useEffect(() => {
  //   const setDataByURL = async () => {
  //     const res = await getData(`albums/${id}`)
  //     !res.userId ? navigate("/undefined") : setAlbum(res)
  //   }
  //   setDataByURL()
  // }, [id, navigate])

  // useEffect(() => {
  //   if (album.userId !== undefined) {
  //     setDataByURL(`users/${album.userId}`, setUser)
  //   }
  // }, [album])

  return (
    <>
      <div className="flex justify-between px-0 py-4 text-gray-700 md:px-10">
        <div>
          <h2 className="font-medium text-lg md:text-4xl first-letter:capitalize">
            {album.title}
          </h2>
          <div className="flex text-gray-500">
            <p className="mr-2">Created by: </p>
            <button className="hover:underline" onClick={() => goToUser(album)}>
              {user.name || 'Loading...'}
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
  )
}
