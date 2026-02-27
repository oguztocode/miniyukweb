import { Upload, Search, Truck, CheckCircle, ArrowRight, Smartphone, Star, Users, Zap, MapPin, Shield } from 'lucide-react';

const NasilCalisirPage = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Yükünü Paylaş",
      description: "Taşınacak yükünüzün detaylarını, başlangıç ve varış noktalarını kolayca belirtin. Fotoğraf ekleyin, boyut ve ağırlık bilgilerini girin.",
      details: [
        "Yük fotoğrafı çekin veya galeriden seçin",
        "Boyut ve ağırlık bilgilerini girin",
        "Başlangıç ve varış adreslerini belirleyin",
        "Taşıma tarihini ve saatini seçin"
      ]
    },
    {
      icon: Search,
      number: "02",
      title: "Taşıyıcı Bul",
      description: "Yapay zeka destekli sistemimiz size en uygun, güvenilir ve ekonomik taşıyıcıları anında bulur ve önerir.",
      details: [
        "AI destekli akıllı eşleştirme",
        "Taşıyıcı profillerini ve puanlarını inceleyin",
        "Fiyat tekliflerini karşılaştırın",
        "En uygun taşıyıcıyı seçin"
      ]
    },
    {
      icon: Truck,
      number: "03",
      title: "Taşıma Başlasın",
      description: "Seçtiğiniz taşıyıcı yükünüzü alır. Gerçek zamanlı takip ile yükünüzün konumunu her an görün.",
      details: [
        "Gerçek zamanlı GPS takibi",
        "Anlık bildirimler alın",
        "Taşıyıcı ile mesajlaşın",
        "Tahmini varış süresini görün"
      ]
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Güvenle Teslim Al",
      description: "Yükünüz güvenle teslim edilir. Otomatik ödeme sistemi ile işlem tamamlanır.",
      details: [
        "Teslimat onayı verin",
        "Otomatik güvenli ödeme",
        "Taşıyıcıyı değerlendirin",
        "Fatura ve makbuzunuzu alın"
      ]
    }
  ];

  const advantages = [
    { icon: Zap, title: "Anlık Bildirim", desc: "Her adımda bilgilendirilirsiniz" },
    { icon: MapPin, title: "Canlı Takip", desc: "GPS ile gerçek zamanlı izleme" },
    { icon: Star, title: "Puanlama Sistemi", desc: "Güvenilir taşıyıcı seçimi" },
    { icon: Users, title: "7/24 Destek", desc: "Her zaman yanınızdayız" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-100/40 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Süreç Adımları</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Nasıl <span className="text-orange-500">Çalışır?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            4 basit adımda yükünüzü güvenilir taşıyıcılarla buluşturun. Hızlı, kolay ve güvenli.
          </p>
        </div>
      </section>

      {/* Adımlar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* İçerik */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-bold text-gray-200">{step.number}</span>
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/15">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{step.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Görsel */}
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl" />
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-32 h-32 bg-orange-500 rounded-3xl flex items-center justify-center shadow-xl shadow-orange-500/15">
                        <step.icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="relative z-10 mt-8 text-center">
                      <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Adım {step.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Neden MiniYük?</h2>
            <p className="text-lg text-gray-600">Her adımda yanınızdayız</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                  <adv.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
            {/* Arka plan dekor */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
              <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaGridNasil" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaGridNasil)" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-5 items-center">
              {/* Sol - SVG illüstrasyon */}
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

              {/* Sağ - İçerik */}
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
      </section>
    </div>
  );
};

export default NasilCalisirPage;
