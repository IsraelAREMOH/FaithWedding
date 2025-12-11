import { motion as Motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Nav_DrawerMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-100"
          />

          {/* Drawer */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 h-full w-3/4 sm:w-2/5 bg-black/90 text-white shadow-xl p-8 z-50"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Close Menu">
                <X size={28} className="text-[#B59410]" />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="mt-10 text-black font-semibold space-y-2 text-lg tracking-wide">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block transition ${
                        isActive
                          ? "text-[#B59410] font-semibold"
                          : "hover:text-[#B59410]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* RSVP Button */}
            <div className="mt-10">
              <button
                onClick={() => {
                  onClose(); // close drawer
                  window.dispatchEvent(new CustomEvent("open-rsvp")); // open modal
                }}
                className="block w-full bg-gradient-to-r from-[#9CAF88] to-[#9AC791] py-3 px-4 rounded-md text-center font-medium text-black"
              >
                RSVP
              </button>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Nav_DrawerMenu;
