import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 via-white to-teal-100 px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-teal-500 drop-shadow-lg animate-pulse">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-600 transition duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
