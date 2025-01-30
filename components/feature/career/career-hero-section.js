"use client";

import { motion } from "framer-motion";
import { MapIcon } from "lucide-react";
import Image from "next/image";

// カテゴリーリストの定義
const categories = [
  { id: 1, title: "未経験からUIUXデザイナーになれるの？" },
  { id: 2, title: "身につけるスキル" },
  { id: 4, title: "ポートフォリオ作成" },
  { id: 5, title: "未経験で転職した人のインタビュー" },
  { id: 6, title: "採用と面接" },
];

// アニメーションのバリエーション定義
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// 子要素を順番にアニメーションさせるコンテナのバリエーション
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 子要素のアニメーション間隔
      delayChildren: 0.3, // 最初の子要素のディレイ
    },
  },
};

// アイコンのアニメーション
const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-24">
      <div className="space-y-8">
        {/* パンくずリスト */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-sm text-gray-600"
        >
          キャリアガイド / UIUXデザイナー転職攻略
        </motion.div>

        {/* アイコン */}
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center"
        >
          <MapIcon className="w-8 h-8 text-blue-600" />
        </motion.div>

        {/* タイトルと説明文 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold"
          >
            UIUXデザイナー転職攻略ガイド
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            未経験からUIUXデザイナーに
            <br />
            なりたいひとの不安をとりのぞく
          </motion.p>
        </motion.div>

        {/* 著者情報 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center space-x-3"
        >
          <motion.div variants={fadeInUp}>
            <Image
              src=""
              alt="Author"
              width={40}
              height={40}
              className="rounded-full"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm">
            <p className="text-gray-500">Written by</p>
            <p className="font-medium">カイタンってんが使いてるよ</p>
          </motion.div>
        </motion.div>

        {/* カテゴリー一覧 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.h2 variants={fadeInUp} className="text-lg font-semibold">
            カテゴリ
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                custom={index}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="text-gray-400 mr-2">{category.id}</span>
                {category.title}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
