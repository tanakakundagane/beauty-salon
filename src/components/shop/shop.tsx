"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader } from "@/components/ui/card";

interface ShopInfo {
  id: number;
  name: string;
  address: string;
  tel: string;
  hours: string;
  holiday: string;
  access: string;
  image: string;
}

export function Shop() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-light text-center mb-20"
        >
          Shop
        </motion.h2>

        <div className="space-y-20">
          {shops.map((shop, index) => (
            <motion.div
              key={shop.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-stretch`}
            >
              <Card className="w-full lg:w-1/2 group overflow-hidden border-none shadow-lg">
                <CardHeader className="p-0">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 1.2 }}
                    className="relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={shop.image}
                      alt={shop.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </CardHeader>
              </Card>

              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-light">{shop.name}</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="border-b border-gray-200 pb-4">
                    <span className="font-medium text-black">Address: </span>
                    {shop.address}
                  </p>
                  <p className="border-b border-gray-200 pb-4">
                    <span className="font-medium text-black">Tel: </span>
                    {shop.tel}
                  </p>
                  <p className="border-b border-gray-200 pb-4">
                    <span className="font-medium text-black">Hours: </span>
                    {shop.hours}
                  </p>
                  <p className="border-b border-gray-200 pb-4">
                    <span className="font-medium text-black">Holiday: </span>
                    {shop.holiday}
                  </p>
                  <p className="border-b border-gray-200 pb-4">
                    <span className="font-medium text-black">Access: </span>
                    {shop.access}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const shops: ShopInfo[] = [
  {
    id: 1,
    name: "sunnyside Omotesando",
    address: "〒150-0001 東京都渋谷区神宮前4-30-3 東郷神社前",
    tel: "03-1234-5678",
    hours: "10:00 - 20:00 (最終受付 19:00)",
    holiday: "毎週火曜日・第2水曜日",
    access: "東京メトロ表参道駅 A4出口より徒歩3分",
    image: "/images/shop1.jpeg",
  },
  {
    id: 2,
    name: "sunnyside Daikanyama",
    address: "〒150-0033 東京都渋谷区猿楽町10-8",
    tel: "03-9876-5432",
    hours: "11:00 - 21:00 (最終受付 20:00)",
    holiday: "毎週水曜日・第3木曜日",
    access: "東急東横線代官山駅 西口より徒歩5分",
    image: "/images/shop2.jpg",
  },
];
