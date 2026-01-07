"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Store,
  Package,
  ShoppingCart,
  Wallet,
  Megaphone,
  FileText,
  Bell,
  ShoppingBag,
  ChevronDown,
  CheckCircle2,
  Star
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* 1. Üst Banner (Mavi) */}
      <div className="bg-[#00AEEF] text-white text-center py-2 text-xs font-semibold tracking-wider">
        KARLI BİR SATIŞI ~ Seçkin yayıncı ve yayınevleri ile birlikte ayrıcalıklı kaliteli ve kolay içerik yönetimi.
      </div>

      {/* 2. Ana Header (Üst Satır: Logo, Menü, Profil) */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#00AEEF] p-1.5 rounded-lg">
              <Store className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-800 tracking-tight leading-none">
                gelecek<span className="text-[#00AEEF]">.app</span>
              </span>
              <span className="text-[10px] text-gray-500 font-medium leading-none">Yayıncı Paneli</span>
            </div>
          </Link>

          {/* Orta Menü (Dropdown) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="/" className="flex items-center gap-1 hover:text-[#00AEEF] transition-colors">
              Anasayfa <ChevronDown className="w-4 h-4" />
            </Link>
            <button className="flex items-center gap-1 hover:text-[#00AEEF] transition-colors">
              Blog <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="https://demo-magaza.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#00AEEF] transition-colors">
              Mağaza <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Sağ Taraf (Bildirimler, Profil) */}
          <div className="flex items-center gap-3">
            {/* Çanta İkonu */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full border-2 border-white">2</span>
            </button>
            {/* Zil İkonu */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full border-2 border-white">3</span>
            </button>
            {/* Profil Resmi */}
            <div className="w-9 h-9 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full cursor-pointer hover:opacity-90 transition-opacity"></div>
          </div>
        </div>
      </div>

      {/* 3. Header (Alt Satır: Yayıncı Adı, Navigasyon Butonları) */}
      <div className="max-w-[1800px] mx-auto px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Sol: Yayıncı Adı */}
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-800">ABC Yayınları</h2>
          <CheckCircle2 className="w-5 h-5 text-[#00AEEF] fill-current" />
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </div>

        {/* Sağ: Navigasyon Butonları ve Rapor */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {/* Navigasyon Butonları */}
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                pathname === "/"
                  ? "bg-[#00AEEF] text-white hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Store className="w-4 h-4" /> Panel
            </Link>
            <Link 
              href="/products" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                pathname.startsWith("/products")
                  ? "bg-[#00AEEF] text-white hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Package className="w-4 h-4" /> Ürünler
            </Link>
            <Link 
              href="/orders" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                pathname.startsWith("/orders")
                  ? "bg-[#00AEEF] text-white hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <ShoppingCart className="w-4 h-4" /> Siparişler
            </Link>
            <Link 
              href="/payments" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                pathname.startsWith("/payments")
                  ? "bg-[#00AEEF] text-white hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Wallet className="w-4 h-4" /> Ödemeler
            </Link>
            <Link 
              href="/marketing" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                pathname.startsWith("/marketing")
                  ? "bg-[#00AEEF] text-white hover:bg-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Megaphone className="w-4 h-4" /> Reklam ve Kod Yönetimi
            </Link>
          </div>

          {/* Ayırıcı Çizgi */}
          <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>

          {/* Satış Raporu Butonu */}
          <button className="flex items-center gap-2 px-5 py-2 bg-[#00AEEF] text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors uppercase whitespace-nowrap">
            <FileText className="w-4 h-4" /> SATIŞ RAPORU
          </button>
        </div>
      </div>
    </header>
  );
}
