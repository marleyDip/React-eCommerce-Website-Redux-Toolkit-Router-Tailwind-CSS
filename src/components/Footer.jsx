import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo-removebg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      {/* newsletter */}
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Subscribe Our Newsletter
            </h2>

            <form className="w-full md:w-1/3 mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="absolute right-3 top-1 bg-gray-200 px-4 py-3 rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* pages, logo */}
      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex flex-col items-center md:items-start lg:items-center justify-center">
              <img src={logo} alt="Logo" className="my-4" />

              <p className="text-xl font-semibold">
                Inspired by <span className="text-green-500">Innovation</span>.
                Built for <span className="text-amber-500">Life</span>.
              </p>

              <div className="flex items-center gap-8 mt-5">
                <Facebook
                  size={40}
                  className="bg-white text-blue-600 rounded-md p-2 transform  hover:translate-y-1 transition-all duration-300 ease-in-out"
                />

                <Twitter
                  size={40}
                  className="bg-white text-blue-600 rounded-md p-2 transform  hover:translate-y-1 transition-all duration-300 ease-in-out"
                />

                <Youtube
                  size={40}
                  className="bg-white text-blue-600 rounded-md p-2 transform  hover:translate-y-1 transition-all duration-300 ease-in-out"
                />

                <Instagram
                  size={40}
                  className="bg-white text-blue-600 rounded-md p-2 transform  hover:translate-y-1 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="flex flex-col items-center  justify-center">
              <h2 className="text-2xl font-semibold my-4">Pages</h2>

              <ul className="space-y-2 font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/services">FAQs</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start lg:items-center justify-center">
              <h2 className="text-2xl font-semibold my-4">Category</h2>

              <ul className="space-y-2 font-medium">
                <li>
                  <Link to="/">Monitors</Link>
                </li>

                <li>
                  <Link to="/about">Laptops</Link>
                </li>

                <li>
                  <Link to="/services">Smartphones</Link>
                </li>

                <li>
                  <Link to="/contact">Accessories</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center   justify-center space-y-0 md:space-y-2">
              <h2 className="text-2xl font-semibold my-4">Contact Us</h2>

              <p>Someshpur, Belkuchi, Sirajganj, Bangladesh</p>

              <p className="flex items-center gap-2 mt-2">
                <Mail /> info@example.com
              </p>

              <p className="flex items-center gap-2 mt-2">
                <Phone /> +880 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="text-center pt-6 pb-6 text-lg font-semibold text-white">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://marleydip.netlify.app/"
          target="_blank"
          className="text-emerald-500 hover:text-sky-500"
        >
          Md Sofian Hasan
        </a>
        . All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
