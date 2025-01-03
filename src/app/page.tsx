export const metadata = {
  title: "Minneapolis Web Design | Creovora Web Solutions",
  description:
    "Creovora offers stunning, functional, and affordable web design, development, and SEO services in Minneapolis. Empower your business with modern web solutions.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-primary text-white py-16">
        <h1 className="text-4xl font-bold">
          Empowering Businesses with Stunning Web Solutions
        </h1>
        <p className="text-lg mt-4">
          Custom websites designed to captivate, convert, and grow your business.
        </p>
        <a
          href="/services"
          className="mt-6 inline-block bg-accent text-black py-2 px-4 rounded hover:bg-lightPurple"
        >
          Explore Our Services
        </a>
      </div>

      {/* What We Do Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <ul className="space-y-4">
          <li>• Custom Website Design & Development</li>
          <li>• Hosting & Maintenance</li>
          <li>• E-Commerce Solutions</li>
          <li>• SEO Optimization</li>
        </ul>
      </div>
    </div>
  );
}