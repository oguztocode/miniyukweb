import { useScrollProgress } from '../hooks/useScrollProgress';
import { Truck, Package, MapPin, CheckCircle } from 'lucide-react';

const ScrollCargoAnimation = () => {
  const progress = useScrollProgress();

  const truckX = Math.min(progress * 1.2, 100);
  const roadDash = progress * 3;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      {/* Yol */}
      <div className="relative h-20 bg-gradient-to-t from-gray-100 to-transparent">
        {/* Yol çizgisi */}
        <div className="absolute bottom-6 left-0 right-0 h-1 bg-orange-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-100 ease-linear"
            style={{ width: `${truckX}%` }}
          />
        </div>

        {/* Kesikli yol çizgileri */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: (i / 20) * 100 < truckX ? '#f97316' : '#fed7aa',
                opacity: (i / 20) * 100 < truckX ? 1 : 0.4,
                transform: `scaleX(${(i / 20) * 100 < truckX ? 1.2 : 1})`,
              }}
            />
          ))}
        </div>

        {/* Başlangıç noktası */}
        <div className="absolute bottom-10 left-4 flex flex-col items-center">
          <Package className="w-4 h-4 text-orange-400" />
          <span className="text-[10px] text-orange-400 font-medium mt-0.5">Gönder</span>
        </div>

        {/* Kamyon */}
        <div
          className="absolute bottom-9 transition-all duration-100 ease-linear"
          style={{ left: `${truckX}%`, transform: 'translateX(-50%)' }}
        >
          <div className="relative">
            {/* Kamyon gölgesi */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-orange-300/30 rounded-full blur-sm" />
            {/* Kamyon */}
            <div className="bg-orange-500 rounded-lg p-1.5 shadow-lg shadow-orange-500/30">
              <Truck className="w-5 h-5 text-white" />
            </div>
            {/* Duman efekti */}
            {progress > 2 && progress < 98 && (
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex space-x-0.5">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-ping opacity-40" />
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.2s' }} />
              </div>
            )}
          </div>
        </div>

        {/* Varış noktası */}
        <div className="absolute bottom-10 right-4 flex flex-col items-center">
          {truckX >= 95 ? (
            <CheckCircle className="w-4 h-4 text-orange-500 animate-bounce" />
          ) : (
            <MapPin className="w-4 h-4 text-orange-300" />
          )}
          <span className="text-[10px] text-orange-400 font-medium mt-0.5">Teslim</span>
        </div>

        {/* İlerleme yüzdesi */}
        <div
          className="absolute bottom-1 transition-all duration-100 ease-linear"
          style={{ left: `${Math.max(truckX, 5)}%`, transform: 'translateX(-50%)' }}
        >
          <span className="text-[10px] font-bold text-orange-500">
            %{Math.round(truckX > 100 ? 100 : truckX)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollCargoAnimation;
