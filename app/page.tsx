import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      
      {/* Employee balance section */}
      <section id="employee" className="py-24 bg-bg-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Screenshot */}
          <div className="flex-1 max-w-[360px] mx-auto md:mx-0">
            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <img
                src="/images/employee-balance.png?v=1"
                alt="従業員アプリの残高画面"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxWidth: '360px',
                  display: 'block'
                }}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">従業員は &ldquo;いま受け取れる金額&rdquo; が<br className="hidden md:block" />ひと目で分かります</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>シフト終了後に自動で残高が更新</li>
              <li>「即払いを申請する」ボタンで24時間いつでも受け取り</li>
              <li>利用履歴・残高推移もアプリに保存</li>
            </ul>
            <p className="text-sm text-gray-600">※バーチャルカード提供までは銀行振込で対応</p>
          </div>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}