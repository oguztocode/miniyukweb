import { useEffect, useState, useRef } from 'react';
import { Upload, Search, Truck, CheckCircle, ArrowRight, Package, MapPin, Camera, Star, Navigation } from 'lucide-react';

const HowItWorks = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'tasi' | 'tasit'>('tasi');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.15 }
    );
    const cards = document.querySelectorAll('.how-step');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeTab]);

  const tasiSteps = [
    {
      icon: Camera,
      title: "Yükünü Fotoğrafla",
      description: "Taşınacak yükünüzün fotoğrafını çekin, boyut ve ağırlık bilgilerini girin. Başlangıç ve varış adreslerini belirleyin.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Kişi - telefon tutan, fotoğraf çeken */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" repeatCount="indefinite"/>
            <circle cx="80" cy="60" r="16" fill="#374151"/>
            <rect x="68" y="78" width="24" height="40" rx="8" fill="#4b5563"/>
            <line x1="68" y1="90" x2="50" y2="100" stroke="#374151" strokeWidth="5" strokeLinecap="round"/>
            <line x1="92" y1="88" x2="110" y2="78" stroke="#374151" strokeWidth="5" strokeLinecap="round"/>
            <line x1="74" y1="118" x2="66" y2="150" stroke="#374151" strokeWidth="5" strokeLinecap="round"/>
            <line x1="86" y1="118" x2="94" y2="150" stroke="#374151" strokeWidth="5" strokeLinecap="round"/>
          </g>
          {/* Telefon ekranı */}
          <rect x="102" y="62" width="44" height="72" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
          <rect x="108" y="74" width="32" height="22" rx="3" fill="#f3f4f6"/>
          <rect x="116" y="80" width="16" height="10" rx="2" fill="#f97316" opacity="0.3"/>
          <circle cx="124" cy="85" r="4" fill="none" stroke="#f97316" strokeWidth="1.5">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <rect x="108" y="100" width="32" height="4" rx="2" fill="#e5e7eb"/>
          <rect x="108" y="108" width="22" height="4" rx="2" fill="#e5e7eb"/>
          <rect x="108" y="120" width="32" height="8" rx="4" fill="#f97316" opacity="0.8"/>
          <text x="124" y="127" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">PAYLAŞ</text>
          {/* Kutu */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2.5s" repeatCount="indefinite"/>
            <rect x="180" y="90" width="60" height="45" rx="5" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="210" y1="90" x2="210" y2="135" stroke="#f97316" strokeWidth="1" opacity="0.4"/>
            <line x1="180" y1="112" x2="240" y2="112" stroke="#f97316" strokeWidth="1" opacity="0.4"/>
            <text x="210" y="107" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="bold">KARGO</text>
          </g>
          {/* Bağlantı çizgisi */}
          <line x1="146" y1="98" x2="178" y2="105" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.5s" repeatCount="indefinite"/>
          </line>
          {/* Zemin */}
          <ellipse cx="140" cy="170" rx="120" ry="6" fill="#f3f4f6"/>
        </svg>
      ),
    },
    {
      icon: Search,
      title: "Taşıyıcıları İncele",
      description: "Yapay zeka destekli sistemimiz size en uygun taşıyıcıları önerir. Profilleri, puanları ve fiyatları karşılaştırın.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Merkez kişi - bekleyen */}
          <g>
            <circle cx="140" cy="70" r="14" fill="#374151"/>
            <rect x="130" y="86" width="20" height="32" rx="6" fill="#4b5563"/>
            <line x1="130" y1="96" x2="115" y2="106" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
            <line x1="150" y1="96" x2="165" y2="106" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
          </g>
          {/* Radar dalgaları */}
          <circle cx="140" cy="90" r="30" fill="none" stroke="#f97316" strokeWidth="0.8" opacity="0.2">
            <animate attributeName="r" values="30;60;30" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="140" cy="90" r="20" fill="none" stroke="#f97316" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="r" values="20;45;20" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          {/* Taşıyıcı 1 - sol */}
          <g opacity="0.8">
            <circle cx="50" cy="80" r="10" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
            <rect x="43" y="75" width="10" height="7" rx="1.5" fill="#f97316" opacity="0.7"/>
            <rect x="53" y="77" width="5" height="5" rx="1" fill="#ea580c" opacity="0.7"/>
            <line x1="60" y1="80" x2="126" y2="85" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.4">
              <animate attributeName="stroke-dashoffset" values="0;-14" dur="1s" repeatCount="indefinite"/>
            </line>
            <text x="50" y="100" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">4.8 ★</text>
          </g>
          {/* Taşıyıcı 2 - sağ */}
          <g opacity="0.8">
            <circle cx="230" cy="75" r="10" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
            <rect x="223" y="70" width="10" height="7" rx="1.5" fill="#f97316" opacity="0.7"/>
            <rect x="233" y="72" width="5" height="5" rx="1" fill="#ea580c" opacity="0.7"/>
            <line x1="220" y1="75" x2="154" y2="85" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.4">
              <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite"/>
            </line>
            <text x="230" y="95" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">4.9 ★</text>
          </g>
          {/* Taşıyıcı 3 - alt */}
          <g opacity="0.8">
            <circle cx="140" cy="160" r="10" fill="#f97316" opacity="0.2" stroke="#f97316" strokeWidth="1.5"/>
            <rect x="133" y="155" width="10" height="7" rx="1.5" fill="#f97316" opacity="0.7"/>
            <rect x="143" y="157" width="5" height="5" rx="1" fill="#ea580c" opacity="0.7"/>
            <line x1="140" y1="150" x2="140" y2="118" stroke="#f97316" strokeWidth="1" strokeDasharray="4,3" opacity="0.4">
              <animate attributeName="stroke-dashoffset" values="0;-14" dur="0.9s" repeatCount="indefinite"/>
            </line>
            <text x="140" y="180" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">5.0 ★</text>
          </g>
          {/* Eşleşme pulse */}
          <circle cx="140" cy="90" r="5" fill="#f97316" opacity="0.6">
            <animate attributeName="r" values="4;7;4" dur="1.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      ),
    },
    {
      icon: Navigation,
      title: "Canlı Takip Et",
      description: "Yükünüzün konumunu gerçek zamanlı GPS ile takip edin. Her adımda bildirim alın, taşıyıcıyla iletişim kurun.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Harita arka plan */}
          <rect x="30" y="20" width="220" height="160" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="30" y1="80" x2="250" y2="80" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="30" y1="120" x2="250" y2="120" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="180" y1="20" x2="180" y2="180" stroke="#e5e7eb" strokeWidth="0.5"/>
          {/* Rota çizgisi */}
          <path d="M60,140 Q100,60 140,100 Q180,140 220,50" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6,4">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="1.5s" repeatCount="indefinite"/>
          </path>
          {/* Başlangıç noktası */}
          <circle cx="60" cy="140" r="8" fill="white" stroke="#374151" strokeWidth="2"/>
          <circle cx="60" cy="140" r="3" fill="#374151"/>
          <text x="60" y="160" textAnchor="middle" fill="#6b7280" fontSize="7">Başlangıç</text>
          {/* Varış noktası */}
          <circle cx="220" cy="50" r="8" fill="white" stroke="#f97316" strokeWidth="2"/>
          <circle cx="220" cy="50" r="3" fill="#f97316"/>
          <text x="220" y="38" textAnchor="middle" fill="#f97316" fontSize="7">Varış</text>
          {/* Hareketli kamyon */}
          <g>
            <animateMotion dur="4s" repeatCount="indefinite" path="M60,140 Q100,60 140,100 Q180,140 220,50"/>
            <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#f97316"/>
            <text x="0" y="3" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">🚛</text>
            {/* GPS sinyal */}
            <circle cx="0" cy="-12" r="3" fill="#f97316" opacity="0.8">
              <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="-12" r="8" fill="none" stroke="#f97316" strokeWidth="0.8" opacity="0.3">
              <animate attributeName="r" values="6;12;6" dur="1.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0;0.3" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      ),
    },
    {
      icon: CheckCircle,
      title: "Teslim Al & Değerlendir",
      description: "Yükünüz güvenle teslim edilir. Taşıyıcıyı puanlayın ve deneyiminizi paylaşın.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Teslim alan kişi */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="2s" repeatCount="indefinite"/>
            <circle cx="90" cy="65" r="14" fill="#374151"/>
            <rect x="80" y="80" width="20" height="35" rx="6" fill="#4b5563"/>
            <line x1="80" y1="92" x2="62" y2="100" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
            <line x1="100" y1="90" x2="118" y2="82" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
            <line x1="85" y1="115" x2="78" y2="145" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
            <line x1="95" y1="115" x2="102" y2="145" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
          </g>
          {/* Kutu teslim */}
          <g>
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="2s" repeatCount="indefinite"/>
            <rect x="110" y="72" width="35" height="25" rx="4" fill="#f97316" opacity="0.15" stroke="#f97316" strokeWidth="1.5"/>
            <line x1="127" y1="72" x2="127" y2="97" stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>
            <line x1="110" y1="84" x2="145" y2="84" stroke="#f97316" strokeWidth="0.8" opacity="0.4"/>
            <text x="127" y="89" textAnchor="middle" fill="#f97316" fontSize="6">✓</text>
          </g>
          {/* Büyük onay */}
          <circle cx="200" cy="80" r="32" fill="white" stroke="#22c55e" strokeWidth="2.5">
            <animate attributeName="stroke-width" values="2;3;2" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M185 80 L196 91 L218 67" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Yıldızlar */}
          <g>
            {[155, 170, 185, 200, 215].map((x, i) => (
              <g key={i}>
                <text x={x} y="145" textAnchor="middle" fill={i < 5 ? '#f97316' : '#e5e7eb'} fontSize="14">
                  ★
                </text>
              </g>
            ))}
          </g>
          <text x="185" y="165" textAnchor="middle" fill="#6b7280" fontSize="8">Harika bir deneyim!</text>
          {/* Zemin */}
          <ellipse cx="140" cy="175" rx="120" ry="5" fill="#f3f4f6"/>
        </svg>
      ),
    },
  ];

  const tasitSteps = [
    {
      icon: Truck,
      title: "Profilini Oluştur",
      description: "Taşıyıcı olarak kaydol, araç bilgilerini ve hizmet bölgeni belirle. Profilini tamamla ve onay bekle.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Taşıyıcı profil kartı */}
          <rect x="70" y="30" width="140" height="140" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          {/* Avatar */}
          <circle cx="140" cy="70" r="22" fill="#f3f4f6" stroke="#f97316" strokeWidth="2"/>
          <circle cx="140" cy="64" r="8" fill="#374151"/>
          <rect x="130" y="74" width="20" height="12" rx="6" fill="#374151"/>
          {/* İsim */}
          <rect x="105" y="100" width="70" height="6" rx="3" fill="#374151"/>
          <rect x="115" y="112" width="50" height="4" rx="2" fill="#9ca3af"/>
          {/* Araç bilgisi */}
          <rect x="90" y="125" width="100" height="30" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
          <text x="140" y="144" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="bold">Kamyonet • 4.9 ★</text>
          {/* Onay badge */}
          <circle cx="195" cy="45" r="14" fill="#22c55e" opacity="0.9">
            <animate attributeName="r" values="13;15;13" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M189 45 L193 49 L201 41" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Dekoratif */}
          <circle cx="50" cy="50" r="3" fill="#f97316" opacity="0.2"/>
          <circle cx="240" cy="140" r="4" fill="#f97316" opacity="0.15"/>
          <rect x="230" y="60" width="20" height="20" rx="4" fill="none" stroke="#f97316" strokeWidth="0.8" opacity="0.15" transform="rotate(15 240 70)"/>
        </svg>
      ),
    },
    {
      icon: Package,
      title: "Yük Taleplerini Gör",
      description: "Bölgendeki yük taleplerini anlık olarak gör. Sana uygun olanları filtrele ve teklif ver.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Telefon */}
          <rect x="85" y="15" width="110" height="170" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          <rect x="120" y="20" width="40" height="4" rx="2" fill="#e5e7eb"/>
          {/* Liste öğeleri */}
          {[42, 82, 122].map((y, i) => (
            <g key={i}>
              <rect x="95" y={y} width="90" height="32" rx="8" fill={i === 0 ? '#fff7ed' : '#f9fafb'} stroke={i === 0 ? '#f97316' : '#e5e7eb'} strokeWidth={i === 0 ? 1.5 : 1}>
                {i === 0 && <animate attributeName="stroke-width" values="1;2;1" dur="2s" repeatCount="indefinite"/>}
              </rect>
              <circle cx="108" cy={y + 16} r="6" fill={i === 0 ? '#f97316' : '#d1d5db'} opacity={i === 0 ? 0.2 : 0.3}/>
              <rect x="118" y={y + 10} width="40" height="4" rx="2" fill={i === 0 ? '#374151' : '#9ca3af'}/>
              <rect x="118" y={y + 18} width="28" height="3" rx="1.5" fill={i === 0 ? '#f97316' : '#d1d5db'} opacity="0.6"/>
              <text x="175" y={y + 18} textAnchor="end" fill={i === 0 ? '#f97316' : '#9ca3af'} fontSize="7" fontWeight="bold">
                {['₺250', '₺180', '₺320'][i]}
              </text>
            </g>
          ))}
          {/* Bildirim badge */}
          <circle cx="185" cy="22" r="8" fill="#f97316">
            <animate attributeName="r" values="7;9;7" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <text x="185" y="25" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
          {/* Dekoratif kutular */}
          <g opacity="0.3">
            <rect x="20" y="60" width="40" height="30" rx="5" fill="none" stroke="#f97316" strokeWidth="1">
              <animate attributeName="y" values="60;55;60" dur="3s" repeatCount="indefinite"/>
            </rect>
            <rect x="220" y="100" width="35" height="25" rx="5" fill="none" stroke="#f97316" strokeWidth="1">
              <animate attributeName="y" values="100;95;100" dur="2.5s" repeatCount="indefinite"/>
            </rect>
          </g>
        </svg>
      ),
    },
    {
      icon: MapPin,
      title: "Yükü Al & Taşı",
      description: "Kabul ettiğin yükü belirtilen adresten al. Navigasyon ile en kısa rotayı takip et ve güvenle taşı.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Yol */}
          <path d="M30,160 Q80,100 140,120 Q200,140 260,60" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
          <path d="M30,160 Q80,100 140,120 Q200,140 260,60" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="8,6" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" values="0;-28" dur="2s" repeatCount="indefinite"/>
          </path>
          {/* Kamyon */}
          <g>
            <animateMotion dur="5s" repeatCount="indefinite" path="M30,160 Q80,100 140,120 Q200,140 260,60"/>
            <rect x="-18" y="-10" width="36" height="20" rx="5" fill="#f97316"/>
            <rect x="-14" y="-7" width="18" height="14" rx="3" fill="#fb923c" opacity="0.6"/>
            <rect x="6" y="-5" width="10" height="10" rx="2" fill="#ea580c"/>
            <circle x="-10" cy="10" r="4" fill="#374151"/>
            <circle x="10" cy="10" r="4" fill="#374151"/>
            <text x="-4" y="3" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">M</text>
          </g>
          {/* Başlangıç */}
          <circle cx="30" cy="160" r="10" fill="white" stroke="#374151" strokeWidth="2"/>
          <circle cx="30" cy="160" r="4" fill="#374151"/>
          {/* Varış */}
          <circle cx="260" cy="60" r="10" fill="white" stroke="#f97316" strokeWidth="2"/>
          <circle cx="260" cy="60" r="4" fill="#f97316"/>
          {/* Kutu ikonu - taşınan */}
          <g opacity="0.4">
            <rect x="120" y="30" width="40" height="30" rx="5" fill="none" stroke="#f97316" strokeWidth="1.5">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
            </rect>
            <line x1="140" y1="30" x2="140" y2="60" stroke="#f97316" strokeWidth="0.8"/>
            <line x1="120" y1="45" x2="160" y2="45" stroke="#f97316" strokeWidth="0.8"/>
          </g>
        </svg>
      ),
    },
    {
      icon: Star,
      title: "Kazan & Büyü",
      description: "Teslimatı tamamla ve kazancını al. Yüksek puan al, daha fazla iş fırsatı yakala. Taşıyıcı topluluğunda yüksel.",
      svg: (
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Cüzdan / kazanç kartı */}
          <rect x="60" y="40" width="160" height="100" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          <rect x="60" y="40" width="160" height="35" rx="14" fill="#f9fafb"/>
          <text x="80" y="62" fill="#374151" fontSize="9" fontWeight="bold">Kazancınız</text>
          <text x="200" y="62" textAnchor="end" fill="#22c55e" fontSize="11" fontWeight="bold">₺12,450</text>
          {/* Grafik çubukları */}
          {[85, 110, 135, 160, 185].map((x, i) => (
            <g key={i}>
              <rect x={x} y={130 - [35, 50, 40, 60, 55][i]} width="14" height={[35, 50, 40, 60, 55][i]} rx="3" fill="#f97316" opacity={0.15 + i * 0.1}>
                <animate attributeName="height" values={`0;${[35, 50, 40, 60, 55][i]}`} dur="1s" begin={`${i * 0.15}s`} fill="freeze"/>
                <animate attributeName="y" values={`130;${130 - [35, 50, 40, 60, 55][i]}`} dur="1s" begin={`${i * 0.15}s`} fill="freeze"/>
              </rect>
            </g>
          ))}
          {/* Yıldız badge */}
          <circle cx="220" cy="160" r="22" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5">
            <animate attributeName="r" values="21;23;21" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="220" y="157" textAnchor="middle" fill="#f97316" fontSize="16">★</text>
          <text x="220" y="170" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">TOP</text>
          {/* Trend oku */}
          <path d="M75 120 L95 105 L115 110 L135 95 L155 100 L175 85 L195 78" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" fill="freeze"/>
          </path>
          {/* Dekoratif */}
          <circle cx="40" cy="60" r="3" fill="#f97316" opacity="0.15"/>
          <circle cx="250" cy="80" r="4" fill="#22c55e" opacity="0.15"/>
        </svg>
      ),
    },
  ];

  const currentSteps = activeTab === 'tasi' ? tasiSteps : tasitSteps;

  return (
    <section ref={sectionRef} id="nasil-calisir" className="relative overflow-hidden">
      <div className="h-16 bg-gradient-to-b from-white to-gray-50/60" />

      <div className="bg-gradient-to-b from-gray-50/60 via-white to-white py-20">
        <div className="container mx-auto px-4">
          {/* Başlık */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-full mb-6 shadow-sm">
              <ArrowRight className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-600">Nasıl Çalışır?</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              İster <span className="text-orange-500">Taşı</span>, İster <span className="text-orange-500">Taşıt!</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Yük göndermek veya taşıyıcı olmak — her iki yol da sadece birkaç adım uzağında
            </p>
          </div>

          {/* Tab Seçici */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 rounded-2xl p-1.5">
              <button
                onClick={() => { setActiveTab('tasi'); setVisibleItems([]); }}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'tasi'
                    ? 'bg-white text-gray-800 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>İster Taşı</span>
                </span>
              </button>
              <button
                onClick={() => { setActiveTab('tasit'); setVisibleItems([]); }}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'tasit'
                    ? 'bg-white text-gray-800 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>İster Taşıt</span>
                </span>
              </button>
            </div>
          </div>

          {/* Adımlar */}
          <div className="space-y-20 max-w-5xl mx-auto">
            {currentSteps.map((step, index) => (
              <div
                key={`${activeTab}-${index}`}
                data-index={index}
                className={`how-step transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  {/* SVG İllüstrasyon */}
                  <div className="flex-1 w-full max-w-md">
                    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 group">
                      <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-xs z-10">
                        {index + 1}
                      </div>
                      <div className="relative z-10 h-52 flex items-center justify-center">
                        {step.svg}
                      </div>
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-orange-400 font-semibold uppercase tracking-wide">Adım {index + 1}</p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg max-w-lg">
                      {step.description}
                    </p>
                    <div className="w-full max-w-xs h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: visibleItems.includes(index) ? '100%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>

                {index < currentSteps.length - 1 && (
                  <div className="flex justify-center my-10">
                    <div className="flex flex-col items-center space-y-1 text-gray-200">
                      <div className="w-px h-10 bg-gradient-to-b from-gray-200 to-transparent" />
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <button className="group bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/15 hover:scale-[1.03] flex items-center space-x-3 mx-auto">
              <span>Hemen Başla</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Ücretsiz kayıt ol, hemen {activeTab === 'tasi' ? 'yük göndermeye' : 'taşımaya'} başla
            </p>
          </div>
        </div>
      </div>

      <div className="h-16 bg-white" />
    </section>
  );
};

export default HowItWorks;