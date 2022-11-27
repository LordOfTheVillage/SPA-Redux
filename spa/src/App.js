import Layout from './routes/Layout'
import Albums from './routes/Albums'
import Album from './routes/Album'
import Users from './routes/Users'
import User from './routes/User'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'
import NotfoundPage from './routes/NotfoundPage'
import CreateUser from './routes/CreateUser'
import CreateAlbum from './routes/CreateAlbum'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate to="/users" />}></Route>
      <Route path="users" element={<Users />}></Route>
      <Route path="users/create" element={<CreateUser />}></Route>
      <Route path="users/:id" element={<User />}></Route>
      <Route path="albums" element={<Albums />} />
      <Route path="albums/:id" element={<Album />} />
      <Route path="albums/create" element={<CreateAlbum />}></Route>
      <Route path="/*" element={<NotfoundPage />} />
    </Route>
  )
)

function App() {
  return (
    <div className="px-10">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
