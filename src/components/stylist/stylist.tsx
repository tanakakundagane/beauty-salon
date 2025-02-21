"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StylistProfile {
  id: number;
  name: string;
  nameJa: string;
  role: string;
  description: string;
  image: string;
}

export function Stylist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#F5F5F1]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-center mb-20"
        >
          Stylist
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-none shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center p-6 bg-white">
                  <h3 className="text-sm text-gray-600 mb-2">{stylist.role}</h3>
                  <p className="text-xl mb-1">{stylist.name}</p>
                  <p className="text-sm text-gray-600 mb-4">{stylist.nameJa}</p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {stylist.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stylists: StylistProfile[] = [
  {
    id: 1,
    name: "Emma Thompson",
    nameJa: "エマ・トンプソン",
    role: "Director",
    description:
      "10年以上の経験を持つヘアスタイリスト。ナチュラルな美しさを引き出すカットと、トレンドを取り入れたスタイリングが得意。",
    image: "/images/stylist.jpg",
  },
  {
    id: 2,
    name: "Yuki Tanaka",
    nameJa: "田中 優希",
    role: "Top Stylist",
    description:
      "繊細なカラーリングとヘアケアのスペシャリスト。お客様一人一人の髪質に合わせたパーソナライズドケアを提供。",
    image: "/images/stylist.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    nameJa: "サラ・ジョンソン",
    role: "Senior Stylist",
    description:
      "インターナショナルな感性と技術を持つスタイリスト。モード感のあるスタイリングからナチュラルなスタイルまで幅広く対応。",
    image: "/images/stylist.jpg",
  },
  {
    id: 4,
    name: "Kenji Suzuki",
    nameJa: "鈴木 健二",
    role: "Stylist",
    description:
      "新しい技術と伝統的な技法を組み合わせた独自のスタイリングが特徴。丁寧なカウンセリングで理想のスタイルを実現。",
    image: "/images/stylist.jpg",
  },
];
