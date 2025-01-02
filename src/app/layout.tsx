import './globals.css';

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
        <header className="p-4 bg-darkPurple">
          <h1 className="text-xl font-bold">Creovora</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-darkPurple text-center">
          <p>© {new Date().getFullYear()} Creovora. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}