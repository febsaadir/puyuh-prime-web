import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen (Bagian yang tetap ada di setiap halaman)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Halaman (Isi konten yang berubah-ubah)
import Home from './pages/Home';
import Produk from './pages/Produk';
import Harga from './pages/Harga';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      {/* div "flex flex-col min-h-screen" ini adalah trik CSS 
        supaya Footer selalu menempel di bagian paling bawah layar,
        walaupun isi kontennya sedikit.
      */}
      <div className="flex flex-col min-h-screen bg-puyuh-cream text-puyuh-dark font-sans">
        
        {/* Navbar diletakkan di luar Routes agar selalu muncul */}
        <Navbar />

        {/* Main adalah wadah isi konten */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/harga" element={<Harga />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>

        {/* Footer juga diletakkan di luar Routes */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;