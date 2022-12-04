import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/users/actions'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [users, dispatch])

  return (
    <div className="flex flex-row-reverse justify-between my-5">
      <div className=" h-1/5 flex justify-end">
        <Link
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600"
          to={'create'}
        >
          Create new user
        </Link>
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
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  )
}
