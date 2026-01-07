"use client";

import React from "react";
import { 
  Wallet, 
  TrendingUp, 
  Calendar, 
  AlertCircle, 
  FileText, 
  Download, 
  CheckCircle,
  Clock,
  Building2,
  CreditCard
} from "lucide-react";

// DUMMY DATA
const statsData = [
  {
    title: "Toplam Kazanç",
    value: "127.450,00 ₺",
    icon: Wallet,
    color: "#00AEEF",
    bgColor: "bg-blue-50",
    change: "+12.5%",
    changeType: "up"
  },
  {
    title: "Kesinleşmiş Bakiye",
    value: "89.320,00 ₺",
    icon: TrendingUp,
    color: "#10b981",
    bgColor: "bg-green-50",
    change: "+8.2%",
    changeType: "up"
  },
  {
    title: "Gelecek Ödeme Tarihi",
    value: "15 Kasım 2025",
    icon: Calendar,
    color: "#f59e0b",
    bgColor: "bg-orange-50",
    change: "5 gün kaldı",
    changeType: "neutral"
  },
  {
    title: "Eksik Evrak Sayısı",
    value: "2 Adet",
    icon: AlertCircle,
    color: "#ef4444",
    bgColor: "bg-red-50",
    change: "Acil",
    changeType: "down"
  }
];

const documents = [
  { 
    id: 1, 
    type: "Fatura (Ekim 2025)", 
    uploadDate: "01/11/2025", 
    status: "uploaded",
    fileName: "fatura_ekim_2025.pdf"
  },
  { 
    id: 2, 
    type: "Sözleşme", 
    uploadDate: "15/09/2025", 
    status: "uploaded",
    fileName: "sozlesme_2025.pdf"
  },
  { 
    id: 3, 
    type: "Vergi Levhası", 
    uploadDate: "10/09/2025", 
    status: "uploaded",
    fileName: "vergi_levhasi.pdf"
  },
  { 
    id: 4, 
    type: "İmza Sirküleri", 
    uploadDate: "-", 
    status: "pending",
    fileName: ""
  },
  { 
    id: 5, 
    type: "Fatura (Kasım 2025)", 
    uploadDate: "-", 
    status: "pending",
    fileName: ""
  }
];

