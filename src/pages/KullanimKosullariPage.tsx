import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Scale, ChevronDown, ChevronRight, BookOpen, Users, Lock, Mail } from 'lucide-react';

const KullanimKosullariPage = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      icon: BookOpen,
      title: "Genel Hükümler",
      content: `MiniYük platformu ("Platform"), bireysel kullanıcılar ile taşıyıcıları bir araya getiren bir yük taşıma aracılık hizmetidir. Platformu kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız. MiniYük, bu koşulları önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.`,
      highlights: ["Aracılık hizmeti", "Koşulları kabul", "Değişiklik hakkı"]
    },
    {
      icon: Users,
      title: "Hesap Oluşturma ve Güvenlik",
      content: `Platformu kullanmak için geçerli bir hesap oluşturmanız gerekmektedir. Hesap bilgilerinizin doğruluğundan ve güvenliğinden siz sorumlusunuz. 18 yaşından küçük kişiler platformu kullanamazlar. Hesabınızın yetkisiz kullanımından şüpheleniyorsanız derhal bize bildirmeniz gerekmektedir.`,
      highlights: ["18 yaş sınırı", "Hesap güvenliği", "Bilgi doğruluğu"]
    },
    {
      icon: FileText,
      title: "Hizmet Kullanımı",
      content: `Platform üzerinden yük gönderimi oluşturabilir, taşıyıcı bulabilir ve gönderimlerinizi takip edebilirsiniz. Yasadışı, tehlikeli veya yasaklı maddelerin taşınması kesinlikle yasaktır. Platform, yalnızca aracılık hizmeti sunmakta olup taşıma işleminin doğrudan tarafı değildir.`,
      highlights: ["Yasal yükler", "Aracılık hizmeti", "Takip imkanı"]
    },
    {
      icon: Lock,
      title: "Gizlilik ve Veri Koruma",
      content: `Kişisel verileriniz KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu) kapsamında korunmaktadır. Verileriniz 256-bit SSL şifreleme ile güvence altındadır. Detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz.`,
      highlights: ["KVKK uyumlu", "256-bit SSL", "Veri güvenliği"]
    },
    {
      icon: Shield,
      title: "Fikri Mülkiyet",
      content: `Platform üzerindeki tüm içerik, tasarım, logo, yazılım ve diğer materyaller MiniYük'ün fikri mülkiyetidir. İzinsiz kopyalama, dağıtma veya değiştirme yasaktır.`,
      highlights: ["Telif hakları", "İzinsiz kullanım yasak"]
    },
    {
      icon: Scale,
      title: "Hesap Askıya Alma ve Fesih",
      content: `MiniYük, kullanım koşullarını ihlal eden hesapları önceden bildirimde bulunmaksızın askıya alma veya kalıcı olarak kapatma hakkını saklı tutar. Yasadışı faaliyetler, dolandırıcılık veya diğer kullanıcılara zarar verme durumlarında hesap derhal kapatılır.`,
      highlights: ["İhlal durumu", "Hesap kapatma", "Yasal yaptırım"]
    },
    {
      icon: Scale,
      title: "Uyuşmazlık Çözümü",
      content: `Bu koşullardan doğan uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanır. Uyuşmazlıkların çözümünde öncelikle arabuluculuk yoluna başvurulur. Arabuluculuk ile çözülemeyen uyuşmazlıklarda Ordu Mahkemeleri ve İcra Daireleri yetkilidir.`,
      highlights: ["TC kanunları", "Arabuluculuk", "Ordu Mahkemeleri"]
    },
    {
      icon: Mail,
      title: "İletişim",
      content: `Bu kullanım koşulları hakkında sorularınız için hello@miniyuk.com adresinden veya +90 (546) 420 84 80 numaralı telefondan bize ulaşabilirsiniz.`,
      highlights: ["E-posta desteği", "Telefon desteği"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-orange-50/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full mb-6">
            <FileText className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Yasal</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Kullanım <span className="text-orange-500">Koşulları</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MiniYük platformunu kullanmadan önce lütfen aşağıdaki koşulları dikkatlice okuyunuz.
          </p>
          <p className="text-sm text-gray-400 mt-4">Son güncelleme: 1 Ocak 2025</p>
        </div>
      </section>

      {/* İçerik - Sidebar + Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {/* Sol Sidebar - İçindekiler */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">İçindekiler</h3>
                <nav className="space-y-1">
                  {sections.map((section, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSection(activeSection === i ? null : i)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center space-x-2 ${
                        activeSection === i
                          ? 'bg-orange-50 text-orange-600 font-medium'
                          : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs text-gray-300 w-5">{String(i + 1).padStart(2, '0')}</span>
                      <span className="truncate">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Sağ İçerik */}
            <div className="lg:col-span-3 space-y-4">
              {sections.map((section, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeSection === i
                      ? 'border-orange-200 shadow-md'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setActiveSection(activeSection === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        activeSection === i ? 'bg-orange-500 text-white' : 'bg-gray-50 text-orange-500'
                      }`}>
                        <section.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Madde {i + 1}</span>
                        <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeSection === i ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    activeSection === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-14">
                        <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {section.highlights.map((h, hi) => (
                            <span key={hi} className="inline-flex items-center px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-500 font-medium">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alt Bilgi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Sorularınız mı var?</h3>
          <p className="text-gray-500 mb-6">
            Kullanım koşulları hakkında herhangi bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all duration-300 hover:scale-[1.03]"
            >
              <span>İletişime Geçin</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:hello@miniyuk.com"
              className="inline-flex items-center justify-center space-x-2 border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-orange-300 hover:text-orange-500 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@miniyuk.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KullanimKosullariPage;
