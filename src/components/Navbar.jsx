function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 h-16 flex items-center justify-between">
      <div className="text-white text-lg font-bold">Random</div>
      <img
        className="h-full"
        src="https://utfs.io/f/vCCc0jM68PuUXRRu4LbhVqc7UyB3ezvgCp6Z0T8jXr2MEKos"
      />
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white">
            Home
          </a>
        </li>
        <li></li>
        <li>
          <a href="#" className="text-white">
            Search
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
