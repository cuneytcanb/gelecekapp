"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Package, 
  Plus, 
  Search, 
  Eye, 
  Edit, 
  Trash2,
  BookOpen,
  Video,
  FileText,
  Layers,
  X,
  CheckCircle
} from "lucide-react";

// DUMMY DATA (Ürün Verileri)
const products = [
  {
    id: 1,
    name: "A'dan Z'ye Matematik Soru Bankası",
    category: "Kitap",
    type: "book",
    price: "899,00 ₺",
    priceValue: 899,
    stock: 45,
    sales: 1256,
    status: "active",
    image: "📚"
  },
  {
    id: 2,
    name: "YKS Türkçe Video Paketi",
    category: "Video",
    type: "video",
    price: "1.299,00 ₺",
    priceValue: 1299,
    stock: "∞",
    sales: 892,
    status: "active",
    image: "🎥"
  },
  {
    id: 3,
    name: "LGS Matematik Test Çözümleri",
    category: "Dijital İçerik",
    type: "test",
    price: "499,00 ₺",
    priceValue: 499,
    stock: "∞",
    sales: 2104,
    status: "active",
    image: "📝"
  },
  {
    id: 4,
    name: "KPSS Genel Kültür Kitap Seti",
    category: "Kitap",
    type: "book",
    price: "1.599,00 ₺",
    priceValue: 1599,
    stock: 12,
    sales: 345,
    status: "draft",
    image: "📚"
  },
  {
    id: 5,
    name: "Fizik Video Dersleri Premium",
    category: "Video",
    type: "video",
    price: "999,00 ₺",
    priceValue: 999,
    stock: "∞",
    sales: 567,
    status: "active",
    image: "🎥"
  },
  {
    id: 6,
    name: "AYT Kimya Deney Paketi",
    category: "Paket",
    type: "package",
    price: "2.499,00 ₺",
    priceValue: 2499,
    stock: 8,
    sales: 123,
    status: "active",
    image: "📦"
  }
];

