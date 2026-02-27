import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Package } from 'lucide-react';

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
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white'
    }`}>
      {/* Üst Bar - scroll'da gizlenir */}
      <div className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden transition-all duration-500 ${
        scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-20 py-2.5 opacity-100'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@miniyuk.com" className="flex items-center space-x-2 hover:text-orange-100 transition-colors">
              <Mail size={14} />
              <span className="font-medium">hello@miniyuk.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span className="font-medium tracking-wide text-white/90">İster Taşı, İster Taşıt!</span>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative group">
              <Package className="text-orange-500 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              MiniYük
            </div>
          </Link>
          
          {/* Masaüstü Menüsü */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="relative text-gray-700 hover:text-orange-500 transition-all duration-300 group font-medium">
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/nasil-calisir" className="relative text-gray-700 hover:text-orange-500 transition-all duration-300 group font-medium">
              Nasıl Çalışır
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/ozellikler" className="relative text-gray-700 hover:text-orange-500 transition-all duration-300 group font-medium">
              Özellikler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/iletisim" className="relative text-gray-700 hover:text-orange-500 transition-all duration-300 group font-medium">
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="md:hidden text-orange-500 hover:text-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-orange-100 animate-slideDown">
            <div className="flex flex-col space-y-6">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Ana Sayfa</Link>
              <Link to="/nasil-calisir" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Nasıl Çalışır</Link>
              <Link to="/ozellikler" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Özellikler</Link>
              <Link to="/iletisim" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">İletişim</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
