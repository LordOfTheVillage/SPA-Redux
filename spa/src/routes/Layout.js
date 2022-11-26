import { NavLink, Outlet } from "react-router-dom"
import "../index.css"

export default function Layout() {
  return (
    <div className="min-h-screen">
      <header className=" py-4 border-b flex flex-row justify-end">
        <NavLink
          to="/albums"
          className="flex-initial w-20 text-gray-700 text-center hover:underline"
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className=" text-gray-700 w-20 text-center hover:underline"
        >
          Users
        </NavLink>
      </header>
      <main className="containter">
        <Outlet />
      </main>
      <footer className="sticky top-full py-4 px-0 flex flex-row justify-between border-t md:px-20">
        <span className="text-gray-700">
          Created by:{" "}
          <a
            href="https://github.com/LordOfTheVillage"
            className="hover:underline hover:text-blue-700"
          >
            Redzkin M.
          </a>
        </span>
        <div className="text-gray-700">BSU: 2022</div>
      </footer>
    </div>
  )
}
