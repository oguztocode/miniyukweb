interface SectionDividerProps {
  from?: string;
  to?: string;
  variant?: 'wave' | 'curve' | 'angle';
}

const SectionDivider = ({ from = '#ffffff', to = '#fff7ed', variant = 'wave' }: SectionDividerProps) => {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 -mt-1 overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill={to} />
          <path d="M0,80 C240,40 480,100 720,60 C960,20 1200,100 1440,80 L1440,120 L0,120 Z" fill={to} opacity="0.5" />
        </svg>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${from}, transparent)` }} />
      </div>
    );
  }

  if (variant === 'curve') {
    return (
      <div className="relative h-20 -mt-1 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,100 C360,0 1080,0 1440,100 L1440,100 L0,100 Z" fill={to} />
        </svg>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${from}, transparent)` }} />
      </div>
    );
  }

  // angle
  return (
    <div className="relative h-16 -mt-1 overflow-hidden">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path d="M0,80 L720,0 L1440,80 L1440,80 L0,80 Z" fill={to} />
      </svg>
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${from}, transparent)` }} />
    </div>
  );
};

export default SectionDivider;
