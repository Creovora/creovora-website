import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-darkPurple text-white p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                
                {/* Logo Section */}
                <div className="flex items-center mb-4 md:mb-0">
                    <Image 
                        src="/Creovora-text-logo-light-transparent.png" 
                        alt="Creovora Logo"
                        width={150} 
                        height={50} 
                    />
                </div>

                {/* Social Media Section */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/linkedin-2.svg" 
                            alt="LinkedIn" 
                            width={32} 
                            height={32} 
                            className="transition-transform transform hover:scale-110 hover:shadow-lg"
                        />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/instagram-2.svg" 
                            alt="Instagram" 
                            width={37} 
                            height={37} 
                            className="transition-transform transform hover:scale-110 hover:shadow-lg"
                        />
                    </a>
                </div>

                {/* Copyright Section */}
                <div>
                    <p>© {new Date().getFullYear()} Creovora. All rights reserved.</p>
                </div>
            </div>

            {/* Optional Quick Links and Contact */}
            <div className="text-center mt-4">
                <p>
                    <a href="/about" className="hover:text-accent">About Us</a> | 
                    <a href="/services" className="hover:text-accent"> Services</a> | 
                    <a href="/contact" className="hover:text-accent"> Contact</a>
                </p>
                <p className="mt-2">Minneapolis, MN | <a href="mailto:info@creovora.com" className="hover:text-accent">info@creovora.com</a></p>
            </div>
        </footer>
    );
}