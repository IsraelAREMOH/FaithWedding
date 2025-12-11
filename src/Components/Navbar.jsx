import { useState, useEffect } from "react";
import { navItems } from "../constants";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import Nav_DrawerMenu from "./Nav_DrawerMenu";
import RsvpModal from "./RsvpModal";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openListener = () => setOpen(true);
    window.addEventListener("open-rsvp", openListener);

    return () => window.removeEventListener("open-rsvp", openListener);
  }, []);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#9CAF88] font-semibold border-b-2 border-[#9AC791] pb-1"
      : "hover:text-";
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline text-center sm:text-left shrink-0">
            <h4
              className="text-4xl sm:text-5xl md:text-5xl text-[#B59410] lg:text-6xl"
              style={{ fontFamily: "'Allura', cursive", fontDisplay: "swap" }}
            >
              F & C
            </h4>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mt-1 sm:mt-0 sm:ml-2">
              Umuahia, Abia, Nigeria
            </p>
          </div>
          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex ml-10 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink className={getNavLinkClass} to={item.href}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => setOpen(true)}
              className="py-2 px-4 rounded-md bg-linear-to-r from-[#9CAF88] to-[#9AC791] text-white hover:opacity-90 transition"
            >
              RSVP
            </button>
          </div>
          <RsvpModal open={open} onClose={() => setOpen(false)} />
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Toggle Mobile Menu"
              className="text-white focus:outline-none"
            >
              <Menu size={24} className="text-[#B59410]" />
            </button>
          </div>
        </div>
        {/* DrawerMenu Component */}
        <Nav_DrawerMenu
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          navItems={navItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
