import React, { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, Package, Truck, Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="anasayfa" className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-orange-50 overflow-hidden">
      {/* Arka Plan Animasyonları */}
      <div className="absolute inset-0">
        
      </div>


      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Ana sayfa sol içerik */}
          <div className="space-y-10 animate-slideInLeft">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-orange-100 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">Türkiye'nin #1 Yük Taşıma Platformu</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">Yükünü</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  Güvenle
                </span>
                <br />
                <span className="text-gray-800">Taşıt!</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Profesyonel yük taşıma çözümü ile yüklerinizi güvenilir taşıyıcılarla buluşturun. 
                Hızlı, ekonomik ve %100 güvenli taşıma deneyimi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3">
                <Smartphone size={24} />
                <span>Uygulamayı İndir</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Nasıl Çalışır?
              </button>
            </div>

            {/* Gelişmiş İstatistikler */}
            <div className="grid grid-cols-3 gap-8 pt-10">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">25K+</div>
                <div className="text-gray-600 font-medium">Aktif Kullanıcı</div>
                <div className="w-full h-1 bg-cyan-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full animate-progress"></div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform">100K+</div>
                <div className="text-gray-600 font-medium">Başarılı Teslimat</div>
                <div className="w-full h-1 bg-orange-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-progress-delayed"></div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-yellow-600 group-hover:scale-110 transition-transform">4.9</div>
                <div className="text-gray-600 font-medium">Kullanıcı Puanı</div>
                <div className="w-full h-1 bg-yellow-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-progress"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Kamyon Kutusu */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              {/* Ana Telefon Kabı */}
              <div className="relative bg-gradient-to-br from-cyan-100 to-orange-100 rounded-3xl p-8 shadow-2xl  transition-all duration-500">
                {/* Telfon Maskesi */}
                <div className="bg-white rounded-3xl p-8 shadow-xlhover:rotate-0 transition-all duration-500">
                  <div className="space-y-6">
                    {/* Uygulama Başlığı */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-2xl flex items-center justify-center">
                          <Package className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">MiniYük</div>
                          <div className="text-sm text-gray-500">Yük Gönder</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm font-semibold text-gray-700">Online</span>
                      </div>
                    </div>
                    
                    {/* Teslimat Rotası Animasyonu */}
                    <div className="relative py-8 bg-gray-50 rounded-2xl">
                      <div className="flex justify-between items-center px-6">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-cyan-500 rounded-full animate-pulse flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-600 mt-2 font-medium">İstanbul</span>
                        </div>
                        
                        <div className="flex-1 relative mx-4">
                          <div className="h-2 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-30 animate-slide"></div>
                          </div>
                          {/* Kamyon Animasyonu */}
                          <div className="absolute top-1/2 transform -translate-y-1/2 animate-truck-move">
                            <Truck className="w-6 h-6 text-orange-600" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs text-gray-600 mt-2 font-medium">Sakarya</span>
                        </div>
                      </div>
                      
                      {/* Tahmini durum bilgisi */}
                      <div className="text-center mt-4">
                        <div className="inline-flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                          <span className="text-xs font-semibold text-green-700">Yolda - Tahmini 2 saat</span>
                        </div>
                      </div>
                    </div>

                    {/* Hızlı Eşleşme */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cyan-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-cyan-600">15dk</div>
                        <div className="text-xs text-gray-600">Ortalama Eşleşme</div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-orange-600">%99</div>
                        <div className="text-xs text-gray-600">Başarı Oranı</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll İndikatörü */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;