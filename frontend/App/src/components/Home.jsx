import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white font-mono">
      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-4 border border-gray-700">
        <div className="bg-gray-700 rounded-full px-4 py-2 text-white">LOGO</div>
        <div className="flex gap-6 text-lg">
          <a href="#">Home</a>
          <a href="#">features</a>
          <a href="#">About</a>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-20">
        <button className="text-2xl pointer bg-blue-900 rounded-full px-6 py-3">
          <Link to="login">Login</Link>
          </button>
        <button className="text-2xl bg-blue-900 rounded-full px-6 py-3">
          <Link to="register">
          Register
          </Link>
          </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-40 border border-gray-700 px-8 py-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-xl">LOGO</div>
          <div className="text-center">
            <div className="text-sm mb-2">CONNECT</div>
            <div className="flex justify-center gap-4">
              <a href="#"><span className="bg-white text-black px-2 py-1 rounded">in</span></a>
              <a href="#"><span className="bg-white text-black px-2 py-1 rounded">tw</span></a>
              <a href="#"><span className="bg-white text-black px-2 py-1 rounded">gh</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
