import { useState } from 'react';
import { Search, HelpCircle, Truck, MapPin, Phone, ChevronDown, ChevronUp, Mail } from 'lucide-react';

const YardimMerkeziPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: Truck,
      title: "Gönderim & Teslimat",
      articles: [
        { q: "Gönderim nasıl oluşturulur?", a: "Uygulamayı açın, 'Yeni Gönderi' butonuna tıklayın. Yükünüzün fotoğrafını çekin, boyut ve ağırlık bilgilerini girin, başlangıç ve varış adreslerini belirleyin. Taşıma tarihini seçtikten sonra sistem size en uygun taşıyıcıları önerecektir." },
        { q: "Gönderim süreleri ne kadar?", a: "Şehir içi gönderimler genellikle aynı gün, şehirler arası gönderimler 1-3 iş günü içinde teslim edilir. Mesafe ve yük büyüklüğüne göre süre değişebilir." },
        { q: "Gönderimi nasıl takip ederim?", a: "Uygulamadaki 'Gönderilerim' bölümünden gerçek zamanlı GPS takibi yapabilirsiniz. Ayrıca her durum değişikliğinde anlık bildirim alırsınız." },
        { q: "Gönderim iptal edilebilir mi?", a: "Taşıyıcı yükü almadan önce ücretsiz iptal edebilirsiniz. Yük alındıktan sonra iptal için müşteri hizmetleri ile iletişime geçmeniz gerekir." },
      ]
    },
    {
      icon: MapPin,
      title: "Hesap & Profil",
      articles: [
        { q: "Hesap nasıl oluşturulur?", a: "Uygulamayı indirin, telefon numaranız veya e-posta adresiniz ile kayıt olun. SMS doğrulaması sonrasında hesabınız aktif olacaktır." },
        { q: "Şifremi unuttum, ne yapmalıyım?", a: "Giriş ekranında 'Şifremi Unuttum' bağlantısına tıklayın. E-posta veya SMS ile şifre sıfırlama bağlantısı alacaksınız." },
        { q: "Profil bilgilerimi nasıl güncellerim?", a: "Uygulamada Profil > Ayarlar bölümünden ad, soyad, telefon, e-posta ve adres bilgilerinizi güncelleyebilirsiniz." },
      ]
    },
  ];

  const filteredCategories = searchQuery
    ? categories.map(cat => ({
        ...cat,
        articles: cat.articles.filter(
          a => a.q.toLowerCase().includes(searchQuery.toLowerCase()) || a.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.articles.length > 0)
    : categories;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Destek Merkezi</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Yardım <span className="text-orange-500">Merkezi</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Aradığınız cevabı bulamadınız mı? Aşağıdan arayın veya kategorilere göz atın.
          </p>

          {/* Arama */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sorunuzu arayın..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-orange-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none text-lg transition-all shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Kategori Kartları */}
          {!searchQuery && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categories.map((cat, i) => (
                <a
                  key={i}
                  href={`#category-${i}`}
                  className="bg-white rounded-2xl p-6 shadow-md border border-orange-50 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <cat.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{cat.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{cat.articles.length} makale</p>
                </a>
              ))}
            </div>
          )}

          {/* SSS Listesi */}
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredCategories.map((cat, catIndex) => (
              <div key={catIndex} id={`category-${catIndex}`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.articles.map((article, artIndex) => {
                    const globalIndex = catIndex * 100 + artIndex;
                    const isOpen = openFaq === globalIndex;
                    return (
                      <div
                        key={artIndex}
                        className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-orange-300 shadow-lg' : 'border-orange-100 shadow-sm hover:shadow-md'}`}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-gray-800 pr-4">{article.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-orange-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">{article.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destek CTA */}
      <section className="py-16 bg-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bizi Arayın</h3>
              <p className="text-gray-600 mb-6">Telefon ile hızlı destek alın</p>
              <a href="tel:+905464208480" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300">
                +90 (546) 420 84 80
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">E-posta Gönderin</h3>
              <p className="text-gray-600 mb-6">Detaylı sorularınız için yazın</p>
              <a href="mailto:hello@miniyuk.com" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300">
                hello@miniyuk.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YardimMerkeziPage;
