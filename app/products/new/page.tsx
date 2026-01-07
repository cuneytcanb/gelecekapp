"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  BookOpen, 
  Package, 
  MonitorPlay, 
  MoreHorizontal, 
  Video, 
  FileText, 
  Image as ImageIcon, 
  HelpCircle, 
  Plus, 
  Check, 
  Trash2,
  File
} from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  // Durum Yönetimi (State)
  const [category, setCategory] = useState("digital"); // Varsayılan: Dijital
  const [contentType, setContentType] = useState("test"); // Alt paneldeki sekme (video, test, pdf)

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-32 font-sans text-gray-700">
      
      {/* ---------------- HEADER (ÜST BAR) ---------------- */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-6 py-4 shadow-sm">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/products" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-500" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Yeni Ürün Ekle</h1>
              <p className="text-xs text-gray-500">Ürün bilgilerinizi girip satışa başlayabilirsiniz.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors uppercase">
              Taslak Kaydet
            </button>
            <button className="px-5 py-2.5 text-xs font-bold text-white bg-[#00AEEF] rounded-lg hover:bg-blue-600 shadow-md shadow-blue-100 transition-colors uppercase flex items-center gap-2">
              <Save className="w-4 h-4" /> Kaydet ve Yayınla
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- ANA İÇERİK ---------------- */}
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">

          {/* ================= SOL KOLON (ANA BİLGİLER) ================= */}
          <div className="col-span-12 xl:col-span-8 space-y-6">
            
            {/* KART 1: KATEGORİ VE ÜRÜN ADI */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">1. Kategori ve Kimlik</h3>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Kategori Seçimi */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Ürün Kategorisi</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: 'book', label: 'Kitap', icon: BookOpen },
                      { id: 'stationery', label: 'Kırtasiye', icon: Package },
                      { id: 'digital', label: 'Dijital İçerik', icon: MonitorPlay },
                      { id: 'other', label: 'Diğer', icon: MoreHorizontal },
                    ].map((cat) => (
                      <div 
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`
                          cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all
                          ${category === cat.id 
                            ? 'border-[#00AEEF] bg-blue-50/50 text-[#00AEEF]' 
                            : 'border-gray-100 hover:border-blue-200 text-gray-500'}
                        `}
                      >
                        <cat.icon className={`w-6 h-6 mb-2 ${category === cat.id ? 'text-[#00AEEF]' : 'text-gray-400'}`} />
                        <span className="text-sm font-bold">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Ürün Adı ve Açıklama */}
                <div className="grid grid-cols-2 gap-5">
                   <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Ürün Adı <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Örn: 8. Sınıf LGS Matematik Soru Bankası" 
                        className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none transition-all placeholder-gray-400" 
                      />
                   </div>
                   <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">İlgili Sınıf / Seviye</label>
                      <select className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none bg-white">
                        <option>Seçiniz</option>
                        <option>LGS (8. Sınıf)</option>
                        <option>YKS (TYT/AYT)</option>
                        <option>Ara Sınıflar</option>
                      </select>
                   </div>
                   <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-600 mb-1.5">Ürün Açıklaması</label>
                      <textarea 
                        rows={3} 
                        placeholder="Ürün hakkında öğrencilerin göreceği kısa açıklama..." 
                        className="w-full p-4 rounded-lg border border-gray-300 text-sm focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none transition-all resize-none placeholder-gray-400"
                      ></textarea>
                   </div>
                </div>
              </div>
            </div>

            {/* KART 2: KAMPANYA VE PAKET */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative group">
                 <button className="absolute top-4 right-4 text-[10px] font-bold text-[#00AEEF] border border-blue-100 bg-blue-50 px-2.5 py-1 rounded hover:bg-[#00AEEF] hover:text-white transition-colors">
                   + EKLE
                 </button>
                 <h3 className="text-xs font-bold text-gray-400 uppercase mb-3">İskonto (Kampanya)</h3>
                 <div className="flex gap-3">
                    <div className="flex-1 h-10 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg text-xs text-gray-400 bg-gray-50">
                       Ürün seçimi yapınız...
                    </div>
                    <div className="w-20 h-10 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg text-xs text-gray-400 bg-gray-50">
                       % Oran
                    </div>
                 </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative group">
                 <button className="absolute top-4 right-4 text-[10px] font-bold text-[#00AEEF] border border-blue-100 bg-blue-50 px-2.5 py-1 rounded hover:bg-[#00AEEF] hover:text-white transition-colors">
                   + EKLE
                 </button>
                 <h3 className="text-xs font-bold text-gray-400 uppercase mb-3">Paket Oluştur</h3>
                 <div className="h-10 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg text-xs text-gray-400 bg-gray-50">
                    Paket yapılacak ürünleri seçiniz...
                 </div>
              </div>
            </div>

            {/* KART 3: DİJİTAL İÇERİK YÖNETİMİ (PDF SAYFA 4 MANTIĞI) */}
            {category === 'digital' && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                     <MonitorPlay className="w-4 h-4 text-[#00AEEF]" /> Dijital İçerik Yönetimi
                   </h3>
                   
                   {/* Sekmeler */}
                   <div className="flex p-1 bg-white rounded-lg border border-gray-200 shadow-sm">
                      {[
                        { id: 'video', label: 'Video', icon: Video },
                        { id: 'pdf', label: 'PDF', icon: FileText },
                        { id: 'test', label: 'Test / Soru', icon: HelpCircle },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setContentType(tab.id)}
                          className={`
                            px-4 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 transition-all
                            ${contentType === tab.id ? 'bg-[#00AEEF] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}
                          `}
                        >
                          <tab.icon className="w-3.5 h-3.5" /> {tab.label}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="p-6 bg-[#F8FAFC]">
                   
                   {/* TEST MODU */}
                   {contentType === 'test' && (
                     <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                           <label className="block text-xs font-bold text-gray-600 mb-2">Soru Metni</label>
                           <textarea className="w-full p-4 rounded-lg border border-gray-300 text-sm focus:border-[#00AEEF] focus:ring-1 focus:ring-blue-100 outline-none resize-none" rows={3} placeholder="Sorunuzu buraya yazın..."></textarea>
                           
                           {/* Medya Yükleme (Küçük) */}
                           <div className="mt-3 flex items-center gap-3">
                              <button className="text-xs font-bold text-[#00AEEF] flex items-center gap-1 hover:underline">
                                <ImageIcon className="w-4 h-4" /> Görsel Ekle
                              </button>
                              <span className="text-gray-300">|</span>
                              <span className="text-[10px] text-gray-400">Soruya ait grafik veya resim varsa ekleyebilirsiniz.</span>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {/* Şıklar */}
                           <div className="space-y-3">
                              {['A', 'B', 'C', 'D', 'E'].map((opt) => (
                                <div key={opt} className="flex items-center gap-3">
                                   <span className="w-6 text-sm font-bold text-gray-400 text-center">{opt})</span>
                                   <input type="text" className="flex-1 h-10 px-3 rounded border border-gray-300 text-sm focus:border-[#00AEEF] outline-none" placeholder={`Seçenek ${opt}`} />
                                </div>
                              ))}
                           </div>

                           {/* Doğru Cevap Seçimi */}
                           <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col items-center justify-center">
                              <span className="text-xs font-bold text-gray-500 uppercase mb-4">Doğru Cevabı İşaretleyin</span>
                              <div className="flex gap-4">
                                {['A', 'B', 'C', 'D', 'E'].map((opt) => (
                                  <label key={opt} className="cursor-pointer group relative">
                                    <input type="radio" name="correct_answer" className="peer sr-only" />
                                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-400 peer-checked:bg-[#00AEEF] peer-checked:text-white peer-checked:border-[#00AEEF] transition-all group-hover:border-blue-200">
                                       {opt}
                                    </div>
                                  </label>
                                ))}
                              </div>
                           </div>
                        </div>
                     </div>
                   )}

                   {/* VIDEO MODU */}
                   {contentType === 'video' && (
                      <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-10 flex flex-col items-center justify-center text-center">
                         <div className="w-12 h-12 bg-blue-50 text-[#00AEEF] rounded-full flex items-center justify-center mb-3">
                            <Video className="w-6 h-6" />
                         </div>
                         <h4 className="text-sm font-bold text-gray-700">Video Ders Yükle</h4>
                         <p className="text-xs text-gray-400 mt-1">MP4, MOV formatında maksimum 500MB</p>
                         <button className="mt-4 px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded hover:bg-blue-600 transition-colors">Dosya Seç</button>
                      </div>
                   )}

                   {/* PDF MODU (BUNU EKLEDİM) */}
                   {contentType === 'pdf' && (
                      <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-10 flex flex-col items-center justify-center text-center">
                         <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
                            <FileText className="w-6 h-6" />
                         </div>
                         <h4 className="text-sm font-bold text-gray-700">PDF Dokümanı Yükle</h4>
                         <p className="text-xs text-gray-400 mt-1">Ders notları, çalışma kağıtları vb. (Max 10MB)</p>
                         <button className="mt-4 px-4 py-2 bg-[#00AEEF] text-white text-xs font-bold rounded hover:bg-blue-600 transition-colors">Dosya Seç</button>
                      </div>
                   )}

                </div>
              </div>
            )}

            {/* KART 3B: FİZİKSEL ÜRÜN STOK/KARGO (KATEGORİ KİTAPSA GÖRÜNÜR) */}
            {(category === 'book' || category === 'stationery') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-800 uppercase mb-4">Stok Bilgisi</h3>
                    <div className="space-y-3">
                       <input type="text" placeholder="Stok Kodu (SKU)" className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:border-[#00AEEF] outline-none" />
                       <input type="number" placeholder="Stok Adedi" className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:border-[#00AEEF] outline-none" />
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-800 uppercase mb-4">Teslimat</h3>
                    <div className="space-y-3">
                       <select className="w-full h-10 px-3 rounded border border-gray-300 text-sm bg-white focus:border-[#00AEEF] outline-none"><option>Yurtiçi Kargo</option></select>
                       <div className="flex gap-3">
                          <input type="number" placeholder="Desi" className="flex-1 h-10 px-3 rounded border border-gray-300 text-sm outline-none" />
                          <input type="number" placeholder="Süre (Gün)" className="flex-1 h-10 px-3 rounded border border-gray-300 text-sm outline-none" />
                       </div>
                    </div>
                 </div>
              </div>
            )}

          </div>

          {/* ================= SAĞ KOLON (MEDYA & FİYAT) ================= */}
          <div className="col-span-12 xl:col-span-4 space-y-6">
            
            {/* KAPAK GÖRSELİ */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-fit">
               <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <h3 className="text-xs font-bold text-gray-800 uppercase">Kapak Görseli</h3>
               </div>
               <div className="p-5">
                  <div className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 hover:border-[#00AEEF] transition-all group">
                     <Upload className="w-8 h-8 text-gray-300 mb-2 group-hover:text-[#00AEEF] transition-colors" />
                     <span className="text-xs font-bold text-gray-500">Görsel Yükle</span>
                     <span className="text-[10px] text-gray-400 mt-1">PNG, JPG (Max 5MB)</span>
                  </div>
               </div>
            </div>

            {/* FİYATLANDIRMA */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
               <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <h3 className="text-xs font-bold text-gray-800 uppercase">Fiyatlandırma</h3>
               </div>
               <div className="p-5 space-y-4">
                  <div>
                     <label className="block text-xs font-bold text-gray-600 mb-1">Satış Fiyatı (TL)</label>
                     <input type="number" placeholder="0.00" className="w-full h-11 px-4 rounded-lg border border-gray-300 text-lg font-bold text-gray-800 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-none text-right" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">İskonto (%)</label>
                        <input type="number" placeholder="0" className="w-full h-9 px-3 rounded border border-gray-300 text-sm outline-none focus:border-[#00AEEF]" />
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold text-gray-500 mb-1">KDV (%)</label>
                        <input type="number" placeholder="20" className="w-full h-9 px-3 rounded border border-gray-300 text-sm outline-none focus:border-[#00AEEF]" />
                     </div>
                  </div>
                  
                  {/* Fiyat Özeti */}
                  <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100 space-y-1.5 mt-2">
                     <div className="flex justify-between text-xs text-gray-500"><span>Liste Fiyatı:</span><span>0,00 TL</span></div>
                     <div className="flex justify-between text-xs text-green-600"><span>Kazanç (İnd.):</span><span>-0,00 TL</span></div>
                     <div className="border-t border-blue-200 my-2 pt-2 flex justify-between text-sm font-bold text-[#00AEEF]">
                        <span>Son Fiyat:</span><span>0,00 TL</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* YAYIN DURUMU */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-center justify-between">
               <span className="text-xs font-bold text-gray-500 uppercase">Durum</span>
               <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-bold rounded-full uppercase">Taslak</span>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}