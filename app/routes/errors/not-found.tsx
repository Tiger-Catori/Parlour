import { Link, useLocation, useNavigate } from "react-router";

const NotFoundPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center
      text-center px-6 min-h-[70vh]" >
      <h1 className="text-5xl font-extrabold text-green-400 mb-6">
        404 - <span>{location.pathname}</span>
      </h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-900 mb-6 max-w-md">
        Sorry, the requested page does not exist.
      </p>
      <Link to='/' className="inline-block bg-green-600
        text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Go Home
      </Link>

    </div>
  )
}
export default NotFoundPage;
