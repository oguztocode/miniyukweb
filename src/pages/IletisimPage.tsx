import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjbpgkb';

const IletisimPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          _subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+90 (546) 420 84 80",
      sub: "7/24 Aktif",
      href: "tel:+905464208480",
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "hello@miniyuk.com",
      sub: "24 saat içinde yanıt",
      href: "mailto:hello@miniyuk.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Ordu, Turkey",
      sub: "Merkez Ofis",
      href: "https://maps.google.com/?q=Ordu,Turkey",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "7/24 Destek",
      sub: "Hafta sonu dahil",
      href: "",
    },
  ];

  const faqItems = [
    { q: "Gönderim ne kadar sürede teslim edilir?", a: "Mesafeye bağlı olarak aynı gün veya 1-3 iş günü içinde teslim edilir." },
    { q: "Nasıl taşıyıcı bulurum?", a: "Yükünüzü paylaştıktan sonra yapay zeka destekli sistemimiz size en uygun taşıyıcıları önerir." },
    { q: "Gönderimimi nasıl takip ederim?", a: "Uygulama üzerinden GPS ile gerçek zamanlı olarak yükünüzün konumunu takip edebilirsiniz." },
    { q: "İptal politikası nedir?", a: "Taşıyıcı yükü almadan önce ücretsiz iptal edebilirsiniz." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Bize Ulaşın</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-orange-500">İletişim</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sorularınız, önerileriniz veya şikayetleriniz için bize ulaşın. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      {/* Form + İletişim Bilgileri Yan Yana */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Sol - Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Mesaj Gönderin</h2>
              <p className="text-gray-600 mb-8">Formu doldurun, size en kısa sürede dönüş yapalım.</p>

              {status === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-700 font-medium">Mesajınız başarıyla gönderildi!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <span className="text-red-700 font-medium">Bir hata oluştu. Lütfen tekrar deneyin.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    placeholder="Mesajınızın konusu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/15 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sağ - İletişim Bilgileri (üçerli alt alta) */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">İletişim Bilgileri</h2>
              <p className="text-gray-600 mb-6">Bize doğrudan ulaşabileceğiniz kanallar</p>
              {contactInfo.map((info, i) => {
                const Wrapper = info.href ? 'a' : 'div';
                const linkProps = info.href ? { 
                  href: info.href, 
                  ...(info.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})
                } : {};
                return (
                  <Wrapper key={i} {...linkProps} className={`flex items-center space-x-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300 ${info.href ? 'cursor-pointer' : ''}`}>
                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm">{info.title}</h3>
                      <p className="text-orange-500 font-medium text-sm">{info.value}</p>
                      <p className="text-gray-400 text-xs">{info.sub}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600">En çok merak edilen soruların cevapları</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  <h4 className="font-bold text-gray-800 text-sm leading-snug">{faq.q}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IletisimPage;
