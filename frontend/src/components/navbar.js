export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-indigo-700">ITSolutions</h1>

        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#projects" className="hover:text-indigo-700">Projects</a>
          <a href="#clients" className="hover:text-indigo-700">Clients</a>
          <a href="#about" className="hover:text-indigo-700">About</a>
          <a href="#whyus" className="hover:text-indigo-700">Why Us</a>
          <a href="#footer" className="hover:text-indigo-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}
