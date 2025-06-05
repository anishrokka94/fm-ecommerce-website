import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">PicknPlay</h2>
          <p className="mb-4">
            Your one-stop shop for everything you need — from fashion to tech,
            all in one place.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ShopEasy. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <p className="mb-4">
            Get updates on new arrivals and special offers.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
