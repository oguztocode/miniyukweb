import { useEffect, useState, useRef } from 'react';
import { Shield, MapPin, Star, Smartphone, Users, Award, Zap } from 'lucide-react';

const Features = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Shield, title: "Güvenli Taşıma", description: "Kapsamlı güvence ile %100 güvenli taşıma garantisi" },
    { icon: Zap, title: "Anında Eşleşme", description: "AI destekli sistem ile saniyeler içinde taşıyıcı bulun" },
    { icon: MapPin, title: "Canlı Takip", description: "GPS ile yükünüzü gerçek zamanlı izleyin" },
    { icon: Award, title: "Kalite Garantisi", description: "Puanlama sistemi ile sertifikalı taşıyıcılar" },
  ];

  return (
    <section ref={sectionRef} id="ozellikler" className="relative overflow-hidden">
      <div className="h-4 bg-gradient-to-b from-white to-gray-50/50" />

      <div className="bg-gradient-to-b from-gray-50/50 via-white to-white relative">
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Futuristik Geçiş */}
          <div className="flex items-center justify-center mb-14">
            <svg viewBox="0 0 1200 40" className="w-full max-w-5xl" preserveAspectRatio="xMidYMid meet">
              <line x1="0" y1="20" x2="520" y2="20" stroke="#e5e7eb" strokeWidth="0.4" opacity="0.5"/>
              <line x1="0" y1="20" x2="520" y2="20" stroke="#f97316" strokeWidth="0.6" strokeDasharray="5,12" opacity="0.15">
                <animate attributeName="stroke-dashoffset" values="0;-34" dur="2.5s" repeatCount="indefinite"/>
              </line>
              <circle cx="600" cy="20" r="12" fill="white" stroke="#f3f4f6" strokeWidth="0.8"/>
              <circle cx="600" cy="20" r="7" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.12">
                <animate attributeName="r" values="7;12;7" dur="3.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.12;0.03;0.12" dur="3.5s" repeatCount="indefinite"/>
              </circle>
              <g transform="translate(592.5, 12.5) scale(0.625)">
                <path d="m7.5 4.27 9 5.15" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <path d="m3.3 7 8.7 5 8.7-5" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                <path d="M12 22V12" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </g>
              <line x1="680" y1="20" x2="1200" y2="20" stroke="#e5e7eb" strokeWidth="0.4" opacity="0.5"/>
              <line x1="680" y1="20" x2="1200" y2="20" stroke="#f97316" strokeWidth="0.6" strokeDasharray="5,12" opacity="0.15">
                <animate attributeName="stroke-dashoffset" values="0;34" dur="2.5s" repeatCount="indefinite"/>
              </line>
            </svg>
          </div>

          {/* Başlık */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-full mb-6 shadow-sm">
              <Star className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-600">Premium Özellikler</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Neden <span className="text-orange-500">MiniYük?</span>
            </h2>
          </div>

          {/* Ana İçerik: Sol Animasyon + Sağ Özellikler */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Sol - Futuristik Kargo Kamyonu Animasyonu */}
            <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div>
                <div className="relative overflow-hidden rounded-3xl">
                <svg viewBox="0 0 500 400" className="w-full block">
                  {/* Arka plan - şehir silueti */}
                  <rect x="0" y="0" width="500" height="400" fill="#f9fafb" rx="24"/>
                  
                  {/* Şehir silueti */}
                  <g opacity="0.08">
                    <rect x="30" y="180" width="40" height="120" rx="2" fill="#374151"/>
                    <rect x="80" y="140" width="35" height="160" rx="2" fill="#374151"/>
                    <rect x="125" y="200" width="30" height="100" rx="2" fill="#374151"/>
                    <rect x="340" y="160" width="45" height="140" rx="2" fill="#374151"/>
                    <rect x="395" y="190" width="35" height="110" rx="2" fill="#374151"/>
                    <rect x="440" y="170" width="40" height="130" rx="2" fill="#374151"/>
                  </g>

                  {/* Yol */}
                  <rect x="0" y="300" width="500" height="40" rx="0" fill="#e5e7eb" opacity="0.5"/>
                  <line x1="0" y1="320" x2="500" y2="320" stroke="#d1d5db" strokeWidth="2" strokeDasharray="20,15">
                    <animate attributeName="stroke-dashoffset" values="0;70" dur="0.8s" repeatCount="indefinite"/>
                  </line>
                  {/* Yol kenar çizgileri */}
                  <line x1="0" y1="302" x2="500" y2="302" stroke="#d1d5db" strokeWidth="1" strokeDasharray="40,20" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" values="0;60" dur="0.8s" repeatCount="indefinite"/>
                  </line>
                  <line x1="0" y1="338" x2="500" y2="338" stroke="#d1d5db" strokeWidth="1" strokeDasharray="40,20" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" values="0;60" dur="0.8s" repeatCount="indefinite"/>
                  </line>

                  {/* Hareketli kamyon */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,-1.5;0,0" dur="0.35s" repeatCount="indefinite"/>
                    
                    {/* Kasa gövde */}
                    <rect x="120" y="230" width="160" height="75" rx="8" fill="#374151"/>
                    <rect x="125" y="235" width="150" height="65" rx="5" fill="#4b5563"/>
                    
                    {/* Kasa üstü detay */}
                    <rect x="130" y="240" width="140" height="3" rx="1.5" fill="#6b7280" opacity="0.4"/>
                    
                    {/* MiniYük logo */}
                    <rect x="155" y="255" width="90" height="30" rx="6" fill="#f97316" opacity="0.15"/>
                    <text x="200" y="275" textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="bold">MiniYük</text>
                    
                    {/* Kabin */}
                    <rect x="280" y="248" width="65" height="57" rx="8" fill="#374151"/>
                    <rect x="288" y="255" width="35" height="25" rx="5" fill="#9ca3af" opacity="0.3"/>
                    
                    {/* Cam yansıması */}
                    <line x1="290" y1="257" x2="305" y2="272" stroke="white" strokeWidth="1.5" opacity="0.15"/>
                    
                    {/* Şoför silüeti */}
                    <circle cx="310" cy="268" r="7" fill="#6b7280" opacity="0.5"/>
                    <rect x="306" y="276" width="8" height="8" rx="3" fill="#6b7280" opacity="0.4"/>
                    
                    {/* Ön far */}
                    <rect x="340" y="280" width="8" height="12" rx="3" fill="#fbbf24" opacity="0.8">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Arka far */}
                    <rect x="120" y="285" width="6" height="8" rx="2" fill="#ef4444" opacity="0.6">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.2s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Tekerlekler */}
                    <circle cx="170" cy="310" r="16" fill="#1f2937" stroke="#374151" strokeWidth="3"/>
                    <circle cx="170" cy="310" r="6" fill="#6b7280"/>
                    <circle cx="170" cy="310" r="2" fill="#9ca3af"/>
                    
                    <circle cx="310" cy="310" r="16" fill="#1f2937" stroke="#374151" strokeWidth="3"/>
                    <circle cx="310" cy="310" r="6" fill="#6b7280"/>
                    <circle cx="310" cy="310" r="2" fill="#9ca3af"/>
                  </g>

                  

                  {/* Hız çizgileri */}
                  <g opacity="0.15">
                    <line x1="40" y1="260" x2="100" y2="260" stroke="#374151" strokeWidth="2" strokeLinecap="round">
                      <animate attributeName="x1" values="40;20;40" dur="0.8s" repeatCount="indefinite"/>
                      <animate attributeName="x2" values="100;70;100" dur="0.8s" repeatCount="indefinite"/>
                    </line>
                    <line x1="50" y1="275" x2="95" y2="275" stroke="#374151" strokeWidth="1.5" strokeLinecap="round">
                      <animate attributeName="x1" values="50;30;50" dur="0.7s" repeatCount="indefinite"/>
                      <animate attributeName="x2" values="95;65;95" dur="0.7s" repeatCount="indefinite"/>
                    </line>
                    <line x1="60" y1="290" x2="105" y2="290" stroke="#374151" strokeWidth="1" strokeLinecap="round">
                      <animate attributeName="x1" values="60;45;60" dur="0.9s" repeatCount="indefinite"/>
                      <animate attributeName="x2" values="105;80;105" dur="0.9s" repeatCount="indefinite"/>
                    </line>
                  </g>

                  {/* Rota noktaları */}
                  <circle cx="60" cy="130" r="8" fill="white" stroke="#374151" strokeWidth="2"/>
                  <circle cx="60" cy="130" r="3" fill="#374151"/>
                  <text x="60" y="118" textAnchor="middle" fill="#6b7280" fontSize="9">A</text>

                  <circle cx="430" cy="130" r="8" fill="white" stroke="#f97316" strokeWidth="2"/>
                  <circle cx="430" cy="130" r="3" fill="#f97316"/>
                  <text x="430" y="118" textAnchor="middle" fill="#f97316" fontSize="9">B</text>

                  {/* Rota çizgisi */}
                  <path d="M68,130 Q250,80 422,130" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
                  </path>

                  {/* Parıltılar */}
                  <circle cx="380" cy="200" r="2" fill="#f97316" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="450" cy="250" r="1.5" fill="#f97316" opacity="0.2">
                    <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </svg>

                
                </div>
              </div>
            </div>

            {/* Sağ - Özellik Listesi */}
            <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-gray-100"
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ctaGrid)" />
                </svg>
              </div>

              <div className="relative z-10 grid lg:grid-cols-5 items-center">
                <div className="lg:col-span-2 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 240 220" className="w-full max-w-xs">
                    <ellipse cx="120" cy="200" rx="100" ry="10" fill="white" opacity="0.1"/>
                    <g>
                      <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="1.5s" repeatCount="indefinite"/>
                      <circle cx="100" cy="65" r="18" fill="white" opacity="0.9"/>
                      <path d="M92 70 Q100 78 108 70" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="94" cy="62" r="2" fill="#ea580c"/>
                      <circle cx="106" cy="62" r="2" fill="#ea580c"/>
                      <path d="M80 58 Q100 40 120 58" fill="#fdba74" stroke="white" strokeWidth="1"/>
                      <rect x="78" y="56" width="44" height="5" rx="2" fill="#fdba74"/>
                      <rect x="85" y="84" width="30" height="45" rx="8" fill="white" opacity="0.85"/>
                      <line x1="85" y1="95" x2="60" y2="85" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
                      <line x1="115" y1="95" x2="140" y2="85" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
                      <line x1="92" y1="129" x2="82" y2="170" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85">
                        <animate attributeName="x2" values="82;85;82" dur="1.5s" repeatCount="indefinite"/>
                      </line>
                      <line x1="108" y1="129" x2="118" y2="170" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85">
                        <animate attributeName="x2" values="118;115;118" dur="1.5s" repeatCount="indefinite"/>
                      </line>
                      <ellipse cx="80" cy="173" rx="10" ry="5" fill="white" opacity="0.7">
                        <animate attributeName="cx" values="80;83;80" dur="1.5s" repeatCount="indefinite"/>
                      </ellipse>
                      <ellipse cx="120" cy="173" rx="10" ry="5" fill="white" opacity="0.7">
                        <animate attributeName="cx" values="120;117;120" dur="1.5s" repeatCount="indefinite"/>
                      </ellipse>
                    </g>
                    <g>
                      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="1.5s" repeatCount="indefinite"/>
                      <rect x="55" y="65" width="90" height="28" rx="4" fill="#fdba74" stroke="white" strokeWidth="1.5"/>
                      <line x1="100" y1="65" x2="100" y2="93" stroke="white" strokeWidth="1" opacity="0.5"/>
                      <line x1="55" y1="79" x2="145" y2="79" stroke="white" strokeWidth="1" opacity="0.5"/>
                      <text x="100" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">MiniYük</text>
                    </g>
                    <circle cx="160" cy="50" r="3" fill="white" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="45" cy="100" r="2" fill="white" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="180" cy="130" r="2.5" fill="white" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>

                <div className="lg:col-span-3 p-8 lg:p-12 text-white">
                  <h3 className="text-4xl font-bold mb-6">Hemen Başlayın!</h3>
                  <p className="text-gray-300 mb-8 max-w-xl text-lg leading-relaxed">
                    MiniYük uygulamasını indirin ve profesyonel yük taşıma deneyimini keşfedin.
                    İlk gönderiminizde %20 indirim fırsatını kaçırmayın!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="group bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl flex items-center justify-center space-x-3">
                      <Smartphone size={22} />
                      <span>App Store</span>
                    </button>
                    <button className="group bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center space-x-3">
                      <Smartphone size={22} />
                      <span>Google Play</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">4.9/5 Puan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">25K+ Kullanıcı</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span className="font-semibold">%100 Güvenli</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 bg-gradient-to-b from-white to-gray-50/30" />
    </section>
  );
};

export default Features;