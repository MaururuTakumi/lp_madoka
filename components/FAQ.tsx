'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'PoC 期間 / 料金は？',
    answer: '4 週間、完全無料です。',
  },
  {
    question: '必要な準備は？',
    answer: '勤怠 CSV の提供と Slack または LINE グループ。',
  },
  {
    question: '送金フローは？',
    answer: '弊社立替→月末精算。手数料も弊社負担。',
  },
  {
    question: 'カード発行の予定は？',
    answer: 'バーチャルカードを 90 日以内に提供予定。',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">PoC よくある質問</h2>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}