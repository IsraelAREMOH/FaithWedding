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
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-0 right-0 h-full w-3/4 sm:w-2/5 
                       bg-black/60 backdrop-blur-xl 
                       text-white shadow-2xl p-8 z-50
                       border-l border-[#B59410]/40"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <X size={26} className="text-[#B59410]" />
              </button>
            </div>

            {/* Menu Section */}
            <div className="mt-10">
              <ul
                className="space-y-3 text-lg font-bold tracking-wide 
                             bg-gradient-to-b from-[#9CAF88]/70 to-[#9CAF88]/50
                             p-5 rounded-xl border border-[#B59410]/20 shadow-sm"
              >
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-[#B59410]/90 text-white shadow-md"
                            : "hover:bg-[#9CAF88]/25 hover:text-[#B59410]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* RSVP Button */}
            <div className="mt-10">
              <button
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent("open-rsvp"));
                }}
                className="block w-full bg-gradient-to-r from-[#9CAF88] to-[#9AC791] 
                           py-3 px-4 rounded-lg text-center font-semibold text-black
                           shadow-md hover:shadow-lg transition"
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
