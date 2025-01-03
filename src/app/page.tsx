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
          Empowering Small Businesses with Premium Web Design & Digital Growth Solutions
        </h1>
        <p className="text-lg mt-4">
          At Creovora, we craft modern, impactful websites tailored for small businesses in Minnesota. Whether you need a brand-new website, SEO services, or e-commerce solutions, we're here to help you grow.
        </p>
        <a
          href="/contact"
          className="relative mt-6 inline-block py-3 px-6 text-lg font-bold text-primary bg-accent rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-primary">Request a Quote</span>
        </a>
      </div>

      {/* Why Choose Creovora Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Why Partner with Creovora?</h2>
        <ul className="space-y-4">
          <li><strong>Tailored Web Strategies:</strong> We don't offer cookie-cutter templates. Each site is designed for your brand's unique needs.</li>
          <li><strong>Stunning Visual Design:</strong> Clean, modern designs with a focus on conversions.</li>
          <li><strong>Full-Service Support:</strong> From design to hosting and maintenance, we handle everything for you.</li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <ul className="space-y-4">
          <li>• Website Design: Custom designs that reflect your brand.</li>
          <li>• Hosting & Maintenance: Reliable uptime and regular updates.</li>
          <li>• SEO Optimization: Get found on Google with strategic optimization.</li>
          <li>• E-Commerce Solutions: Build secure, user-friendly online stores.</li>
        </ul>
      </div>

      {/* Testimonials Section (Updated for Mobile) */}
      <div className="bg-lightPurple py-12 rounded-t-lg">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="mx-auto bg-white shadow p-6 rounded" style={{ maxWidth: '90%', width: '500px' }}>
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
      <div className="bg-lightPurple text-white py-12 text-center rounded-b-lg">
        <h2 className="text-3xl font-bold">Ready to Take Your Business to the Next Level?</h2>
        <p className="mt-4">
          Let’s build a powerful online presence for your business. Schedule a free consultation with us today.
        </p>
        <a
          href="/contact"
          className="relative inline-block mt-6 py-4 px-8 text-lg font-bold text-primary bg-accent rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-primary">Get a Free Quote</span>
        </a>
      </div>

      {/* Learn About Web Design Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Finding the Right Web Design Partner</h2>
        <p className="text-lg text-center mb-6">
          Whether you’re starting from scratch or upgrading an existing site, knowing how to choose the right web design partner is essential. Here's a guide to help you make an informed decision.
        </p>

        {/* Table of Contents */}
        <div className="bg-white shadow p-6 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-4">Table of Contents</h3>
          <ul className="space-y-2 list-disc pl-6 text-primary">
            <li><a href="#define-needs" className="hover:underline">Define Your Needs</a></li>
            <li><a href="#research-agencies" className="hover:underline">Research Agencies</a></li>
            <li><a href="#evaluate-process" className="hover:underline">Evaluate the Design Process</a></li>
            <li><a href="#final-decision" className="hover:underline">Making Your Final Decision</a></li>
          </ul>
        </div>

        {/* Section 1: Define Needs */}
        <div id="define-needs" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">1. Define Your Needs</h3>
          <p className="text-lg">Before starting your search, outline your specific needs. Do you need a complete redesign or a new website? Clarifying your goals helps narrow down your options.</p>
        </div>

        {/* Section 2: Research Agencies (Revised for Transparency) */}
        <div id="research-agencies" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">2. Research Agencies</h3>
          <p className="text-lg">When choosing a web design partner, look for agencies committed to quality and personalized service. Creovora may be a new name, but we bring modern design principles, attention to detail, and a drive to deliver impactful websites for every client.</p>
        </div>

        {/* Section 3: Evaluate the Design Process */}
        <div id="evaluate-process" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">3. Evaluate the Design Process</h3>
          <p className="text-lg">Understanding how an agency works ensures a smoother collaboration. At Creovora, we follow a clear process, focusing on collaboration, feedback, and results.</p>
        </div>

        {/* Section 4: Making Your Final Decision */}
        <div id="final-decision" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">4. Making Your Final Decision</h3>
          <p className="text-lg">When selecting a web design partner, choose a company that aligns with your business goals and values collaboration. At Creovora, we emphasize transparent communication and client involvement to ensure every project is a success.</p>
        </div>
      </div>
    </div>
  );
}