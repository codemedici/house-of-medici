const FooterCTA = () => {
  return (
    <div className="w-full py-12 bg-black text-white text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Join us in celebrating timeless art.
      </h2>
      <p className="text-sm font-light mb-6">
        Stay updated on the latest collections and events.
      </p>
      <form className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-black rounded"
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterCTA;
