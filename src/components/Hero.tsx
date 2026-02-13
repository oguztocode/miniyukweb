import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Package, Truck, Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="anasayfa" className="relative min-h-screen bg-white overflow-hidden">
      {/* Futuristik arka plan - hafif, göz yormayan */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient orb'lar */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-50/30 rounded-full blur-[120px] animate-float-delayed" />
        {/* Futuristik ince çizgiler */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#f97316" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
        {/* Yüzen geometrik şekiller */}
        <div className="absolute top-1/4 right-[15%] w-24 h-24 border border-orange-200/20 rounded-2xl animate-spin-slow" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-1/4 left-[8%] w-16 h-16 border border-gray-200/30 rounded-full animate-float" />
        <div className="absolute top-[60%] right-[8%] w-10 h-10 border border-orange-200/15 rounded-lg rotate-45 animate-float-delayed" />
      </div>

      {/* Parallax efekti */}
      <div
        className="container mx-auto px-4 py-8 relative z-10"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Sol içerik */}
          <div className="space-y-10 animate-slideInLeft">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-600">Bireysel Yük Taşıma Platformu</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-800">İster</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Taşı,
                </span>
                <br />
                <span className="text-gray-800">İster Taşıt!</span>
              </h1>
              
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Bireysel yük taşıma çözümü ile yüklerinizi güvenilir taşıyıcılarla buluşturun. 
                Hızlı, ekonomik ve %100 güvenli taşıma deneyimi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/15 flex items-center justify-center space-x-3">
                <Smartphone size={22} />
                <span>Uygulamayı İndir</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/nasil-calisir" className="border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-orange-300 hover:text-orange-500 transition-all duration-300 text-center">
                Nasıl Çalışır?
              </Link>
            </div>

            {/* İstatistikler - daha soft */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">25K+</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Aktif Kullanıcı</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">100K+</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Başarılı Teslimat</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">4.9</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Kullanıcı Puanı</div>
              </div>
            </div>
          </div>

          {/* Sağ - Futuristik uygulama mockup */}
          <div className="relative animate-slideInRight">
            <div className="relative">
              {/* Glow efekti */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/20 to-transparent rounded-[2rem] blur-2xl" />
              
              <div className="relative bg-white rounded-3xl p-1 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-[1.4rem] p-7">
                  <div className="space-y-5">
                    {/* Uygulama Başlığı */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center">
                          <Package className="text-white w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-sm">MiniYük</div>
                          <div className="text-xs text-gray-400">Yük Gönder</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1.5 bg-green-50 px-2.5 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-green-600">Online</span>
                      </div>
                    </div>
                    
                    {/* Teslimat Rotası */}
                    <div className="relative py-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex justify-between items-center px-5">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                          <span className="text-[10px] text-gray-500 mt-1.5 font-medium">İstanbul</span>
                        </div>
                        
                        <div className="flex-1 relative mx-3">
                          <div className="h-[3px] bg-gray-200 rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-slide" style={{ width: '60%' }} />
                          </div>
                          <div className="absolute top-1/2 transform -translate-y-1/2 animate-truck-move">
                            <Truck className="w-5 h-5 text-orange-500" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-[10px] text-gray-500 mt-1.5 font-medium">Sakarya</span>
                        </div>
                      </div>
                      
                      <div className="text-center mt-3">
                        <div className="inline-flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                          <span className="text-[10px] font-medium text-gray-600">Yolda — Tahmini 2 saat</span>
                        </div>
                      </div>
                    </div>

                    {/* Alt istatistikler */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-center">
                        <div className="text-xl font-bold text-gray-800">15dk</div>
                        <div className="text-[10px] text-gray-400 font-medium">Ortalama Eşleşme</div>
                      </div>
                      <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-xl text-center">
                        <div className="text-xl font-bold text-gray-800">%99</div>
                        <div className="text-[10px] text-gray-400 font-medium">Başarı Oranı</div>
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2.5s' }}>
        <div className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-gray-400 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;