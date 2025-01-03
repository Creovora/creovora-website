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
          className="relative mt-6 inline-block py-3 px-6 text-lg font-bold text-primary bg-accent rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-primary">Explore Our Services</span>
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

      {/* Testimonials Section */}
      <div className="bg-lightPurple py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
          <p className="text-darkPurple">
            "Creovora transformed my website and brought my business to the next
            level. Highly recommended!"
          </p>
          <span className="block mt-4 font-bold text-primary">
            - Tony Hanson, Wolf Contracting, Inc.
          </span>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-lightPurple text-white py-12 text-center rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-4">
          Let’s build the perfect website for your brand. Contact us today!
        </p>
        <a
          href="/contact"
          className="relative inline-block mt-6 py-4 px-8 text-lg font-bold text-primary bg-accent rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-primary">Get in Touch</span>
        </a>
      </div>
    </div>
  );
}