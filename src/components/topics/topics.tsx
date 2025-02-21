"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Topic {
  date: string;
  store: "HONDA AVEDA" | "共通";
  title: string;
}

export function Topics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="text-4xl font-light"
            >
              Topics
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/topics"
                className="text-sm text-gray-500 hover:text-gray-700 mt-4 inline-flex items-center gap-2"
              >
                View All <span className="font-light">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="md:w-4/5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-b border-gray-200 pb-8 last:border-none"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-gray-500">{topic.date}</span>
                    <span
                      className={`px-3 py-1 text-[10px] text-white rounded ${
                        topic.store === "共通" ? "bg-gray-600" : "bg-black"
                      }`}
                    >
                      {topic.store}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-8">
                    <h3 className="text-base leading-relaxed flex-1">
                      <Link
                        href={`/topics/${index}`}
                        className="hover:text-gray-600"
                      >
                        {topic.title}
                      </Link>
                    </h3>
                    <Link
                      href={`/topics/${index}`}
                      className="text-sm text-gray-500 hover:text-gray-700 whitespace-nowrap flex items-center gap-2"
                    >
                      More <span className="font-light">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const topics: Topic[] = [
  {
    date: "2024.02.20",
    store: "HONDA AVEDA",
    title: "2/20休館日のお知らせ",
  },
  {
    date: "2022.05.25",
    store: "共通",
    title:
      "プロジェクトチームのスケジュールが「私はロボットではありません」と表示され、スケジュールを見ることが出来ない件について",
  },
  {
    date: "2022.02.12",
    store: "HONDA AVEDA",
    title: "人事異動のお知らせ",
  },
];
