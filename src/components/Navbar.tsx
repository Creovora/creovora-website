export default function Navbar() {
    return (
      <nav className="bg-darkPurple text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Creovora</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/services" className="hover:text-accent">Services</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }