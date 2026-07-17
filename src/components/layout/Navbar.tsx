import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
          aria-label="Main Navigation"
        >
          <Link to="/" className="text-2xl font-bold text-sky-700">
            SurgeonsLab
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "font-semibold text-sky-700"
                        : "text-gray-700 hover:text-sky-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-lg border border-sky-700 px-5 py-2 text-sky-700 transition hover:bg-sky-50">
              Login
            </button>

            <button className="rounded-lg bg-sky-700 px-5 py-2 font-medium text-white transition hover:bg-sky-800">
              Get Started
            </button>
          </div>

          <button
            className="rounded-md p-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 md:hidden"
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className="fixed inset-0 z-50 bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
              }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex h-20 items-center justify-between border-b px-6">
                <h2 className="text-2xl font-bold text-sky-700">SurgeonsLab</h2>

                <button
                  aria-label="Close Menu"
                  onClick={closeMenu}
                  className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="mt-10">
                <ul className="space-y-8 px-8">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className="block text-2xl font-medium text-gray-700 hover:text-sky-700"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 space-y-4 px-8">
                  <button className="w-full rounded-lg border border-sky-700 py-3 text-sky-700">
                    Login
                  </button>

                  <button className="w-full rounded-lg bg-sky-700 py-3 text-white">
                    Get Started
                  </button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
