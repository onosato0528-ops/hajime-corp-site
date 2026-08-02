function Building({
  x,
  width,
  height,
  opacity = 1,
}: {
  x: number;
  width: number;
  height: number;
  opacity?: number;
}) {
  const top = 760 - height;
  const cols = Math.max(2, Math.round(width / 26));
  const rows = Math.max(3, Math.round(height / 34));
  const lines: React.ReactNode[] = [];

  for (let c = 1; c < cols; c += 1) {
    const lx = x + (width / cols) * c;
    lines.push(
      <line
        key={`v-${x}-${c}`}
        x1={lx}
        y1={top + 6}
        x2={lx}
        y2={760}
        stroke="#ffffff"
        strokeOpacity={0.05}
        strokeWidth={1}
      />
    );
  }
  for (let r = 1; r < rows; r += 1) {
    const ly = top + (height / rows) * r;
    lines.push(
      <line
        key={`h-${x}-${r}`}
        x1={x}
        y1={ly}
        x2={x + width}
        y2={ly}
        stroke="#ffffff"
        strokeOpacity={0.04}
        strokeWidth={1}
      />
    );
  }

  return (
    <g opacity={opacity}>
      <rect x={x} y={top} width={width} height={height} fill="#0d1116" />
      <rect x={x} y={top} width={width} height={height} fill="url(#buildingSheen)" />
      {lines}
      <rect x={x} y={top} width={width} height={height} stroke="#ffffff" strokeOpacity={0.08} fill="none" />
    </g>
  );
}

export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label="都市のオフィス群とデジタルネットワークを描いた抽象イメージ"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1b212a" />
          <stop offset="55%" stopColor="#12161c" />
          <stop offset="100%" stopColor="#08090b" />
        </linearGradient>
        <linearGradient id="buildingSheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a4652" stopOpacity="0.18" />
          <stop offset="45%" stopColor="#3a4652" stopOpacity="0" />
          <stop offset="100%" stopColor="#3a4652" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glowWhite" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6f8199" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6f8199" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <filter id="rayBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect width="1920" height="1080" fill="url(#skyGrad)" />

      <circle cx="1480" cy="260" r="360" fill="url(#glowBlue)" filter="url(#softBlur)" />
      <circle cx="1780" cy="620" r="260" fill="url(#glowWhite)" filter="url(#softBlur)" />
      <circle cx="260" cy="140" r="220" fill="url(#glowWhite)" filter="url(#softBlur)" opacity="0.5" />

      <g filter="url(#rayBlur)">
        <rect x="1250" y="-200" width="120" height="1500" fill="url(#rayGrad)" transform="rotate(20 1310 550)" />
        <rect x="1550" y="-300" width="90" height="1600" fill="url(#rayGrad)" transform="rotate(20 1595 500)" />
      </g>

      <g>
        <line x1="1120" y1="180" x2="1340" y2="120" stroke="#9fb0c2" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="1340" y1="120" x2="1560" y2="220" stroke="#9fb0c2" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="1560" y1="220" x2="1500" y2="380" stroke="#9fb0c2" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="1340" y1="120" x2="1720" y2="150" stroke="#9fb0c2" strokeOpacity="0.22" strokeWidth="1" />
        <line x1="1120" y1="180" x2="960" y2="90" stroke="#9fb0c2" strokeOpacity="0.22" strokeWidth="1" />
        <line x1="1500" y1="380" x2="1720" y2="150" stroke="#9fb0c2" strokeOpacity="0.18" strokeWidth="1" />
        {[
          [1120, 180],
          [1340, 120],
          [1560, 220],
          [1500, 380],
          [1720, 150],
          [960, 90],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#e8edf2" fillOpacity="0.55" />
        ))}
      </g>

      <g>
        <Building x={-40} width={140} height={260} opacity={0.7} />
        <Building x={90} width={110} height={340} opacity={0.8} />
        <Building x={190} width={160} height={430} />
        <Building x={340} width={90} height={300} opacity={0.85} />
        <Building x={420} width={190} height={520} />
        <Building x={600} width={120} height={380} opacity={0.9} />
        <Building x={710} width={150} height={470} />
        <Building x={850} width={100} height={330} opacity={0.85} />
        <Building x={940} width={210} height={560} />
        <Building x={1140} width={130} height={420} opacity={0.9} />
        <Building x={1260} width={170} height={490} />
        <Building x={1420} width={110} height={360} opacity={0.85} />
        <Building x={1520} width={200} height={470} />
        <Building x={1710} width={140} height={400} opacity={0.85} />
        <Building x={1840} width={150} height={330} opacity={0.75} />
      </g>

      <rect x="0" y="756" width="1920" height="4" fill="#ffffff" fillOpacity="0.06" />
    </svg>
  );
}
