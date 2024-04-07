import { Link } from "react-router-dom";
import instagram from "../../assets/social/instagram.svg";
import twitter from "../../assets/social/twitter.svg";
import telegram from "../../assets/social/telegram.svg";
import whatsapp from "../../assets/social/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quic Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary-200">
              Quick Links
            </h4>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="hover:text-secondary-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/categories"
                  className="hover:text-secondary-500 transition-colors duration-300"
                >
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/headlines"
                  className="hover:text-secondary-500 transition-colors duration-300"
                >
                  Headlines
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:text-secondary-500 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <h4 className="text-xl font-semibold mb-4 text-secondary-200">
              Contact Us
            </h4>
            <p>1717 Street, City</p>
            <p>Email: disslogged@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>

          {/* social media */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary-200">
              Social Media
            </h4>
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-500 transition-colors duration-300 flex items-center gap-4"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      className="w-12 h-12"
                    />
                    <p>Instagram</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.telegram.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-500 transition-colors duration-300 flex items-center gap-4"
                  >
                    <img src={telegram} alt="telegram" className="w-12 h-12" />
                    <p>Telegram</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-500 transition-colors duration-300 flex items-center gap-4"
                  >
                    <img src={twitter} alt="twitter" className="w-12 h-12" />
                    <p>Twitter</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-500 transition-colors duration-300 flex items-center gap-4"
                  >
                    <img src={whatsapp} alt="whatsapp" className="w-12 h-12" />
                    <p>Whatsapp</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
