export default function ContactPage() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-accent text-black py-2 px-4 rounded hover:bg-lightPurple">
            Submit
          </button>
        </form>
      </div>
    );
  }
