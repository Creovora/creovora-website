export const metadata = {
  title: "Web Development Services | Creovora Minneapolis",
  description:
    "Discover Creovora's services: custom website design, hosting, e-commerce solutions, and SEO for businesses in Minneapolis and Minnesota.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="mb-6">
        At Creovora, we offer a comprehensive suite of services designed to help small businesses thrive online.
      </p>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Custom Website Design & Development</h2>
          <p>Beautiful, responsive websites tailored to your unique needs.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Hosting & Maintenance</h2>
          <p>Reliable hosting with ongoing updates to keep your site running smoothly.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">E-Commerce Solutions</h2>
          <p>Set up your online store with secure, seamless shopping experiences.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">SEO Optimization</h2>
          <p>Ensure your business gets discovered by the right audience online.</p>
        </li>
      </ul>
    </div>
  );
}