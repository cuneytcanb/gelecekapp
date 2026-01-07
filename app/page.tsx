"use client";

import React from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Wallet, 
  ShoppingBag, 
  Package, 
  Bell, 
  Plus, 
  Ticket, 
  ArrowRight,
  ExternalLink // Yeni İkon
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-12 font-sans text-gray-700">
      
      {/* ---------------- 1. HERO BÖLÜMÜ (YUMUŞATILMIŞ GRADIENT) ---------------- */}
      <div className="relative bg-gradient-to-r from-[#00AEEF] to-[#0077C2] pt-12 pb-32 px-6 md:px-8 overflow-hidden">
        
        {/* Dekoratif Arka Plan Çemberleri */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          
          {/* Sol: Karşılama */}
          <div className="text-white">
            <h1 className="text-3xl font-bold tracking-tight">Hoş Geldiniz, ABC Yayınları 👋</h1>
            <p className="text-blue-50 mt-2 text-sm font-medium opacity-90">
              Bugün mağazanızdaki hareketlilik harika görünüyor.
            </p>
          </div>

          {/* Sağ: MAĞAZAYI GÖRÜNTÜLE BUTONU (YENİ) */}
          <div>
            <Link href="https://demo-magaza.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-sm font-bold backdrop-blur-md transition-all flex items-center gap-2 shadow-sm hover:shadow-md group">
                <span className="bg-green-400 w-2 h-2 rounded-full animate-pulse"></span>
                Mağazayı Görüntüle
                <ExternalLink className="w-4 h-4 text-blue-100 group-hover:text-white transition-colors" />
              </button>
            </Link>
          </div>

        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-20 relative z-20">
        
        {/* ---------------- 2. KPI KARTLARI ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Kart 1: Toplam Kazanç */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-100/50 border border-white hover:-translate-y-1 transition-transform duration-300">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 text-[#00AEEF] rounded-xl">
                   <Wallet className="w-6 h-6" />
                </div>
                <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 border border-green-100">
                   <TrendingUp className="w-3 h-3" /> %12.5
                </span>
             </div>
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Toplam Kazanç</p>
                <h3 className="text-2xl font-black text-gray-800 mt-1">127.450 ₺</h3>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">Geçen aya göre +12.450 ₺</p>
             </div>
          </div>

          {/* Kart 2: Toplam Satış */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-100/50 border border-white hover:-translate-y-1 transition-transform duration-300">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                   <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 border border-green-100">
                   <TrendingUp className="w-3 h-3" /> %8.2
                </span>
             </div>
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Toplam Satış</p>
                <h3 className="text-2xl font-black text-gray-800 mt-1">1,245 Adet</h3>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">Bu hafta 45 yeni sipariş</p>
             </div>
          </div>

          {/* Kart 3: Aktif Ürün */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-100/50 border border-white hover:-translate-y-1 transition-transform duration-300">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                   <Package className="w-6 h-6" />
                </div>
             </div>
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mağaza Durumu</p>
                <h3 className="text-2xl font-black text-gray-800 mt-1">32 Ürün</h3>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">Yayında olan içerikler</p>
             </div>
          </div>

          {/* Kart 4: Uyarılar */}
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-red-50/50 border border-white hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
             <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
             
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                      <Bell className="w-6 h-6" />
                   </div>
                   <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg text-[10px] font-bold border border-red-100 animate-pulse">
                      Aksiyon
                   </span>
                </div>
                <div>
                   <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Bekleyen İşler</p>
                   <h3 className="text-2xl font-black text-gray-800 mt-1">5 Sipariş</h3>
                   <p className="text-[10px] text-red-400 mt-1 font-medium">Kargo onayı bekleniyor</p>
                </div>
             </div>
          </div>

        </div>

        {/* ---------------- 3. GRAFİK VE KISAYOLLAR ---------------- */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8 mb-8">
          
          {/* SOL: Satış Grafiği */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
             <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Haftalık Performans</h3>
                  <p className="text-xs text-gray-400 mt-1">Son 7 günlük satış trendiniz.</p>
                </div>
                <select className="bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 rounded-lg px-3 py-2 outline-none cursor-pointer hover:bg-gray-100 transition-colors">
                  <option>Bu Hafta</option>
                  <option>Geçen Hafta</option>
                </select>
             </div>

             <div className="h-64 flex items-end justify-between gap-4 px-2 border-b border-gray-50 pb-2 relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                   {[1,2,3,4].map(k => <div key={k} className="w-full h-px bg-gray-50 border-t border-dashed border-gray-100"></div>)}
                </div>

                {[45, 70, 40, 90, 60, 85, 50].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 flex-1 group cursor-pointer relative z-10">
                    <div className="w-full max-w-[40px] md:max-w-[50px] bg-blue-50/50 rounded-t-lg overflow-hidden h-52 flex items-end relative">
                       <div 
                         style={{ height: `${h}%` }} 
                         className="w-full bg-[#00AEEF] opacity-90 group-hover:opacity-100 group-hover:bg-blue-600 transition-all duration-500 rounded-t-lg relative shadow-sm"
                       ></div>
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg pointer-events-none">
                           {h * 120} ₺
                       </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase group-hover:text-[#00AEEF] transition-colors">
                      {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][i]}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          {/* SAĞ: Kısayollar ve Özet */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
             
             {/* Kısayollar */}
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider text-gray-400">
                   Hızlı Erişim
                </h3>
                <div className="space-y-3">
                   <Link href="/products/new">
                     <button className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-blue-50 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 transition-all flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400 group-hover:text-[#00AEEF] transition-colors">
                              <Plus className="w-5 h-5" />
                           </div>
                           <span className="text-sm font-bold text-gray-600 group-hover:text-[#00AEEF]">Yeni Ürün Ekle</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all" />
                     </button>
                   </Link>

                   <Link href="/marketing">
                     <button className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-purple-50 hover:border-purple-100 hover:shadow-md hover:shadow-purple-50 transition-all flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400 group-hover:text-purple-600 transition-colors">
                              <Ticket className="w-5 h-5" />
                           </div>
                           <span className="text-sm font-bold text-gray-600 group-hover:text-purple-600">Kupon Oluştur</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                     </button>
                   </Link>
                </div>
             </div>

             {/* Son Siparişler Özeti */}
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider text-gray-400">Son Hareketler</h3>
                   <Link href="/orders" className="text-[10px] font-bold text-[#00AEEF] hover:underline uppercase">Tümü</Link>
                </div>
                <div className="space-y-1">
                   {[
                     { text: 'Ahmet Yılmaz', sub: 'TYT Mat Seti', price: '+899₺', time: '10dk', icon: 'A' },
                     { text: 'Selin Demir', sub: 'LGS Fen Bilimleri', price: '+450₺', time: '32dk', icon: 'S' },
                     { text: 'Stok Uyarısı', sub: 'Geometri Soru Bankası', price: 'KRİTİK', time: '1sa', alert: true },
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between py-3 px-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${item.alert ? 'bg-red-50 text-red-500 border-red-100' : 'bg-blue-50 text-[#00AEEF] border-blue-100 group-hover:bg-[#00AEEF] group-hover:text-white'}`}>
                              {item.alert ? '!' : item.icon}
                           </div>
                           <div>
                              <p className="text-sm font-bold text-gray-700">{item.text}</p>
                              <p className="text-[10px] text-gray-400">{item.sub}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className={`text-xs font-bold ${item.alert ? 'text-red-500' : 'text-green-600'}`}>{item.price}</p>
                           <p className="text-[10px] text-gray-300">{item.time}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

          </div>

        </div>

      </div>
    </div>
  );
}