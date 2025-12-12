import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold tracking-wider opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="text-9xl font-bold text-primary animate-pulse">
                4
              </span>
              <span className="text-9xl font-bold text-secondary animate-pulse delay-75">
                0
              </span>
              <span className="text-9xl font-bold text-accent animate-pulse delay-150">
                4
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-2xl p-8 mb-8 transform transition-all duration-300 hover:scale-105">
          <div className="card-body">
            <div className="mb-6">
              <div className="avatar">
                <div className="w-24 h-24 rounded-full bg-error/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-error"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-base-content">
              Page Not Found
            </h2>

            <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into 
              the digital wilderness. Don't worry - even the best explorers 
              sometimes take wrong turns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/" className="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;