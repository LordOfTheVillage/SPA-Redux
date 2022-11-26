export default function CreateUser() {
  return (
    <div className="my-10">
      <form className="flex w-1/3 h-80 justify-between mx-auto flex-col">
        <input
          type="text"
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
          placeholder="Type name"
        ></input>
        <input
          type="text"
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
          placeholder="Type username"
        ></input>
        <input
          type="text"
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
          placeholder="Type email"
        ></input>
        <input
          type="tel"
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
          placeholder="Type phone"
        ></input>
        <input
          type="text"
          className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8"
          placeholder="Type site"
        ></input>
        <button className="border border-gray-400 mr-0 px-3 pb-1 rounded-sm md:mr-8 hover:border-blue-600 hover:text-blue-600">
          Submit
        </button>
      </form>
    </div>
  )
}
