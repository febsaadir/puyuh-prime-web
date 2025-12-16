import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // --- LOGIKA WARNA BARU YANG DIPERBAIKI ---
  
  // Cek apakah user sedang berada di halaman Home ("/")
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Jika discroll lebih dari 20px, aktifkan mode scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOGIKA STYLE NAVBAR:
  // 1. Jika di Home & belum scroll: Transparan, Teks Putih
  // 2. Jika di Home & sudah scroll: Putih, Teks Gelap
  // 3. Jika BUKAN di Home (Produk, Kontak, dll): SELALU Putih, Teks Gelap
  
  const isTransparent = isHomePage && !scrolled;

  // Class untuk Background Navbar
  const navBackground = isTransparent 
    ? 'bg-transparent py-4' 
    : 'bg-white shadow-md py-2';

  // Class untuk Warna Teks Menu
  const textColor = isTransparent ? 'text-white' : 'text-gray-700';
  const logoColor = isTransparent ? 'text-white' : 'text-puyuh-dark';
  const hamburgerColor = isTransparent ? 'text-white' : 'text-puyuh-dark';

  // Fungsi menandai menu aktif
  const getMenuClass = (path) => {
    const baseClass = "text-sm uppercase tracking-wide font-medium transition-colors duration-300";
    
    if (location.pathname === path) {
      return `${baseClass} text-puyuh-gold font-bold`;
    }
    return `${baseClass} ${textColor} hover:text-puyuh-gold`;
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/produk' },
    { name: 'Kemitraan', path: '/kemitraan' },
    { name: 'Tentang Kami', path: '/tentang' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO BRAND */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-puyuh-gold p-2 rounded-lg text-white shadow-md group-hover:scale-110 transition duration-300">
                <ShoppingBag size={20} />
              </div>
              <h1 className={`font-serif text-2xl font-bold tracking-wide ${logoColor}`}>
                Puyuh<span className="text-puyuh-gold">Prime</span>
              </h1>
            </Link>
          </div>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={getMenuClass(item.path)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link 
                to="/kontak" 
                className="bg-puyuh-gold text-white px-6 py-2.5 rounded-full font-medium hover:bg-puyuh-dark hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* 3. TOMBOL MENU HP */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${hamburgerColor}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. TAMPILAN MENU HP (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  location.pathname === item.path ? "bg-orange-50 text-puyuh-gold" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/kontak"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center w-full bg-puyuh-gold text-white px-3 py-3 rounded-xl font-bold hover:bg-puyuh-dark transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;