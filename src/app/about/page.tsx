export const metadata = {
  title: "About Creovora | Web Development in Minneapolis",
  description:
    "Learn about Creovora's mission to empower small businesses in Minneapolis with cutting-edge web design and development services.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Creovora</h1>
      <p>
        Based in Minneapolis, Minnesota, Creovora specializes in creating stunning, functional, and affordable websites for small businesses.
        Our mission is to empower local businesses with modern web solutions that drive growth and enhance their online presence.
      </p>
      <h2 className="text-2xl font-bold mt-6">Why Choose Us?</h2>
      <ul className="space-y-4">
        <li>• Personalized Service: Tailored solutions for each client.</li>
        <li>• All-in-One Convenience: From domain registration to ongoing support.</li>
        <li>• Commitment to Quality: Websites that look great and perform even better.</li>
      </ul>
    </div>
  );
}