"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-light tracking-wider text-center">SunnySide</h2>
              <p className="text-sm tracking-widest text-center mt-1">
                - HAIR SALON -
              </p>
            </Link>
          </motion.div>

          {/* ナビゲーション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8 mb-8 text-sm"
          >
            <Link
              href="/company"
              className="hover:text-gray-300 transition-colors"
            >
              会社紹介
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              プライバシーポリシー
            </Link>
          </motion.div>

          {/* SNSリンク */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 mb-12"
          >
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          </motion.div>

          {/* コピーライト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-gray-400"
          >
            © 大垣市の人気ヘアサロン SunnySide
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 