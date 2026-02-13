import { Shield, Zap, DollarSign, MapPin, Award, Headphones, Smartphone, Users, Star, Truck, Clock, Lock, Bell, CreditCard, BarChart3, Globe } from 'lucide-react';

const OzelliklerPage = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "Güvenli Taşıma",
      description: "256-bit SSL şifreleme, kimlik doğrulama ve kapsamlı sigorta ile %100 güvenli taşıma garantisi. Tüm gönderileriniz sigorta kapsamındadır.",
      stats: "99.9% Güvenlik",
    },
    {
      icon: Zap,
      title: "Anında Eşleşme",
      description: "Yapay zeka destekli algoritma ile 15 saniyede en uygun taşıyıcıyı bulun. Hızlı ve akıllı eşleştirme sistemi.",
      stats: "15sn Ortalama",
    },
    {
      icon: DollarSign,
      title: "Şeffaf Fiyatlandırma",
      description: "Gizli ücret yok, net fiyatlar. Rekabetçi oranlar ve esnek ödeme seçenekleri ile bütçenize uygun çözümler.",
      stats: "%40 Tasarruf",
    },
    {
      icon: MapPin,
      title: "Gerçek Zamanlı Takip",
      description: "GPS teknolojisi ile yükünüzün konumunu canlı takip edin. Anlık bildirimler ve durum güncellemeleri.",
      stats: "Canlı Takip",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "5 yıldızlı puanlama sistemi, sertifikalı taşıyıcılar ve kalite kontrol süreçleri ile mükemmel hizmet.",
      stats: "4.9/5 Puan",
    },
    {
      icon: Headphones,
      title: "7/24 Premium Destek",
      description: "Uzman destek ekibimiz her an yanınızda. Canlı chat, telefon ve e-posta ile anında yardım alın.",
      stats: "7/24 Aktif",
    },
  ];

  const techFeatures = [
    { icon: Lock, title: "End-to-End Şifreleme", desc: "Verileriniz her zaman güvende" },
    { icon: Bell, title: "Akıllı Bildirimler", desc: "Önemli güncellemelerden haberdar olun" },
    { icon: CreditCard, title: "Güvenli Ödeme", desc: "3D Secure ile korumalı ödemeler" },
    { icon: BarChart3, title: "Detaylı Raporlama", desc: "Gönderim geçmişinizi analiz edin" },
    { icon: Globe, title: "Türkiye Geneli", desc: "81 ilde hizmet ağı" },
    { icon: Clock, title: "Hızlı Teslimat", desc: "Aynı gün teslimat seçeneği" },
    { icon: Truck, title: "Çoklu Araç Tipi", desc: "Kamyonet, kamyon, TIR seçenekleri" },
    { icon: Users, title: "Topluluk Değerlendirme", desc: "Gerçek kullanıcı yorumları" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gray-100/40 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Premium Özellikler</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Neden <span className="text-orange-500">MiniYük?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yük taşıma deneyiminizi bir üst seviyeye taşıyan profesyonel özelliklerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Ana Özellikler */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-orange-50 to-transparent w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik Özellikler */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Teknik Altyapı</h2>
            <p className="text-lg text-gray-600">En son teknolojilerle güçlendirilmiş platform</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techFeatures.map((feat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <feat.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">{feat.title}</h4>
                <p className="text-gray-500 text-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Rakamlarla MiniYük</h2>
              <p className="text-gray-400 text-lg">Güvenin ve başarının kanıtı</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "25K+", label: "Aktif Kullanıcı" },
                { value: "100K+", label: "Başarılı Teslimat" },
                { value: "81", label: "İl Kapsamı" },
                { value: "4.9/5", label: "Kullanıcı Puanı" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <Smartphone className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tüm Özellikleri Keşfedin</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            MiniYük uygulamasını indirin ve profesyonel yük taşıma deneyimini yaşayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300 hover:scale-105">
              App Store'dan İndir
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
              Google Play'den İndir
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OzelliklerPage;
