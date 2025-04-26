'use client';

import { Clock, CalendarPlus, CreditCard, Bell, BarChart, ShieldCheck } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'リアルタイム打刻',
    description: 'GPS・IC・モバイル対応',
  },
  {
    icon: CalendarPlus,
    title: 'AIシフト補充',
    description: '欠員を自動検知&提案',
  },
  {
    icon: CreditCard,
    title: '給与即払い',
    description: 'Visa プリペイドに日次チャージ',
  },
  {
    icon: Bell,
    title: '未打刻アラート',
    description: '打刻漏れを即通知',
  },
  {
    icon: BarChart,
    title: 'CSV / API 連携',
    description: '給与ソフト & BI 対応',
  },
  {
    icon: ShieldCheck,
    title: 'セキュリティ',
    description: 'ISO/IEC 27001・TLS1.2',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">主な機能</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            シフト管理・リアルタイム打刻・給与即払いをワンプラットフォームで
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}