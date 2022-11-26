import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

export default function CreateAlbum() {
  const { users } = useLoaderData()
  return (
    <>
      <div className="my-10">
        <form className="flex w-1/3 h-36 justify-between mx-auto flex-col">
          <select className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8">
            <Suspense fallback={<h3>Loading...</h3>}>
              <Await resolve={users}>
                {(resolved) => resolved.map((u) => <option>{u.name}</option>)}
              </Await>
            </Suspense>
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
