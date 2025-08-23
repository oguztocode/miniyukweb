import React, { useEffect, useState } from 'react';
import { Shield, Clock, DollarSign, MapPin, Star, Headphones, Smartphone, Users, Award, Zap } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll('.feature-card');
      features.forEach((feature, index) => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleFeatures(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Güvenli Taşıma",
      description: "256-bit SSL şifreleme, kimlik doğrulama ve kapsamlı sigorta ile %100 güvenli taşıma garantisi.",
      color: "text-cyan-500",
      bgGradient: "from-cyan-50 to-cyan-100",
      hoverGradient: "from-cyan-100 to-cyan-200",
      stats: "99.9% Güvenlik"
    },
    {
      icon: Zap,
      title: "Anında Eşleşme",
      description: "Yapay zeka destekli algoritma ile 15 saniyede en uygun taşıyıcıyı bulun. Hızlı ve akıllı eşleştirme.",
      color: "text-orange-500",
      bgGradient: "from-orange-50 to-orange-100",
      hoverGradient: "from-orange-100 to-orange-200",
      stats: "15sn Ortalama"
    },
    {
      icon: DollarSign,
      title: "Şeffaf Fiyatlandırma",
      description: "Gizli ücret yok, net fiyatlar. Rekabetçi oranlar ve esnek ödeme seçenekleri ile bütçenize uygun çözümler.",
      color: "text-green-500",
      bgGradient: "from-green-50 to-green-100",
      hoverGradient: "from-green-100 to-green-200",
      stats: "%40 Tasarruf"
    },
    {
      icon: MapPin,
      title: "Gerçek Zamanlı Takip",
      description: "GPS teknolojisi ile yükünüzün konumunu canlı takip edin. Anlık bildirimler ve durum güncellemeleri.",
      color: "text-purple-500",
      bgGradient: "from-purple-50 to-purple-100",
      hoverGradient: "from-purple-100 to-purple-200",
      stats: "Canlı Takip"
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "5 yıldızlı puanlama sistemi, sertifikalı taşıyıcılar ve kalite kontrol süreçleri ile mükemmel hizmet.",
      color: "text-yellow-500",
      bgGradient: "from-yellow-50 to-yellow-100",
      hoverGradient: "from-yellow-100 to-yellow-200",
      stats: "4.9/5 Puan"
    },
    {
      icon: Headphones,
      title: "7/24 Premium Destek",
      description: "Uzman destek ekibimiz her an yanınızda. Canlı chat, telefon ve e-posta ile anında yardım alın.",
      color: "text-red-500",
      bgGradient: "from-red-50 to-red-100",
      hoverGradient: "from-red-100 to-red-200",
      stats: "7/24 Aktif"
    }
  ];

  return (
    <section id="ozellikler" className="py-24 bg-white relative overflow-hidden">
      {/* Arkaplan Dekorasyonu */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-30 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-orange-100 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">Premium Özellikler</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Neden <span className="bg-gradient-to-r from-cyan-600 to-orange-500 bg-clip-text text-transparent">MiniYük?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yük taşıma deneyiminizi bir üst seviyeye taşıyan profesyonel özelliklerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card group relative transform transition-all duration-700 ${
                visibleFeatures.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`relative bg-gradient-to-br ${
                hoveredFeature === index ? feature.hoverGradient : feature.bgGradient
              } rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-white/50 overflow-hidden`}>
                
                {/* Arkaplan Animayonları*/}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500"></div>
                  
                <div className="relative z-10">
                  {/* icon Animasyonları */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 ${feature.color} bg-white/80 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-lg backdrop-blur-sm`}>
                      <feature.icon className="w-10 h-10" />
                    </div>
                    {/* İstatistik Rozeti*/}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      {feature.stats}
                    </div>
                  </div>

                  {/* İçerik */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Geliştirilmiş CTA Bölümü */}
        <div className="mt-24">
          <div className="relative bg-gradient-to-r from-cyan-600 via-cyan-500 to-orange-500 rounded-3xl p-12 text-white overflow-hidden">
            {/* Arkaplan */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-orange-500/20 animate-pulse"></div>
            
            {/* Animasyonlar */}
            <div className="absolute top-6 right-6  border border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-6 left-6 border border-white/20 rounded-full animate-pulse"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <Smartphone className="w-12 h-12 text-white animate-bounce" />
                  <Users className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">Hemen Başlayın!</h3>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                MiniYük uygulamasını indirin ve profesyonel yük taşıma deneyimini keşfedin. 
                İlk gönderiminizde %20 indirim fırsatını kaçırmayın!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-white text-cyan-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3">
                  <Smartphone size={24} />
                  <span>App Store</span>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:animate-ping"></div>
                </button>
                <button className="group bg-white text-cyan-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3">
                  <Smartphone size={24} />
                  <span>Google Play</span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:animate-ping"></div>
                </button>
              </div>
              
              <div className="mt-8 flex justify-center items-center space-x-8 text-cyan-100">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">4.9/5 Puan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">25K+ Kullanıcı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">%100 Güvenli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;