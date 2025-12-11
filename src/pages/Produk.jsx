import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Tag } from 'lucide-react';

// IMPORT DATA DARI FILE TERPISAH
import { products } from '../data/products';

const Produk = () => {
  // State untuk filter kategori
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Logic Filter
  const categories = ["Semua", "Konsumsi", "Peternakan"];
  
  const filteredProducts = activeCategory === "Semua" 
    ? products 
    : products.filter(item => item.category === activeCategory);

  // Fungsi WA Direct (Nomor sudah disesuaikan dengan kode Anda sebelumnya)
  const handleOrder = (productName) => {
    const message = `Halo PuyuhPrime, saya ingin memesan ${productName}. Apakah stok tersedia?`;
    window.open(`https://wa.me/628558288704?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="font-sans min-h-screen bg-puyuh-cream">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-puyuh-dark text-white pt-32 pb-16 px-4 text-center rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           {/* Pattern Background */}
           <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-4 relative z-10"
        >
          Produk Unggulan Kami
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg relative z-10">
          Dari telur segar, olahan lezat, puyuh hidup, hingga kebutuhan nutrisi peternakan. Kualitas terbaik untuk Anda.
        </p>
      </div>

      {/* --- FILTER SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white p-2 rounded-full shadow-lg inline-flex items-center gap-2 md:gap-4 mx-auto left-0 right-0 w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-puyuh-gold text-white shadow-md transform scale-105" 
                  : "text-gray-500 hover:text-puyuh-dark hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition duration-300 group flex flex-col"
              >
                {/* Gambar Produk */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-puyuh-dark shadow-sm flex items-center gap-1">
                    <Tag size={12} className="text-puyuh-gold" /> {product.category}
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-puyuh-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Info Produk */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-puyuh-dark line-clamp-2">{product.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {product.desc}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">Harga Mulai</p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-puyuh-gold">{product.price}</span>
                      <button 
                        onClick={() => handleOrder(product.name)}
                        className="bg-puyuh-dark text-white p-3 rounded-xl hover:bg-puyuh-gold transition shadow-lg transform active:scale-95"
                        title="Pesan via WhatsApp"
                      >
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Empty State --- */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Produk kategori ini belum tersedia.</p>
          </div>
        )}
      </div>

      {/* --- CTA BANNER --- */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
         <div className="bg-gradient-to-r from-puyuh-gold to-orange-400 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10 md:w-2/3">
               <h2 className="font-serif text-3xl font-bold mb-4">Butuh Suplai Rutin untuk Restoran?</h2>
               <p className="text-white/90 text-lg mb-6 md:mb-0">
                 Dapatkan harga spesial kemitraan untuk pemesanan rutin telur puyuh, daging, atau bibit puyuh dalam jumlah besar.
               </p>
            </div>
            <div className="relative z-10">
               <button 
                 onClick={() => window.open("https://wa.me/628558288704?text=Halo%20saya%20ingin%20tanya%20harga%20grosir", "_blank")}
                 className="bg-white text-puyuh-gold font-bold px-8 py-4 rounded-full shadow-lg hover:bg-puyuh-dark hover:text-white transition"
               >
                 Hubungi Mitra
               </button>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
         </div>
      </div>

    </div>
  );
};

export default Produk;