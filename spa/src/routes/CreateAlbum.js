import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/users/actions'

export default function CreateAlbum() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [users, dispatch])

  return (
    <>
      <div className="my-10">
        <form className="flex w-1/3 h-36 justify-between mx-auto flex-col">
          <select className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8">
            {users.length &&
              users.map((u) => <option key={u.id}>{u.name}</option>)}
          </select>
          <input
            type="text"
            className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
            placeholder="Type album name"
          ></input>
          <button className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
