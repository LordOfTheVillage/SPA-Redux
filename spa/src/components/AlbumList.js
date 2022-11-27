import { Link } from 'react-router-dom'

export default function AlbumList({ albums }) {
  return (
    <div className="text-gray-700 flex flex-col justify-between">
      {albums.map((album) => {
        return (
          <Link key={album.id} to={`/albums/${album.id}`}>
            <span className="flex items-center pb-1.5">
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
        )
      })}
    </div>
  )
}
