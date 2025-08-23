import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Package, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Üst Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Phone size={16} className="animate-pulse" />
              <span className="font-medium">+90 (546) 420 84 80</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-cyan-200 transition-colors">
              <Mail size={16} />
              <span className="font-medium">hello@miniyuk.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">7/24 Profesyonel Destek</span>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Package className="text-orange-500 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
              MiniYük
            </div>
          </div>
          
          {/* Masaüstü Menüsü */}
          <div className="hidden md:flex space-x-8">
            <a href="#anasayfa" className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group">
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#nasil-calisir" className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group">
              Nasıl Çalışır
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#ozellikler" className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group">
              Özellikler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#indir" className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group">
              Uygulamayı İndir
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#iletisim" className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="md:hidden text-cyan-600 hover:text-cyan-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col space-y-6">
              <a href="#anasayfa" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Ana Sayfa</a>
              <a href="#nasil-calisir" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Nasıl Çalışır</a>
              <a href="#ozellikler" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Özellikler</a>
              <a href="#indir" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">Uygulamayı İndir</a>
              <a href="#iletisim" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">İletişim</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;