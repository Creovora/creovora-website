export default function Footer() {
    return (
      <footer className="bg-darkPurple text-white p-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Creovora. All rights reserved.</p>
          <div className="mt-2">
            <a href="https://www.linkedin.com/" target="_blank" className="mr-4 hover:text-accent">LinkedIn</a>
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-accent">Instagram</a>
          </div>
        </div>
      </footer>
    );
  }