import React from "react";
import { Link } from "react-router-dom";

const PageNotFount = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
          <p className="text-gray-500 mt-2">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFount;
