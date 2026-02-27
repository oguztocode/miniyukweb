import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Şirket Bilgileri */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Package className="text-orange-500 w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                MiniYük
              </div>
            </div>
            
            <p className="text-gray-500 leading-relaxed">
              Türkiye'nin en güvenilir bireysel yük taşıma platformu. 
              İster Taşı, İster Taşıt! Profesyonel, hızlı ve ekonomik çözümler sunuyoruz.
            </p>
            
            {/* İstatistik */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
                <div className="text-xl font-bold text-gray-800">25K+</div>
                <div className="text-gray-400 text-xs">Aktif Kullanıcı</div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl border border-gray-100">
                <div className="text-xl font-bold text-gray-800">100K+</div>
                <div className="text-gray-400 text-xs">Teslimat</div>
              </div>
            </div>
            
            {/* Social media */}
            <div className="flex space-x-3">
              <a href="#" className="group w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="group w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
          <h3 className="text-sm font-bold mb-6 text-gray-800 uppercase tracking-wider flex items-center ml-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Nasıl Çalışır', href: '/nasil-calisir' },
                { name: 'Özellikler', href: '/ozellikler' },
                { name: 'İletişim', href: '/iletisim' },
                { name: 'Yardım Merkezi', href: '/yardim' },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-orange-500 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-gray-800 uppercase tracking-wider flex items-center ml-4">
              Destek & Yardım
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Yardım Merkezi', href: '/yardim' },
                { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
                { name: 'Gizlilik Politikası', href: '/kullanim-kosullari' },
                { name: 'İletişim', href: '/iletisim' },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-600 hover:text-orange-500 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-gray-800 uppercase tracking-wider">İletişim Bilgileri</h3>
            <div className="space-y-6">
              <a href="tel:+905464208480" className="group flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-sm transition-all duration-300 border border-gray-100">
                <Phone className="text-orange-500 w-5 h-5 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-800 text-sm">Telefon</div>
                  <div className="text-gray-500 text-sm group-hover:text-orange-500 transition-colors">+90 (546) 420 84 80</div>
                </div>
              </a>
              
              <a href="mailto:hello@miniyuk.com" className="group flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-sm transition-all duration-300 border border-gray-100">
                <Mail className="text-orange-500 w-5 h-5 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-800 text-sm">E-posta</div>
                  <div className="text-gray-500 text-sm group-hover:text-orange-500 transition-colors">hello@miniyuk.com</div>
                </div>
              </a>
              
              <a href="https://maps.google.com/?q=Ordu,Turkey" target="_blank" rel="noopener noreferrer" className="group flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-sm transition-all duration-300 border border-gray-100">
                <MapPin className="text-orange-500 w-5 h-5 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-800 text-sm">Adres</div>
                  <div className="text-gray-500 text-sm group-hover:text-orange-500 transition-colors">Ordu, Turkey</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MiniYük. Tüm hakları saklıdır.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link to="/kullanim-kosullari" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Gizlilik</Link>
              <Link to="/kullanim-kosullari" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Koşullar</Link>
              <Link to="/iletisim" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">İletişim</Link>
              <div className="flex items-center space-x-1.5 text-gray-400">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-xs">Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
