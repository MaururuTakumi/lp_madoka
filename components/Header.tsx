'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          MADOKA
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="font-medium hover:text-primary transition-colors"
          >
            機能
          </Link>
          <Link 
            href="#faq" 
            className="font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Button asChild>
            <Link href="#contact">PoC 無料参加</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
            <Link 
              href="#features" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              機能
            </Link>
            <Link 
              href="#faq" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button 
              asChild 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#contact">PoC 無料参加</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}