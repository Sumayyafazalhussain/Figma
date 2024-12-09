import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-between px-10 py-10 max-w-[1140px] mx-auto text-sm">
        {/* Left Section - Address */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="font-bold text-xl mb-4">Funiro.</h2>
          <address className="not-italic text-sm text-gray-600">
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Center Section - Links and Help */}
        <div className="flex w-full sm:w-1/3 justify-between mb-6 sm:mb-0">
          {/* Links Column */}
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3 className="font-medium text-sm mb-4">Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="font-semibold hover:underline cursor-pointer">Home</li>
              <li className="font-semibold hover:underline cursor-pointer">Shop</li>
              <li className="font-semibold hover:underline cursor-pointer">About</li>
              <li className="font-semibold hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <h3 className="font-medium text-sm mb-4">Help</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="font-semibold hover:underline cursor-pointer">Payment Options</li>
              <li className="font-semibold hover:underline cursor-pointer">Returns</li>
              <li className="font-semibold hover:underline cursor-pointer">Privacy Policies</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="font-medium text-sm mb-4">Newsletter</h3>
          <form className="flex items-center border-b border-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-3 flex-grow text-sm focus:outline-none border-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white text-sm font-medium"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200 py-4 text-center">
        <p className="text-xs text-gray-500">2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;