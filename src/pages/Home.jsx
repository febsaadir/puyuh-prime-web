import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, Utensils } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans">
      
      {/* --- HERO SECTION REVISI --- 
          1. Tag 'Peternakan' dihapus agar lebih clean.
          2. Font size diperkecil agar elegan.
          3. Gambar diganti dengan telur puyuh rustic.
      */}
      <section className="relative min-h-screen flex items-center bg-puyuh-dark overflow-hidden pt-32 pb-20 md:pt-0 md:pb-0">
        
        {/* Background Image dengan Overlay Gelap */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cvpradiptaparamita.com/wp-content/uploads/2021/04/Telur-puyuh.jpg" 
            alt="Background Farm" 
            className="w-full h-full object-cover opacity-20" // Opacity dikurangi biar teks lebih kebaca
          />
          <div className="absolute inset-0 bg-gradient-to-r from-puyuh-dark via-puyuh-dark/80 to-transparent"></div>
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* BAGIAN KIRI: Teks (Sekarang lebih rapi & kecil) */}
          <div className="md:w-1/2 text-left text-white">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {/* Judul Utama: Ukuran Font Diperkecil (text-6xl max) */}
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
                Kecil Telurnya, <br />
                <span className="text-puyuh-gold">Besar Manfaatnya.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                Nikmati kesegaran telur puyuh langsung dari peternakan kami. Tersedia juga paket catering olahan puyuh lezat resep rumahan untuk keluarga Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/produk" className="px-8 py-3 bg-puyuh-gold text-white font-bold rounded-full hover:bg-white hover:text-puyuh-gold transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                  Lihat Produk <ArrowRight size={20}/>
                </Link>
                <Link to="/kontak" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-puyuh-dark transition flex items-center justify-center">
                  Pesan Katering
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* BAGIAN KANAN: Gambar Telur Puyuh (Sesuai Request) */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
             <motion.img 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               // Menggunakan foto telur puyuh dalam wadah/sarang (HD)
               src="https://cvpradiptaparamita.com/wp-content/uploads/2021/04/Telur-puyuh.jpg" 
               alt="Telur Puyuh Segar dalam Wadah" 
               className="rounded-3xl shadow-2xl border-4 border-puyuh-gold/30 w-full max-w-md mx-auto object-cover transform hover:scale-105 transition duration-500"
             />
             
          </div>

        </div>
      </section>

      {/* --- KEUNGGULAN (Why Us?) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-puyuh-gold font-bold tracking-widest uppercase mb-2">Kenapa PuyuhPrime?</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-puyuh-dark">Kualitas yang Bisa Anda Rasakan</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <ShieldCheck size={40} />, 
                title: "100% Alami & Higienis", 
                desc: "Dipelihara dengan pakan berkualitas tanpa suntik hormon. Kandang dibersihkan rutin dengan EM4 & Desinfektan modern." 
              },
              { 
                icon: <Utensils size={40} />, 
                title: "Catering Home Made", 
                desc: "Tidak sempat masak? Pesan olahan puyuh ungkep atau menu matang. Dimasak oleh Mama dengan bumbu rempah pilihan." 
              },
              { 
                icon: <Truck size={40} />, 
                title: "Pengiriman Aman", 
                desc: "Telur dikemas dengan tray khusus anti-pecah. Garansi ganti baru jika sampai dalam keadaan rusak." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-puyuh-cream p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-puyuh-gold mb-6 shadow-sm group-hover:bg-puyuh-gold group-hover:text-white transition">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-puyuh-dark mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION IKLAN CATERING --- */}
      <section className="py-20 bg-puyuh-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-puyuh-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-puyuh-brown/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
           <div className="md:w-1/2">
              <img 
                src="https://www.dapurkobe.co.id/wp-content/uploads/telur-puyuh-masak-pedas.jpg" 
                alt="Puyuh Goreng Lezat" 
                className="rounded-2xl shadow-2xl transform md:-rotate-2 hover:rotate-0 transition duration-500"
              />
           </div>
           <div className="md:w-1/2">
              <h3 className="font-serif text-4xl font-bold mb-6">Lapar? <span className="text-puyuh-gold">Puyuh Ungkep</span> Siap Saji!</h3>
              <p className="text-gray-300 text-lg mb-6">
                Solusi praktis untuk bekal kantor atau makan malam keluarga. Daging puyuh empuk, meresap bumbunya, tinggal goreng atau hangatkan.
              </p>
              <ul className="space-y-4 mb-8">
                 {['Tanpa Pengawet Buatan', 'Bumbu Rempah Asli', 'Kemasan Vakum Higienis'].map((txt, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle className="text-puyuh-gold" size={24} />
                     <span className="font-medium">{txt}</span>
                   </li>
                 ))}
              </ul>
              <Link to="/kontak" className="inline-block bg-puyuh-gold text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-puyuh-gold transition">
                Pesan Catering Sekarang
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;