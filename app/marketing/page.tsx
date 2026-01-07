"use client";

import React, { useState } from "react";
import { 
  Megaphone, 
  Ticket, 
  Copy, 
  Trash2, 
  BarChart3, 
  Bell, 
  Eye, 
  TrendingUp, 
  Zap, 
  Mail, 
  MousePointer2,
  X,
  RefreshCw,
  Calendar,
  Percent,
  Layers,
  CheckCircle2,
  Search
} from "lucide-react";

export default function MarketingPage() {
  // Modal (Pop-up) Durumu
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Yeni Özellik: Kapsam Durumu ('all' = Tüm Mağaza, 'specific' = Belirli Ürünler)
  const [validityScope, setValidityScope] = useState('all');

  // Dummy Ürün Listesi (Seçim yapmak için)
  const dummyProducts = [
    { id: 101, name: "TYT Matematik Video Seti" },
    { id: 102, name: "LGS Fen Bilimleri Soru Bankası" },
    { id: 103, name: "AYT Fizik Kampı" },
    { id: 104, name: "9. Sınıf Tüm Dersler" },
    { id: 105, name: "Geometri 101 (Video)" },
  ];

  const [coupons, setCoupons] = useState([
    { id: 1, name: "Yaz İndirimi 2025", code: "YAZ2025", discount: "% 25", used: "156 / 500", status: "Aktif", date: "31/08/2025" },
    { id: 2, name: "İlk Alışveriş Kuponu", code: "ILKALIM50", discount: "50 ₺", used: "89 / 200", status: "Aktif", date: "31/12/2025" },
    { id: 3, name: "Kış Fırsatları", code: "KIS2024", discount: "% 15", used: "234 / 300", status: "Pasif", date: "28/02/2025" },
    { id: 4, name: "Öğrenci İndirimi", code: "OGRENCI30", discount: "% 30", used: "67 / 150", status: "Aktif", date: "30/06/2025" },
    { id: 5, name: "Black Friday Özel", code: "BLACK50", discount: "% 50", used: "412 / 500", status: "Pasif", date: "30/11/2024" },
  ]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-12 font-sans text-gray-700 relative">
      
      {/* ---------------- HEADER ---------------- */}
      <div className="bg-white border-b border-gray-200 px-8 py-6 mb-8">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reklam ve Promosyon Yönetimi</h1>
            <p className="text-sm text-gray-500 mt-1">İndirim kuponları oluşturun, reklam kampanyalarınızı yönetin ve ürünlerinizi öne çıkarın.</p>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00AEEF] hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 transition-all active:scale-95 flex items-center gap-2"
          >
            <Ticket className="w-5 h-5" /> Yeni Kupon Oluştur
          </button>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">

          {/* ================= SOL GENİŞ ALAN ================= */}
          <div className="col-span-12 xl:col-span-8 space-y-8">
            
            {/* 1. KUPONLAR TABLOSU */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#00AEEF] rounded-lg">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-800">Aktif İndirim Kodları</h3>
                <span className="text-xs text-gray-400 font-medium ml-auto">Toplam {coupons.length} kupon</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kampanya Adı</th>
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kupon Kodu</th>
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">İndirim</th>
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kullanım</th>
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Durum</th>
                      <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Son Tarih</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {coupons.map((coupon) => (
                      <tr key={coupon.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-[#00AEEF] rounded-lg opacity-50 group-hover:opacity-100">
                               <Ticket className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-gray-700">{coupon.name}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-dashed border-blue-200 rounded-lg text-xs font-bold text-[#00AEEF] cursor-pointer hover:bg-blue-50 hover:border-[#00AEEF] transition-colors active:scale-95">
                            {coupon.code} <Copy className="w-3 h-3" />
                          </div>
                        </td>
                        <td className="p-4 text-sm font-bold text-green-600">{coupon.discount}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-600">{coupon.used}</span>
                            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[#00AEEF]" style={{ width: '35%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                            coupon.status === 'Aktif' 
                              ? 'bg-green-50 text-green-600 border-green-100' 
                              : 'bg-gray-50 text-gray-400 border-gray-100'
                          }`}>
                             {coupon.status === 'Aktif' ? '✓ Aktif' : 'Pasif'}
                          </span>
                        </td>
                        <td className="p-4 text-xs font-medium text-gray-500 text-right">{coupon.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. ALT KUTULAR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Duyurular */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bell className="w-32 h-32 rotate-12" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-purple-100">
                     <Bell className="w-4 h-4" /> Duyurular & Bildirimler
                   </h3>
                   <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                         <div className="flex items-center gap-3 mb-1">
                            <div className="p-1.5 bg-white/20 rounded-lg"><Bell className="w-4 h-4" /></div>
                            <span className="font-bold text-sm">Push Bildirim Gönder</span>
                         </div>
                         <p className="text-xs text-purple-100 pl-10">Tüm kullanıcılarınıza anlık mobil bildirim gönderin.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                         <div className="flex items-center gap-3 mb-1">
                            <div className="p-1.5 bg-white/20 rounded-lg"><Megaphone className="w-4 h-4" /></div>
                            <span className="font-bold text-sm">Site Duyurusu</span>
                         </div>
                         <p className="text-xs text-purple-100 pl-10">Sitenizin en üstünde bant reklam yayınlayın.</p>
                      </div>
                   </div>
                 </div>
              </div>

              {/* İstatistikler */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                       <TrendingUp className="w-5 h-5 text-[#00AEEF]" /> Kampanya İstatistikleri
                    </h3>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-medium text-gray-500">Aktif Kupon Sayısı</span>
                       <span className="text-xl font-black text-[#00AEEF]">3</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-medium text-gray-500">Toplam Kullanım</span>
                       <span className="text-xl font-black text-green-600">958</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                       <span className="text-sm font-medium text-gray-500">Ortalama İndirim</span>
                       <span className="text-xl font-black text-orange-500">30%</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* ================= SAĞ DAR ALAN ================= */}
          <div className="col-span-12 xl:col-span-4">
             <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                   <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                      <Zap className="w-5 h-5" />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-800">Öne Çıkarma Paketleri</h3>
                      <p className="text-xs text-gray-400">Ürünlerinizin görünürlüğünü artırın.</p>
                   </div>
                </div>

                <div className="space-y-4">
                   {[
                      { title: 'Ana Sayfa Vitrini', desc: 'Anasayfada görünür', active: true, icon: Eye },
                      { title: 'Kategori Üstü', desc: 'Kategori sayfalarında öne çıkar', active: false, icon: TrendingUp },
                      { title: 'Arama Vurgulama', desc: 'Arama sonuçlarında öne çıkar', active: true, icon: MousePointer2 },
                      { title: 'E-posta Pazarlama', desc: 'Kullanıcılara mail gönder', active: false, icon: Mail },
                   ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                         <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${item.active ? 'bg-blue-50 text-[#00AEEF]' : 'bg-gray-100 text-gray-400'}`}>
                               <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                               <h4 className="text-sm font-bold text-gray-700">{item.title}</h4>
                               <p className="text-[10px] text-gray-400">{item.desc}</p>
                            </div>
                         </div>
                         <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${item.active ? 'bg-[#00AEEF]' : 'bg-gray-200'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${item.active ? 'translate-x-5' : 'translate-x-0'}`}></div>
                         </div>
                      </div>
                   ))}
                </div>
                <button className="w-full mt-6 bg-[#00AEEF] hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 transition-colors">
                   Ayarları Kaydet
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* ======================= POP-UP MODAL ALANI ======================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm transition-all animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="bg-[#00AEEF] p-6 flex items-center justify-between sticky top-0 z-10">
              <h2 className="text-white text-lg font-bold flex items-center gap-2">
                <Ticket className="w-5 h-5" /> Yeni Kupon Oluştur
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              
              {/* Kampanya Adı */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Kampanya Adı</label>
                <input type="text" placeholder="Örn: Yılbaşı İndirimi" className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none" />
              </div>

              {/* Kupon Kodu (Oto Oluştur Butonlu) */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Kupon Kodu</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="KUPON2025" className="flex-1 h-11 px-4 rounded-xl border border-gray-200 text-sm font-bold tracking-wider text-gray-700 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none uppercase" />
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl flex items-center gap-2 text-xs font-bold transition-colors">
                    <RefreshCw className="w-4 h-4" /> Rastgele
                  </button>
                </div>
              </div>

              {/* YENİ: GEÇERLİLİK KAPSAMI */}
              <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Geçerlilik Kapsamı</label>
                 <div className="grid grid-cols-2 gap-2 bg-gray-50 p-1 rounded-xl border border-gray-200">
                    <button 
                      onClick={() => setValidityScope('all')}
                      className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${validityScope === 'all' ? 'bg-white text-[#00AEEF] shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Layers className="w-3 h-3" /> Tüm Mağaza
                    </button>
                    <button 
                      onClick={() => setValidityScope('specific')}
                      className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${validityScope === 'specific' ? 'bg-white text-[#00AEEF] shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <CheckCircle2 className="w-3 h-3" /> Belirli Ürünlerde
                    </button>
                 </div>

                 {/* Ürün Seçici (Sadece 'Specific' seçiliyse görünür) */}
                 {validityScope === 'specific' && (
                    <div className="mt-3 border border-gray-200 rounded-xl p-3 bg-gray-50/50 animate-in slide-in-from-top-2">
                       <div className="relative mb-2">
                          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
                          <input type="text" placeholder="Ürün ara..." className="w-full h-8 pl-8 pr-3 rounded-lg border border-gray-200 text-xs focus:border-[#00AEEF] outline-none" />
                       </div>
                       <div className="max-h-32 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                          {dummyProducts.map((prod) => (
                             <label key={prod.id} className="flex items-center gap-2 p-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-blue-200 transition-colors">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00AEEF] focus:ring-[#00AEEF]" />
                                <span className="text-xs font-bold text-gray-700">{prod.name}</span>
                             </label>
                          ))}
                       </div>
                       <p className="text-[10px] text-gray-400 mt-2 text-center">Seçilen ürünlerde kupon geçerli olacaktır.</p>
                    </div>
                 )}
              </div>

              {/* İndirim Tipi ve Değeri */}
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">İndirim Tipi</label>
                    <div className="grid grid-cols-2 gap-2 bg-gray-50 p-1 rounded-xl border border-gray-200">
                       <button className="py-2 rounded-lg bg-white shadow-sm text-xs font-bold text-[#00AEEF] border border-gray-100 flex items-center justify-center gap-1"><Percent className="w-3 h-3" /> Yüzde</button>
                       <button className="py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1">₺ Tutar</button>
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Değer</label>
                    <input type="number" placeholder="10" className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm font-bold focus:border-[#00AEEF] outline-none" />
                 </div>
              </div>

              {/* Tarih */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Son Kullanma Tarihi</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                  <input type="date" className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:border-[#00AEEF] outline-none text-gray-600" />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3 sticky bottom-0 z-10">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 rounded-xl font-bold text-sm text-gray-600 hover:bg-gray-200 transition-colors">
                Vazgeç
              </button>
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-[#00AEEF] hover:bg-blue-600 shadow-lg shadow-blue-100 transition-colors">
                Kuponu Oluştur
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}