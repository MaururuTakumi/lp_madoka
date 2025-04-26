'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Google Apps Script Webアプリのエンドポイント
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyvg7GeXLGknFjvAYbYIRCCun8H0HSEjVe_G6n2BBV3sc3MnXYZBg70QDl0DzTAGEei/exec';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formElements = form.elements as HTMLFormControlsCollection & {
        company: HTMLInputElement;
        name: HTMLInputElement;
        email: HTMLInputElement;
        phone: HTMLInputElement;
        message: HTMLTextAreaElement;
      };

      const payload = {
        company: formElements.company.value,
        name: formElements.name.value,
        email: formElements.email.value,
        phone: formElements.phone.value,
        message: formElements.message.value
      };

      // formDataを作成
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Google Apps ScriptのWebアプリに直接送信
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // CORS問題を回避
      });

      // 成功メッセージを表示
      toast.success('送信が完了しました。24時間以内に担当よりご連絡いたします。');
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('エラーが発生しました。再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">PoC 参加お申し込み</h2>
          <p className="text-lg text-muted-foreground">
            フォーム送信後、24時間以内に担当よりご連絡します。
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">ありがとうございます！</h3>
              <p className="text-lg">
                お問い合わせを受け付けました。<br />
                24時間以内に担当者からご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="company">会社名</Label>
                <Input 
                  id="company" 
                  name="company" 
                  placeholder="株式会社MADOKA" 
                  required 
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="name">お名前</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="山田 太郎" 
                  required 
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">メールアドレス</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="example@company.jp" 
                  required 
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">電話番号</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="03-1234-5678" 
                  required 
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">お問い合わせ内容</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="ご質問やご要望があればこちらにご記入ください"
                  rows={4}
                  className="mt-1"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? '送信中...' : '送信する'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}