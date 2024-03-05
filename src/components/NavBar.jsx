import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-center py-3">
      <Link reloadDocument to="/" className="text-4xl font-bold">Anime & Manga Recs</Link>
    </div>
  )
}

export default NavBar