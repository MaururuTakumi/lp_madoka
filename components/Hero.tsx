'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <section id="hero" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main">
            勤怠 & 給与先払いを<br className="hidden md:block" />1クリックで検証。
          </h1>
          <p className="text-lg">
            シフト管理・リアルタイム打刻・ Visa 即払いカードを
            <strong className="text-primary"> 無償 PoC </strong>でご提供します。
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="#contact">デモを依頼する</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">問い合わせ</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 max-w-[540px] w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-custom shadow-lg bg-gray-100">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}
            
            {!imageError ? (
              <Image
                src="/hero-dashboard.png"
                alt="MADOKAダッシュボードの表示画面"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                className="object-cover"
                priority
                onLoadingComplete={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
                }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJRQPNOCBt9QAAAABJRU5ErkJggg=="
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                <p>画像を読み込めませんでした</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}