import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Sol Taraf: Copyright */}
          <div className="text-xs text-gray-400">
            © 2026 Gelecek.app - Tüm hakları saklıdır.
          </div>

          {/* Sağ Taraf: Linkler */}
          <div className="flex items-center gap-6">
            <Link 
              href="/terms" 
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Kullanım Şartları
            </Link>
            <Link 
              href="/privacy" 
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link 
              href="/kvkk" 
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              KVKK
            </Link>
            <Link 
              href="/help" 
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Yardım
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
