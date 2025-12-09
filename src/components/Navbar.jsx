import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efek transisi: Saat discroll, navbar jadi putih & ada bayangan
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi menandai menu yang sedang aktif
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-puyuh-gold font-bold" 
      : "text-gray-600 hover:text-puyuh-gold transition-colors duration-300";
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Produk', path: '/produk' },
    { name: 'Harga', path: '/harga' },
    { name: 'Tentang Kami', path: '/tentang' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO BRAND */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              {/* Ikon Tas Belanja */}
              <div className="bg-puyuh-gold p-2 rounded-lg text-white shadow-md group-hover:scale-110 transition duration-300">
                <ShoppingBag size={20} />
              </div>
              <h1 className="font-serif text-2xl font-bold text-puyuh-dark tracking-wide">
                Puyuh<span className="text-puyuh-gold">Prime</span>
              </h1>
            </Link>
          </div>

          {/* 2. MENU DESKTOP (Layar Laptop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm uppercase tracking-wide font-medium ${isActive(item.path)}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Tombol Contact Us yang Menonjol */}
              <Link 
                to="/kontak" 
                className="bg-puyuh-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-puyuh-gold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* 3. TOMBOL MENU HP (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-puyuh-dark hover:text-puyuh-gold focus:outline-none"
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
              className="block mt-4 text-center w-full bg-puyuh-dark text-white px-3 py-3 rounded-xl font-bold hover:bg-puyuh-gold transition"
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