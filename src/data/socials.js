// src/data/socials.js
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const socialMedia = [
  { 
    name: "Instagram", 
    // Kita simpan icon sebagai komponen, bukan JSX
    icon: Instagram, 
    url: "https://instagram.com", 
    color: "hover:text-pink-600" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    url: "https://facebook.com", 
    color: "hover:text-blue-600" 
  },
  { 
    name: "Youtube", 
    icon: Youtube, 
    url: "https://youtube.com", 
    color: "hover:text-red-600" 
  },
];

export const foodDelivery = [
  { name: "GoFood", color: "bg-green-600", url: "#" },
  { name: "GrabFood", color: "bg-green-500", url: "#" },
  { name: "ShopeeFood", color: "bg-orange-500", url: "#" },
];