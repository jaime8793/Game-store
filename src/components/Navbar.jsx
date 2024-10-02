import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 h-16 flex items-center justify-between">
      <div className="text-white text-lg font-bold">Random</div>
      <img
        className="h-full"
        src="https://utfs.io/f/vCCc0jM68PuUXRRu4LbhVqc7UyB3ezvgCp6Z0T8jXr2MEKos"
        alt="Logo" // It's a good practice to add an alt text for images
      />
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="text-white">
            Search
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
