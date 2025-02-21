"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-screen mt-10">
      {/* 一時的にImageコンポーネントを非表示にする */}
      <Image
        src="/images/hero.jpg"
        alt="Salon interior"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Beauty & Harmony
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-xl md:text-2xl"
        >
          あなたの魅力を最大限に引き出す空間
        </motion.p>
      </div>
    </div>
  );
}
