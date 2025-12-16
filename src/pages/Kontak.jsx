import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MapPin, Send, Mail, ShoppingBag, Sparkles, User, Bot 
} from 'lucide-react';

// IMPORT LIBRARY GOOGLE GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

// IMPORT DATA DARI FILE TERPISAH
import { socialMedia, foodDelivery } from '../data/socials';

const Kontak = () => {
  // --- KONFIGURASI AI GEMINI (VIA .ENV) ---
  // Pastikan Anda sudah membuat file .env dan restart server
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Inisialisasi hanya jika API Key ada
  const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Halo! Saya CS Cerdas PuyuhPrime 🤖. Mau tanya resep olahan puyuh, harga telur, atau tips beternak? Ayo tanya saya!' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll ke pesan terbawah
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendChat = async (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    // 1. Tampilkan pesan user
    const userText = inputMsg;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
    setInputMsg('');
    setIsTyping(true);

    // Cek jika API Key belum dipasang
    if (!genAI) {
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now()+1, sender: 'bot', text: "⚠️ Maaf, API Key Google Gemini belum terpasang di file .env. Mohon konfigurasi terlebih dahulu." }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      // 2. Panggil Google Gemini AI
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      
      const prompt = `
        Bertindaklah sebagai Customer Service yang ramah dan profesional untuk bisnis bernama "PuyuhPrime".
        Info Bisnis:
        - Produk: Telur Puyuh Grade A, Daging Puyuh Bersih, Puyuh Ungkep, Sate Puyuh, dan Kebutuhan Peternakan.
        - Lokasi: Tangerang Selatan.
        - Kelebihan: Fresh, Higienis, Tanpa Pengawet.
        
        Tugas Anda:
        Jawab pertanyaan customer berikut dengan singkat (maksimal 3 kalimat), gunakan emoji yang ceria.
        Pertanyaan Customer: ${userText}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 3. Tampilkan balasan AI
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: text }]);
    } catch (error) {
      console.error("Error Gemini:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: "Maaf, sepertinya saya sedang pusing (Error Koneksi). Coba tanya lagi ya? 🤕" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-puyuh-cream pt-32 pb-12 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-puyuh-dark mb-4"
          >
            Hubungi <span className="text-puyuh-gold">Kami</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ingin memesan katering, bertanya soal kemitraan, atau sekadar menyapa? Kami siap mendengar Anda melalui berbagai saluran.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- KOLOM KIRI: KONTAK PERSONAL --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* WHATSAPP CARD */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-puyuh-gold relative overflow-hidden group">
              <div className="absolute right-0 top-0 opacity-5 transform translate-x-10 -translate-y-10">
                <Phone size={150} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-puyuh-dark mb-2">Chat Langsung (Owner)</h3>
              <p className="text-gray-500 mb-6">Terhubung langsung dengan Mama untuk respon cepat dan personal.</p>
              
              <button 
                onClick={() => window.open("https://wa.me/628558288704?text=Halo%20PuyuhPrime,%20saya%20tertarik%20dengan%20produk%20anda", "_blank")}
                className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition shadow-lg transform hover:-translate-y-1"
              >
                <Phone size={24} /> Chat via WhatsApp
              </button>
            </div>

            {/* FOOD DELIVERY */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-xl text-puyuh-dark mb-4 flex items-center gap-2">
                 <ShoppingBag className="text-puyuh-gold" /> Pesan Makanan Online
               </h3>
               <div className="grid grid-cols-3 gap-4">
                 {foodDelivery.map((app, idx) => (
                   <a 
                     key={idx} href={app.url}
                     className={`${app.color} text-white py-3 rounded-lg text-center font-bold text-sm hover:opacity-90 transition shadow-md`}
                   >
                     {app.name}
                   </a>
                 ))}
               </div>
            </div>

            {/* SOCIAL MEDIA (Looping Data External) */}
            <div className="flex flex-col sm:flex-row gap-6">
               <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-gray-700 mb-4">Ikuti Kami</h4>
                  <div className="flex gap-4">
                    {socialMedia.map((soc, idx) => {
                      const Icon = soc.icon; // Render Icon Aman
                      return (
                        <a key={idx} href={soc.url} className={`text-gray-400 transition ${soc.color}`}>
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
               </div>
               
               <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                  <h4 className="font-bold text-gray-700 mb-2">Lokasi</h4>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={18} className="text-puyuh-gold" /> Tangerang Selatan
                  </div>
               </div>
            </div>
          </motion.div>


          {/* --- KOLOM KANAN: AI CHAT --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-[600px] flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-puyuh-dark to-slate-800 p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20">
                  <Sparkles size={24} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PuyuhPrime AI</h3>
                  <p className="text-xs text-blue-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online (Gemini Pro)
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-6 overflow-y-auto bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-puyuh-gold' : 'bg-puyuh-dark'}`}>
                    {msg.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-puyuh-gold text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 shadow-sm border border-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400 text-xs ml-12">
                   <span className="animate-bounce">●</span>
                   <span className="animate-bounce delay-100">●</span>
                   <span className="animate-bounce delay-200">●</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendChat} className="p-4 bg-white border-t border-gray-100">
               <div className="flex gap-2">
                 <input 
                   type="text" 
                   value={inputMsg}
                   onChange={(e) => setInputMsg(e.target.value)}
                   placeholder="Tanya resep, harga, atau lokasi..."
                   className="flex-grow px-4 py-3 rounded-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-puyuh-gold focus:outline-none transition text-sm"
                 />
                 <button 
                   type="submit"
                   className="bg-puyuh-dark text-white p-3 rounded-full hover:bg-puyuh-gold transition shadow-md disabled:opacity-50"
                   disabled={!inputMsg.trim() || isTyping}
                 >
                   <Send size={20} />
                 </button>
               </div>
               <p className="text-[10px] text-center text-gray-400 mt-2">
                 Powered by Google Gemini AI.
               </p>
            </form>
          </motion.div>

        </div>

        {/* --- NEWSLETTER --- */}
        <div className="mt-20 bg-puyuh-gold rounded-3xl p-8 md:p-12 relative overflow-hidden text-center text-white shadow-xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <Mail size={48} className="mx-auto mb-4 opacity-80" />
              <h2 className="font-serif text-3xl font-bold mb-4">Jangan Lewatkan Promo!</h2>
              <p className="mb-8 opacity-90">Dapatkan notifikasi diskon catering dan update harga telur puyuh terbaru langsung di inbox Anda.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                 <input type="email" placeholder="Masukkan alamat email..." className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30" />
                 <button className="bg-puyuh-dark px-8 py-4 rounded-full font-bold hover:bg-white hover:text-puyuh-dark transition shadow-lg">
                    Subscribe
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Kontak;