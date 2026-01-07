"use client";

import React, { useState } from "react";
import { ShoppingBag, Calendar, Filter, Eye, Download, MoreVertical } from "lucide-react";

// DUMMY DATA (Sipariş Verileri)
const orders = [
  { 
    id: 14325235, 
    product: "A'dan Z'ye Matematik Soru Bankası", 
    date: "09/11/2025", 
    buyer: "cuneytcan", 
    amount: "899,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Yüklendi",
    profileColor: "#10b981"
  },
  { 
    id: 22134115, 
    product: "YKS Türkçe Video Paketi", 
    date: "09/11/2025", 
    buyer: "cannn", 
    amount: "1.299,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Hazırlanıyor",
    profileColor: "#f59e0b"
  },
  { 
    id: 32134124, 
    product: "LGS Matematik Test Çözümleri", 
    date: "08/11/2025", 
    buyer: "bannk", 
    amount: "499,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Yüklendi",
    profileColor: "#8b5cf6"
  },
  { 
    id: 41251351, 
    product: "KPSS Genel Kültür Kitap Seti", 
    date: "08/11/2025", 
    buyer: "saffet", 
    amount: "1.599,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Kargo Bekliyor",
    profileColor: "#ec4899"
  },
  { 
    id: 52341234, 
    product: "Fizik Video Dersleri Premium", 
    date: "07/11/2025", 
    buyer: "haakkan", 
    amount: "999,00 ₺", 
    paymentStatus: "İptal", 
    cargoStatus: "İptal",
    profileColor: "#ef4444"
  },
  { 
    id: 62134123, 
    product: "Kimya Deney Videoları", 
    date: "07/11/2025", 
    buyer: "salimal", 
    amount: "799,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Yüklendi",
    profileColor: "#06b6d4"
  },
  { 
    id: 75463223, 
    product: "Biyoloji Test Bankası", 
    date: "06/11/2025", 
    buyer: "mongol", 
    amount: "599,00 ₺", 
    paymentStatus: "Bekliyor", 
    cargoStatus: "Bekliyor",
    profileColor: "#84cc16"
  },
  { 
    id: 82342143, 
    product: "Tarih Özet Notlar", 
    date: "06/11/2025", 
    buyer: "turkken", 
    amount: "399,00 ₺", 
    paymentStatus: "Ödendi", 
    cargoStatus: "Yüklendi",
    profileColor: "#f97316"
  }
];

export default function OrdersPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      
      {/* ---------------- SOL SIDEBAR (FİLTRELER) ---------------- */}
      <aside className="w-72 bg-white border-r border-gray-200 hidden xl:block flex-shrink-0 p-6">
        
        {/* Sidebar Başlık */}
        <div className="flex items-center gap-2 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg" style={{ color: "#00AEEF" }}>
            <ShoppingBag className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-800 text-sm tracking-wide">SİPARİŞLER</h2>
        </div>

        <div className="space-y-6">
          
          {/* Durum Filtresi */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Sipariş Durumu</h3>
            <div className="space-y-3">
              {['Tümü', 'Satışlar (156)', 'Kargo Bekleyen (23)', 'İade (5)'].map((item, idx) => (
                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 focus:ring-[#00AEEF]"
                    style={{ accentColor: "#00AEEF" }}
                  />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-[#00AEEF] transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tarih Aralığı */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Tarih Aralığı</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Başlangıç</label>
                <div className="relative">
                  <input 
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full h-10 px-3 bg-white border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Bitiş</label>
                <div className="relative">
                  <input 
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-10 px-3 bg-white border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Filtrele Butonu */}
          <button 
            className="w-full h-12 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
            style={{ backgroundColor: "#00AEEF" }}
          >
            <Filter className="w-5 h-5" />
            Filtrele
          </button>
        </div>
      </aside>

      {/* ---------------- SAĞ İÇERİK (SİPARİŞ TABLOSU) ---------------- */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 max-w-[1800px] mx-auto">
          
          {/* ÜST BAŞLIK */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Siparişler</h1>
            <p className="text-sm text-gray-500">Yaptığınız ücretli / ücretsiz tüm satışlarınızı, bekleyen kargolarınızı bu alanda görüntüleyebilirsiniz.</p>
          </div>

          {/* TABLO (RESPONSIVE) */}
          <div className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* TABLO BAŞLIKLARI */}
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sipariş No</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ürün Adı</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sipariş Tarihi</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Satın Alan Profil</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sipariş Notu</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kargo</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ürün Faturası</th>
                  </tr>
                </thead>

                {/* TABLO GÖVDESİ */}
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      
                      {/* Sipariş No */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold text-gray-800">{order.id}</span>
                      </td>

                      {/* Ürün Adı */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-700 line-clamp-1 max-w-[250px]">{order.product}</span>
                      </td>

                      {/* Tarih */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{order.date}</span>
                      </td>

                      {/* Alıcı (Profil Avatar + İsim) */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: order.profileColor }}
                          >
                            {order.buyer.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{order.buyer}</span>
                        </div>
                      </td>

                      {/* Tutar */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-bold" style={{ color: "#00AEEF" }}>{order.amount}</span>
                      </td>

                      {/* Kargo Durumu (Badge) */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                          ${order.cargoStatus === 'Yüklendi' ? 'bg-green-50 text-green-600 border border-green-100' :
                            order.cargoStatus === 'Hazırlanıyor' || order.cargoStatus === 'Bekliyor' || order.cargoStatus === 'Kargo Bekliyor' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                            order.cargoStatus === 'İptal' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-gray-50 text-gray-600 border border-gray-100'}`}>
                          {order.cargoStatus}
                        </span>
                      </td>

                      {/* İşlem Butonları */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Detay">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="İndir">
                            <Download className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Daha Fazla">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TABLO ALT BİLGİ (PAGİNATİON) */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Toplam <span className="font-bold text-gray-800">{orders.length}</span> sipariş gösteriliyor
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Önceki
                </button>
                <button 
                  className="px-4 py-2 text-white rounded-lg text-sm font-bold transition-colors"
                  style={{ backgroundColor: "#00AEEF" }}
                >
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Sonraki
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
