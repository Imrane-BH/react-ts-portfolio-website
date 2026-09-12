import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-paper/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-8 py-5">
        <a href="#" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo" className="h-7 md:h-8 w-auto" />
        </a>

        <nav className="hidden md:flex gap-8 font-body text-sm text-ink">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-px w-full bg-ink block"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-px w-full bg-ink block"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-px w-full bg-ink block"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden flex flex-col px-6 bg-paper"
          >
            {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 border-t border-hairline font-body text-ink"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="h-px bg-hairline origin-left"
      />
    </header>
  );
}