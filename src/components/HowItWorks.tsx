import React, { useEffect, useState } from 'react';
import { Upload, Search, Truck, CheckCircle, ArrowRight, Package } from 'lucide-react';

const HowItWorks = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Kaydırma konumuna göre adımları canlandırın
      const steps = document.querySelectorAll('.step-card');
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSteps(prev => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: Upload,
      title: "Yükünü Paylaş",
      description: "Taşınacak yükünüzün detaylarını, başlangıç ve varış noktalarını kolayca belirtin. Fotoğraf ekleyin, boyut ve ağırlık bilgilerini girin.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
      delay: "0s"
    },
    {
      icon: Search,
      title: "Taşıyıcı Bul",
      description: "Yapay zeka destekli sistemimiz size en uygun, güvenilir ve ekonomik taşıyıcıları anında bulur ve önerir.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      delay: "0.2s"
    },
    {
      icon: Truck,
      title: "Taşıma Başlasın",
      description: "Seçtiğiniz taşıyıcı yükünüzü alır. Gerçek zamanlı takip ile yükünüzün konumunu her an görün.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      delay: "0.4s"
    },
    {
      icon: CheckCircle,
      title: "Güvenle Teslim Al",
      description: "Yükünüz güvenle teslim edilir. Otomatik ödeme sistemi ile işlem tamamlanır. Taşıyıcıyı değerlendirin.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      delay: "0.6s"
    }
  ];

  return (
    <section id="nasil-calisir" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-orange-100 px-6 py-3 rounded-full mb-6">
            <ArrowRight className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-semibold text-gray-700">Süreç Adımları</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            4 basit adımda yükünüzü profesyonel taşıyıcılarla buluşturun
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-orange-200 to-green-200"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card relative group transform transition-all duration-700 ${
                visibleSteps.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: step.delay }}
            >
              {/* Adım Sayısı */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>

              {/* Kart */}
              <div className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-white/50`}>
                {/* Arkaplan Animasyonları */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon kısımları*/}
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mb-6 group-hover:6 transition-all duration-500 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* İçerik */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 w-full h-2 bg-white/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${step.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}></div>
                  </div>
                </div>
              </div>

              {/* Connection arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 mb-2">
                  <ArrowRight className="w-6 h-6 text-cyan-400 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center space-y-6">
            <button className="group bg-gradient-to-r from-cyan-600 via-cyan-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300  flex items-center space-x-3">
              <span>Hemen Başla</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <p className="text-sm text-gray-500">
              Ücretsiz kayıt ol, hemen yük göndermeye başla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;