type Product = typeof products[0];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal State'leri
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Edit Form State'leri
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Modal Açma Fonksiyonları
  const openViewModal = (product: Product) => {
    setSelectedProduct(product);
    setViewModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setSelectedProduct(product);
    setEditName(product.name);
    setEditPrice(product.priceValue.toString());
    setEditStock(product.stock.toString());
    setEditStatus(product.status);
    setEditModalOpen(true);
  };

  const openDeleteModal = (product: Product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  // Modal Kapatma Fonksiyonu
  const closeAllModals = () => {
    setViewModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  // Kaydet Fonksiyonu (Demo)
  const handleSave = () => {
    console.log("Ürün güncellendi:", { editName, editPrice, editStock, editStatus });
    closeAllModals();
  };

  // Sil Fonksiyonu (Demo)
  const handleDelete = () => {
    console.log("Ürün silindi:", selectedProduct?.id);
    closeAllModals();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="p-6 md:p-8 max-w-[1800px] mx-auto">
        
        {/* ÜST BAŞLIK VE AKSİYON BUTONU */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-50 rounded-lg" style={{ color: "#00AEEF" }}>
                <Package className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Ürün Yönetimi</h1>
            </div>
            <p className="text-sm text-gray-500">Mağazanızdaki tüm ürünleri görüntüleyin, düzenleyin ve yönetin.</p>
          </div>
          
          <Link href="/products/new">
            <button 
              className="flex items-center gap-2 px-6 py-3 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-100 transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#00AEEF" }}
            >
              <Plus className="w-5 h-5" />
              Yeni Ürün Ekle
            </button>
          </Link>
        </div>

        {/* ARAMA ÇUBUĞU (İYİLEŞTİRİLMİŞ PLACEHOLDER) */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Ürün adı ile ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-white border-2 border-gray-300 rounded-xl text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>
        </div>

        {/* ÜRÜN TABLOSU */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* TABLO BAŞLIKLARI */}
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Ürün Bilgisi</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kategori</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Fiyat</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Stok / Satış</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Durum</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>

              {/* TABLO GÖVDESİ */}
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    
                    {/* Ürün Bilgisi (İkon + Ad) */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl border border-blue-100">
                          {product.image}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800 line-clamp-1 max-w-[300px]">{product.name}</p>
                          <p className="text-xs text-gray-500">ID: #{product.id}</p>
                        </div>
                      </div>
                    </td>

                    {/* Kategori */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {product.type === 'book' && <BookOpen className="w-4 h-4 text-blue-500" />}
                        {product.type === 'video' && <Video className="w-4 h-4 text-purple-500" />}
                        {product.type === 'test' && <FileText className="w-4 h-4 text-green-500" />}
                        {product.type === 'package' && <Layers className="w-4 h-4 text-orange-500" />}
                        <span className="text-sm font-medium text-gray-700">{product.category}</span>
                      </div>
                    </td>

                    {/* Fiyat */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-black" style={{ color: "#00AEEF" }}>{product.price}</span>
                    </td>

                    {/* Stok / Satış */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Stok:</span>
                          <span className="text-sm font-bold text-gray-700">{product.stock}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Satış:</span>
                          <span className="text-sm font-bold text-green-600">{product.sales}</span>
                        </div>
                      </div>
                    </td>

                    {/* Durum */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        product.status === 'active' 
                          ? 'bg-green-50 text-green-600 border border-green-100' 
                          : 'bg-orange-50 text-orange-600 border border-orange-100'
                      }`}>
                        {product.status === 'active' ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>

                    {/* İşlemler */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => openViewModal(product)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                          title="Görüntüle"
                        >
                          <Eye className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        </button>
                        <button 
                          onClick={() => openEditModal(product)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                          title="Düzenle"
                        >
                          <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        </button>
                        <button 
                          onClick={() => openDeleteModal(product)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          title="Sil"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLO ALT BİLGİ */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Toplam <span className="font-bold text-gray-800">{filteredProducts.length}</span> ürün gösteriliyor
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

      {/* ============================================ */}
      {/* MODAL 1: GÖRÜNTÜLE (VIEW) */}
      {/* ============================================ */}
      {viewModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeAllModals}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl border-2 border-blue-100">
                {selectedProduct.image}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Ürün Detayları</h2>
                <p className="text-xs text-gray-500">ID: #{selectedProduct.id}</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Ürün Adı</p>
                <p className="text-sm font-bold text-gray-800">{selectedProduct.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Kategori</p>
                  <p className="text-sm font-bold text-gray-800">{selectedProduct.category}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Fiyat</p>
                  <p className="text-sm font-black" style={{ color: "#00AEEF" }}>{selectedProduct.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Stok</p>
                  <p className="text-sm font-bold text-gray-800">{selectedProduct.stock}</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Toplam Satış</p>
                  <p className="text-sm font-bold text-green-600">{selectedProduct.sales}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">Durum</p>
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                  selectedProduct.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {selectedProduct.status === 'active' && <CheckCircle className="w-4 h-4" />}
                  {selectedProduct.status === 'active' ? 'Yayında' : 'Taslak'}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex gap-3">
              <button 
                onClick={closeAllModals}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Kapat
              </button>
              <button 
                onClick={() => openEditModal(selectedProduct)}
                className="flex-1 px-4 py-3 text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00AEEF" }}
              >
                Düzenle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* MODAL 2: DÜZENLE (EDIT) */}
      {/* ============================================ */}
      {editModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeAllModals}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">Ürünü Düzenle</h2>
              <p className="text-sm text-gray-500 mt-1">Ürün bilgilerini güncelleyebilirsiniz</p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Ürün Adı</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Fiyat (₺)</label>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Stok</label>
                  <input
                    type="text"
                    value={editStock}
                    onChange={(e) => setEditStock(e.target.value)}
                    className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Durum</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                >
                  <option value="active">Yayında</option>
                  <option value="draft">Taslak</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex gap-3">
              <button 
                onClick={closeAllModals}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                İptal
              </button>
              <button 
                onClick={handleSave}
                className="flex-1 px-4 py-3 bg-orange-500 text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* MODAL 3: SİL (DELETE) */}
      {/* ============================================ */}
      {deleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeAllModals}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={closeAllModals}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Ürünü Sil</h2>
              <p className="text-sm text-gray-600">Bu ürünü silmek istediğinize emin misiniz?</p>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{selectedProduct.image}</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{selectedProduct.name}</p>
                  <p className="text-xs text-gray-500">ID: #{selectedProduct.id}</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-xs text-red-700 font-medium text-center">
                ⚠️ Bu işlem geri alınamaz. Ürün kalıcı olarak silinecektir.
              </p>
            </div>

            {/* Footer */}
            <div className="flex gap-3">
              <button 
                onClick={closeAllModals}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                İptal
              </button>
              <button 
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl font-bold text-sm hover:bg-red-600 transition-colors shadow-lg"
              >
                Evet, Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
