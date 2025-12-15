import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, CheckCircle, MapPin, Star } from 'lucide-react';

const Tentang = () => {
  // Data Testimoni Dummy
  const testimonials = [
    {
      name: "Ibu Ani, Bintaro",
      role: "Ibu Rumah Tangga",
      text: "Suka banget sama puyuh ungkepnya! Bumbunya meresap sampai ke tulang, anak-anak jadi lahap makannya. Praktis buat bekal sekolah.",
      rating: 5
    },
    {
      name: "Restoran Sederhana",
      role: "Mitra Bisnis",
      text: "Suplai telur puyuh dari PuyuhPrime selalu stabil dan kualitas grade A. Jarang ada yang pecah saat pengiriman. Sangat recommended untuk supplier resto.",
      rating: 5
    },
    {
      name: "Pak Budi, Serpong",
      role: "Pelanggan Setia",
      text: "Telur puyuhnya beda, kuningnya lebih pekat dan tidak amis. Kelihatan kalau puyuhnya dikasih pakan bagus dan kandangnya bersih.",
      rating: 5
    }
  ];

  // Data Dokumentasi Foto (Placeholder Unsplash)
  const galleryImages = [
    "https://gdm.id/wp-content/uploads/2022/07/5000-ekor-burung-puyuh.png", // Kandang Luas
    "https://awsimages.detik.net.id/community/media/visual/2025/02/07/mengintip-peternakan-burung-puyuh-di-aceh_169.jpeg?w=700&q=90", // Puyuh Sehat
    "https://static.republika.co.id/uploads/images/inpicture_slide/190313123749-628.jpg", // Panen Telur
    "https://images.unsplash.com/photo-1627993073958-323a7803a645?q=80&w=1000&auto=format&fit=crop"  // Packaging Higienis
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-40 pb-24 bg-puyuh-dark text-white text-center px-4 overflow-hidden rounded-b-[40px] shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-puyuh-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Sejak 2025</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dedikasi Kami untuk <br/><span className="text-puyuh-gold">Kualitas Pangan Keluarga</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            PuyuhPrime bukan sekadar bisnis, tapi wujud komitmen kami menghadirkan sumber protein terbaik dari kandang yang dirawat dengan hati.
          </p>
        </motion.div>
      </div>

      {/* --- STORY SECTION (Perjalanan Usaha) --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Bagian Foto Story */}
          <div className="md:w-1/2 relative">
            <motion.div 
               initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
               className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1000&auto=format&fit=crop" 
                alt="Owner PuyuhPrime" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
              />
              {/* Badge Floating */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-puyuh-gold hidden md:block">
                <p className="font-serif text-4xl font-bold text-puyuh-dark mb-1">100%</p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Lokal & Higienis</p>
              </div>
            </motion.div>
            {/* Hiasan Kotak Belakang */}
            <div className="absolute top-8 left-8 w-full h-full border-2 border-puyuh-gold rounded-3xl -z-0 hidden md:block"></div>
          </div>

          {/* Bagian Teks Story */}
          <div className="md:w-1/2">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-puyuh-dark mb-6">
                Berawal dari Halaman Rumah, <br/>Tumbuh Menjadi Kepercayaan.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  Perjalanan <strong>PuyuhPrime</strong> dimulai dari keinginan sederhana Mama untuk menyediakan telur puyuh yang bersih dan sehat bagi keluarga. Kami menyadari bahwa sulit mencari telur puyuh di pasaran yang benar-benar <em>fresh</em> dan higienis.
                </p>
                <p>
                  Dengan modal beberapa ekor puyuh di halaman belakang, kami mulai belajar teknik beternak modern. Fokus kami bukan pada kuantitas, melainkan kualitas. Pakan tanpa hormon, kebersihan kandang yang terjaga (menggunakan EM4 & Molase), serta pengolahan pasca panen yang teliti.
                </p>
                <p>
                  Kini, PuyuhPrime telah melayani ratusan keluarga dan restoran. Kami bangga bisa menjadi bagian dari nutrisi sehat di meja makan Anda.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Heart className="text-puyuh-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-puyuh-dark">Dirawat dengan Hati</h4>
                    <p className="text-xs text-gray-500">Bukan sekadar komoditas industri.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-puyuh-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-puyuh-dark">Standar Premium</h4>
                    <p className="text-xs text-gray-500">Quality control setiap butir telur.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (Dokumentasi) --- */}
      <section className="py-20 bg-puyuh-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="font-serif text-3xl font-bold text-puyuh-dark mb-4">Intip Peternakan Kami</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Transparansi adalah kunci. Lihat bagaimana kami menjaga kebersihan dan kesehatan lingkungan kandang PuyuhPrime.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {galleryImages.map((img, idx) => (
               <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.02 }}
                 className={`rounded-2xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 row-span-2' : 'col-span-1 h-48 md:h-64'}`}
               >
                 <img src={img} alt={`Dokumentasi ${idx}`} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="font-serif text-3xl font-bold text-puyuh-dark">Apa Kata Mereka?</h2>
           <div className="w-20 h-1 bg-puyuh-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((testi, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
             >
               {/* Kutipan Icon */}
               <div className="text-6xl text-puyuh-gold/20 font-serif absolute top-4 left-6">"</div>
               
               <div className="flex text-yellow-400 mb-4 relative z-10">
                 {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               
               <p className="text-gray-600 mb-6 relative z-10 leading-relaxed italic">
                 {testi.text}
               </p>
               
               <div className="flex items-center gap-4 border-t pt-6">
                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                   {testi.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-bold text-puyuh-dark text-sm">{testi.name}</h4>
                   <p className="text-xs text-gray-400">{testi.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- LOKASI / MAPS SIMPLE --- */}
      <section className="py-12 bg-puyuh-dark text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <MapPin className="mx-auto text-puyuh-gold mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">Lokasi Peternakan</h3>
            <p className="text-gray-300 mb-6">Jl. Contoh Alamat No. 123, Tangerang Selatan (Bisa kunjungan dengan janji temu)</p>
            <button 
              onClick={() => window.open("https://maps.google.com", "_blank")}
              className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-puyuh-dark transition"
            >
              Lihat di Google Maps
            </button>
         </div>
      </section>

    </div>
  );
};

export default Tentang;