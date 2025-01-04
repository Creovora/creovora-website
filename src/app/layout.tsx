import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Creovora | Empowering Businesses with Modern Web Solutions',
  description: 'Providing custom website design, hosting, and e-commerce solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Include Navbar Component */}
        <Navbar />
        
        {/* Main Content with Added Margin Below Navbar */}
        <main className="p-6 mt-16">{children}</main>

        {/* Include Footer Component */}
        <Footer />
      </body>
    </html>
  );
}