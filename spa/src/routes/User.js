import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AlbumList from '../components/AlbumList'
import { fetchAlbums } from '../store/albums/actions'
import { fetchUser } from '../store/users/actions'

export default function User() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.activeUser)
  const albums = useSelector((state) => state.albums.albums)
  const error = useSelector((state) => state.users.error)

  const goBack = () => navigate(-1)
  const goToNotfoundPage = () => navigate('/undefined')

  useEffect(() => {
    if (!albums.length) dispatch(fetchAlbums())
    if (user.id !== +id) dispatch(fetchUser(id))
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
      {error && goToNotfoundPage()}
      {user.username ? (
        <>
          <div className="flex flex-col">
            <div className="text-gray-500">
              <h2 className="font-medium text-lg md:text-4xl text-gray-700">
                {user.name}
              </h2>
              <ul className="list-none">
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone.replaceAll('.', '-')}</li>
                <li>Site: {user.website}</li>
              </ul>
            </div>
            <div className="my-6 text-gray-700">
              <h2 className=" font-medium text-lg md:text-4xl">Albums: </h2>
              {albums.length > 0 ? (
                <AlbumList
                  albums={albums.filter((a) => a.userId === +id)}
                ></AlbumList>
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </>
      ) : (
        <>Hello</>
      )}
    </div>
  )
}

// export default function User() {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const users = useSelector((state) => state.users.users)
//   const albums = useSelector((state) => state.albums.albums)

//   const goBack = () => navigate(-1)
//   const goToNotfoundPage = () => navigate('/undefined')

//   useEffect(() => {
//     dispatch(getAlbums())
//     dispatch(getUsers())
//   }, [])

//   const user = useMemo(() => {
//     return users.length > 0 ? { ...users.filter((u) => u.id === +id)[0] } : {}
//   }, [users])

//   return (
//     <div className="flex justify-between flex-row-reverse px-0 py-4 md:px-10">
//       <div className=" h-1/5 flex justify-end">
//         <button
//           className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
//           onClick={goBack}
//         >
//           Go back
//         </button>
//       </div>
//       {!user.username && albums.length && users.length && goToNotfoundPage()}
//       {user.username && users.length && albums.length ? (
//         <>
//           <div className="flex flex-col">
//             <div className="text-gray-500">
//               <h2 className="font-medium text-lg md:text-4xl text-gray-700">
//                 {user.name}
//               </h2>
//               <ul className="list-none">
//                 <li>Username: {user.username}</li>
//                 <li>Email: {user.email}</li>
//                 <li>Phone: {user.phone.replaceAll('.', '-')}</li>
//                 <li>Site: {user.website}</li>
//               </ul>
//             </div>
//             <div className="my-6 text-gray-700">
//               <h2 className=" font-medium text-lg md:text-4xl">Albums: </h2>
//               {albums.length > 0 ? (
//                 <AlbumList
//                   albums={albums.filter((a) => a.userId === +id)}
//                 ></AlbumList>
//               ) : (
//                 <div>Hello</div>
//               )}
//             </div>
//           </div>
//         </>
//       ) : (
//         <>Hello</>
//       )}
//     </div>
//   )
// }
