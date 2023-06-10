
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaSnapchat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">About Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            Thank you for visiting our recipe website. We hope you enjoyed this
            recipe and found it useful. If you have any feedback or suggestions,
            please let us know in the comments below. t forget to follow us
            on social media and subscribe to our newsletter for more delicious
            recipes like this one.
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Latest</h2>
          <ul className="text-gray-400 text-sm leading-loose">
            <li>
              <Link to="">Public API</Link>
            </li>
            <li>
              <Link to="">Documentation</Link>
            </li>
            <li>
              <Link to="">Guides</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition-colors">
                Recipe
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            123 Main St.
            <br />
            Anytown, USA 12345
            <br />
            (123) 456-7890
            <br />
            info@example.com
          </p>
        </div>
        <div className="col-span-1  md:justify-end">
          <h2 className="text-white text-lg font-medium mb-4">Follow Us</h2>{" "}
          <br />
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-blue-500 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-white transition-colors"
              >
                <FaSnapchat />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
