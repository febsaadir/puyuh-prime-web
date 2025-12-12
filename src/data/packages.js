// src/data/packages.js
import { Handshake, TrendingUp, Users } from 'lucide-react';

export const packages = [
  {
    id: 1,
    title: "Reseller Pemula",
    // Kita simpan Komponen Icon-nya disini, bukan JSX-nya (<Users />)
    // Agar ukurannya bisa diatur fleksibel di halaman utama nanti
    icon: Users, 
    cocok: "Ibu Rumah Tangga / Mahasiswa",
    syarat: "Min. Order 10 Pack",
    benefit: ["Diskon 10%", "Foto Produk Gratis", "Masuk Grup Support"],
    color: "bg-white border-gray-200"
  },
  {
    id: 2,
    title: "Mitra Restoran",
    icon: Handshake,
    cocok: "Warung Makan / Catering",
    syarat: "Langganan Rutin Mingguan",
    benefit: ["Harga Khusus (Flat)", "Prioritas Stok", "Pembayaran Tempo"],
    color: "bg-orange-50 border-puyuh-gold"
  },
  {
    id: 3,
    title: "Agen Wilayah",
    icon: TrendingUp,
    cocok: "Distributor Frozen Food",
    syarat: "Target Bulanan",
    benefit: ["Diskon Spesial 20%", "Support Marketing", "Area Proteksi"],
    color: "bg-puyuh-dark text-white"
  }
];