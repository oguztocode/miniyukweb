import React from 'react';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Şirket Bilgileri */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Package className="text-orange-500 w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                MiniYük
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Türkiye'nin en güvenilir yük taşıma platformu. 
              Bireysel kullanıcılar için profesyonel, hızlı ve ekonomik çözümler sunuyoruz.
            </p>
            
            {/* İstatistik */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl">
                <div className="text-2xl font-bold text-cyan-400">25K+</div>
                <div className="text-gray-400 text-sm">Aktif Kullanıcı</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl">
                <div className="text-2xl font-bold text-orange-400">100K+</div>
                <div className="text-gray-400 text-sm">Teslimat</div>
              </div>
            </div>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a href="#" className="group w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl flex items-center justify-center hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl flex items-center justify-center hover:from-blue-900 hover:to-blue-950 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
          <h3 className="text-xl font-bold mb-8 text-orange-400 flex items-center ml-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Ana Sayfa', href: '#anasayfa' },
                { name: 'Nasıl Çalışır', href: '#nasil-calisir' },
                { name: 'Özellikler', href: '#ozellikler' },
                { name: 'Fiyatlandırma', href: '#' },
                { name: 'SSS', href: '#' },
                { name: 'Blog', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-orange-400 flex items-center ml-4">
              Destek & Yardım
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Yardım Merkezi', href: '#' },
                { name: 'Canlı Destek', href: '#' },
                { name: 'Kullanım Koşulları', href: '#' },
                { name: 'Gizlilik Politikası', href: '#' },
                { name: 'İade ve Değişim', href: '#' },
                { name: 'Güvenlik', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-orange-400">İletişim Bilgileri</h3>
            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl hover:from-cyan-500/20 transition-all duration-300">
                <Phone className="text-cyan-400 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">Telefon</div>
                  <div className="text-gray-400">+90 (532) 579 42 82</div>
                  <div className="text-xs text-cyan-400">7/24 Aktif</div>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl hover:from-orange-500/20 transition-all duration-300">
                <Mail className="text-orange-400 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">E-posta</div>
                  <div className="text-gray-400">hello@miniyuk.com</div>
                  <div className="text-xs text-orange-400">24 saat içinde yanıt</div>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl hover:from-green-500/20 transition-all duration-300">
                <MapPin className="text-green-400 w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-white">Adres</div>
                  <div className="text-gray-400">
                    Ordu, Turkey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © 2024 MiniYük. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold">4.9/5 Müşteri Memnuniyeti</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Gizlilik</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Koşullar</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Çerezler</a>
              </div>
              
              <div className="flex items-center space-x-2 text-cyan-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Sistem Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
