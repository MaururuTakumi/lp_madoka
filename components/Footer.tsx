import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">製品リンク</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-accent transition-colors">機能</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">サポートリンク</h3>
            <ul className="space-y-2">
              <li><Link href="#faq" className="hover:text-accent transition-colors">よくある質問</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p>© 2025 MADOKA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}