const payments = [
  {
    id: "INV-2025-10-001",
    date: "01/11/2025",
    deductions: "1.250,00 ₺",
    finalAmount: "8.350,00 ₺",
    paymentDate: "15/11/2025",
    status: "paid"
  },
  {
    id: "INV-2025-09-001",
    date: "01/10/2025",
    deductions: "980,00 ₺",
    finalAmount: "7.620,00 ₺",
    paymentDate: "15/10/2025",
    status: "paid"
  },
  {
    id: "INV-2025-08-001",
    date: "01/09/2025",
    deductions: "1.120,00 ₺",
    finalAmount: "9.280,00 ₺",
    paymentDate: "15/09/2025",
    status: "paid"
  },
  {
    id: "INV-2025-07-001",
    date: "01/08/2025",
    deductions: "890,00 ₺",
    finalAmount: "6.910,00 ₺",
    paymentDate: "15/08/2025",
    status: "pending"
  },
  {
    id: "INV-2025-06-001",
    date: "01/07/2025",
    deductions: "1.340,00 ₺",
    finalAmount: "10.160,00 ₺",
    paymentDate: "15/07/2025",
    status: "paid"
  }
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
        <div className="p-6 md:p-8 max-w-[1800px] mx-auto">
          
          {/* ÜST BAŞLIK */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Ödemeler ve Kazançlar</h1>
            <p className="text-sm text-gray-500">Tüm gelir durumunuzu, ödeme geçmişinizi ve evrak durumlarınızı buradan takip edebilirsiniz.</p>
          </div>

          {/* ÜST BİLGİ KARTLARI (DASHBOARD TARZI) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-xl`}>
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <span 
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      stat.changeType === 'up' ? 'bg-green-50 text-green-600' :
                      stat.changeType === 'down' ? 'bg-red-50 text-red-600' :
                      'bg-gray-50 text-gray-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.title}</h3>
                <p className="text-2xl font-black text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* ANA GRID YAPISI (SOL: TABLOLAR, SAĞ: BİLGİ PANELİ) */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* SOL TARAF: TABLOLAR */}
            <div className="xl:col-span-2 space-y-6">
              
              {/* EVRAK YÖNETİMİ TABLOSU */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg" style={{ color: "#00AEEF" }}>
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">Evraklarınız ve Sözleşmeler</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Yüklemeniz gereken veya yüklediğiniz tüm evraklar</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Evrak Türü</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Yüklenme Tarihi</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Durum / İşlem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-700">{doc.type}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-600">{doc.uploadDate}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {doc.status === "uploaded" ? (
                              <button 
                                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-bold"
                                style={{ color: "#00AEEF" }}
                              >
                                <Download className="w-4 h-4" />
                                İndir
                              </button>
                            ) : (
                              <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-orange-50 text-orange-600 border border-orange-100">
                                Yükleme Bekliyor
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ÖDEME GEÇMİŞİ TABLOSU */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">Ödeme Hareketleri</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Geçmiş dönem ödeme geçmişiniz ve kesintileriniz</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fatura No</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tarih</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kesintiler</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kesinleşmiş Tutar</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ödeme Tarihi</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Durum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-gray-800">{payment.id}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-600">{payment.date}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-red-600">-{payment.deductions}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-black" style={{ color: "#00AEEF" }}>{payment.finalAmount}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-600">{payment.paymentDate}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                              payment.status === 'paid' ? 'bg-green-50 text-green-600 border border-green-100' :
                              'bg-orange-50 text-orange-600 border border-orange-100'
                            }`}>
                              {payment.status === 'paid' ? 'Ödendi' : 'Bekliyor'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* TABLO ALT BİLGİ */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Toplam <span className="font-bold text-gray-800">{payments.length}</span> ödeme hareketi gösteriliyor
                  </div>
                </div>
              </div>
            </div>

            {/* SAĞ TARAF: BİLGİ PANELLERİ */}
            <div className="space-y-6">
              
              {/* BANKA BİLGİLERİ */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Banka Bilgileri</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Banka Adı</p>
                    <p className="text-sm font-bold">Ziraat Bankası</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Şube Adı / Kodu</p>
                    <p className="text-sm font-bold">Kadıköy / 1234</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">IBAN</p>
                    <p className="text-sm font-bold font-mono tracking-wider">TR33 0001 0012 3456 7890 1234 56</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-xs text-blue-100 mb-1">Hesap Sahibi</p>
                    <p className="text-sm font-bold">ABC Yayınları A.Ş.</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg">
                    Bilgileri Güncelle
                  </button>
                </div>
              </div>

              {/* ŞİRKET BİLGİLERİ */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Building2 className="w-4 h-4 text-gray-600" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">Şirket Bilgileri</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">Şirket Ünvanı</p>
                    <p className="text-sm font-bold text-gray-800">ABC Yayınları A.Ş.</p>
                  </div>
                  
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">Vergi Dairesi</p>
                    <p className="text-sm font-bold text-gray-800">Kadıköy Vergi Dairesi</p>
                  </div>
                  
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">Vergi No</p>
                    <p className="text-sm font-bold text-gray-800">1234567890</p>
                  </div>
                  
                  <div className="pb-3 border-b border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">Adres</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Caferağa Mah. Moda Cad. No:123 Kadıköy / İstanbul
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-semibold">İletişim</p>
                    <p className="text-sm text-gray-700">+90 216 123 45 67</p>
                    <p className="text-sm text-gray-700">info@abcyayinlari.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    className="w-full py-3 rounded-xl font-bold text-sm text-white shadow-lg hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#00AEEF" }}
                  >
                    Bilgileri Düzenle
                  </button>
                </div>
              </div>

              {/* YARDIM KARTI */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-orange-900 mb-2">Ödeme ile ilgili sorun mu yaşıyorsunuz?</h3>
                    <p className="text-xs text-orange-700 leading-relaxed mb-4">
                      Eksik evraklarınızı tamamlamak veya ödeme sorunlarınızı çözmek için destek ekibimizle iletişime geçin.
                    </p>
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-bold text-xs transition-colors shadow-md">
                      Destek Talebi Oluştur
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
