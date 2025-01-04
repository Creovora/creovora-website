import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-darkPurple text-white p-6">
            {/* Grid Layout for Perfect Desktop & Mobile Alignment */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4">

                {/* Logo Section (Left Aligned on Desktop) */}
                <div className="flex justify-center md:justify-start">
                    <Image 
                        src="/Creovora-text-logo-light-transparent.png" 
                        alt="Creovora Logo"
                        width={150} 
                        height={50} 
                    />
                </div>

                {/* Social Media Section (Centered) */}
                <div className="flex justify-center space-x-4">
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

                {/* Copyright Section (Right Aligned on Desktop) */}
                <div className="flex justify-center md:justify-end">
                    <p>© {new Date().getFullYear()} Creovora. All rights reserved.</p>
                </div>
            </div>

            {/* Quick Links Section (Centered Below Main Grid) */}
            <div className="text-center mt-4 space-x-2">
                <a href="/about" className="hover:text-accent">About Us</a> | 
                <a href="/services" className="hover:text-accent"> Services</a> | 
                <a href="/contact" className="hover:text-accent"> Contact</a>
            </div>

            {/* Contact Info Section (Centered Below Links) */}
            <div className="text-center mt-2">
                <p>Minneapolis, MN | <a href="mailto:info@creovora.com" className="hover:text-accent">info@creovora.com</a></p>
            </div>
        </footer>
    );
}