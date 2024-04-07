import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import { navLinksInfo } from "../../utils/constant";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="md:container mx-auto py-4 px-4 mb-3">
      <div className="flex items-center justify-between">
        <Logo />
        {/* medium and large screen */}
        <nav className="uppercase p-5 text-primary-700 nav hidden md:block">
          <ul className="font-headFamily tracking-wider flex gap-5">
            {navLinksInfo.map(navInfo => (
              <li key={navInfo.slug}>
                <NavLink
                  to={navInfo.slug}
                  className="py-1 inline-block navLinkHover"
                >
                  {navInfo.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Bars3Icon
          className="w-12 text-primary-900 cursor-pointer md:hidden"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            <div
              className="absolute inset-0 bg-black/80 z-10"
              onClick={() => setShowMenu(false)}
            ></div>
            <motion.nav
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              exit={{
                opacity: 0,
                x: 500,
              }}
              layout
              className="absolute top-0 bottom-0 right-0 left-40 bg-gray-300 z-20 uppercase p-5 text-primary-700 nav"
            >
              <XCircleIcon
                className="w-10 text-red-700 absolute right-2 cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
              <ul className="space-y-3 font-headFamily tracking-wider mt-10">
                {navLinksInfo.map(navInfo => (
                  <li key={navInfo.slug}>
                    <NavLink
                      to={navInfo.slug}
                      className="py-1 inline-block"
                      onClick={() => setShowMenu(false)}
                    >
                      {navInfo.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
