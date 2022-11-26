import { Suspense, useEffect } from 'react'
import {
  defer,
  Link,
  useLoaderData,
  Await,
  useNavigate,
} from 'react-router-dom'
import { getData, getUsers } from '../api'
import { useDispatch, useSelector } from 'react-redux'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const navigate = useNavigate()
  const toCreateUserPage = () => navigate('create')

  useEffect(() => {
    if (users.length === 0) dispatch(getUsers())
  }, [])

  return (
    <div className="flex flex-row-reverse justify-between my-5">
      <div className=" h-1/5 flex justify-end">
        <button
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
          onClick={toCreateUserPage}
        >
          Create new user
        </button>
      </div>
      {users.length > 0 ? (
        <div className="text-gray-700 ml-8 flex flex-col justify-between">
          {users.map((user) => {
            return (
              <Link key={user.id} to={`${user.id}`}>
                <p className="pb-1.5 hover:underline">{user.name}</p>
              </Link>
            )
          })}
        </div>
      ) : (
        // TODO EMPTYDATA COMPONENT
        <button onClick={() => dispatch(fetchUsers())}>Add users</button>
      )}
    </div>
  )
}
