"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-light">
            SunnySide
          </Link>

          {/* ハンバーガーメニュー */}
          <button
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>

          {/* メニュー */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-[#F5F5F1] z-40 min-h-screen flex items-center justify-center"
              >
                <nav>
                  <ul className="space-y-12 text-center">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-3xl font-light tracking-wider hover:text-gray-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

const menuItems = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/stylist", label: "Stylist" },
  { href: "/contact", label: "Contact" },
]; 