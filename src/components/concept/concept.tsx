"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-[#F5F5F1] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 背景の円とドット */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F8E4DD] -translate-y-1/4 translate-x-1/4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-20 right-40 w-32 h-32"
        >
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </motion.div>

        {/* 装飾的な葉のイラスト */}
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={isInView ? { opacity: 1, rotate: -45 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-20 left-40"
        >
          <div className="w-32 h-48 border-2 border-white rounded-full" />
        </motion.div>

        {/* コンテンツ */}
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light mb-12"
          >
            Concept
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl mb-12 leading-relaxed"
          >
            「ピュアな花と植物エッセンスから生まれた美と科学」
            <br />
            を実践するアヴェダ。
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base leading-relaxed text-gray-700 space-y-6"
          >
            植物が持つ溢れるほどの生命力を科学的に研究してその高い効果に着目し、
            <br />
            「あなたのためのケア」をご提案します。アヴェダのヘアケア、スキンケア、ライフスタイルなどの製品は、
            <br />
            高い効果だけでなく、地球環境にも深く配慮しています。
          </motion.p>
        </div>
      </div>
    </section>
  );
}
