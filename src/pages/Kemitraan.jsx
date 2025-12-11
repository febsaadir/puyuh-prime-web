import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Users, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const Kemitraan = () => {
  // Data Paket Kemitraan
  const packages = [
    {
      title: "Reseller Pemula",
      icon: <Users size={32} />,
      cocok: "Ibu Rumah Tangga / Mahasiswa",
      syarat: "Min. Order 10 Pack",
      benefit: ["Diskon 10%", "Foto Produk Gratis", "Masuk Grup Support"],
      color: "bg-white border-gray-200"
    },
    {
      title: "Mitra Restoran",
      icon: <Handshake size={32} />,
      cocok: "Warung Makan / Catering",
      syarat: "Langganan Rutin Mingguan",
      benefit: ["Harga Khusus (Flat)", "Prioritas Stok", "Pembayaran Tempo"],
      color: "bg-orange-50 border-puyuh-gold"
    },
    {
      title: "Agen Wilayah",
      icon: <TrendingUp size={32} />,
      cocok: "Distributor Frozen Food",
      syarat: "Target Bulanan",
      benefit: ["Diskon Spesial 20%", "Support Marketing", "Area Proteksi"],
      color: "bg-puyuh-dark text-white"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-puyuh-cream">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 bg-puyuh-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.span 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-puyuh-gold text-sm font-bold tracking-wider mb-4"
          >
            PELUANG BISNIS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            Tumbuh Bersama <span className="text-puyuh-gold">PuyuhPrime</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Jadilah bagian dari jaringan distribusi telur dan daging puyuh berkualitas. Dapatkan penghasilan tambahan dengan produk yang pasti laku di pasaran.
          </motion.p>
        </div>
      </div>

      {/* --- KEUNTUNGAN BERGABUNG --- */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-puyuh-dark">Keuntungan Mitra</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Produk Fast Moving", desc: "Telur & daging adalah kebutuhan pokok, pasti dicari orang setiap hari.", icon: <CheckCircle /> },
                { title: "Kualitas Terjamin", desc: "Garansi produk fresh. Jika ada yang rusak saat pengiriman, kami ganti.", icon: <Truck /> },
                { title: "Margin Menguntungkan", desc: "Selisih harga jual yang menarik untuk menambah profit bisnis Anda.", icon: <TrendingUp /> }
            ].map((item, idx) => (
                <motion.div 
                    whileHover={{ y: -5 }}
                    key={idx} 
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >
                    <div className="text-puyuh-gold mb-4 p-3 bg-orange-50 rounded-full">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- PAKET PILIHAN --- */}
      <section className="pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            {packages.map((pkg, idx) => (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className={`rounded-3xl p-8 relative shadow-xl border ${pkg.color} flex flex-col h-full`}
                >
                    <div className="mb-4">{pkg.icon}</div>
                    <h3 className="font-serif text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-sm opacity-80 mb-6">{pkg.cocok}</p>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                        <div className="text-sm font-bold opacity-70">Syarat: {pkg.syarat}</div>
                        <ul className="space-y-2">
                            {pkg.benefit.map((ben, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <CheckCircle size={16} className="text-puyuh-gold" /> {ben}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button 
                        onClick={() => window.open(`https://wa.me/628558288704?text=Halo%20Admin,%20saya%20berminat%20join%20${pkg.title}`, "_blank")}
                        className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-puyuh-gold text-white hover:brightness-110 transition shadow-lg"
                    >
                        Daftar Sekarang <ArrowRight size={18} />
                    </button>
                </motion.div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default Kemitraan;