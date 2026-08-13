interface NetworkBackdropProps {
  className?: string;
}

const nodes: [number, number][] = [
  [80, 60],
  [260, 30],
  [420, 90],
  [180, 160],
  [360, 190],
  [520, 140],
  [60, 220],
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [4, 5],
  [2, 5],
  [3, 6],
];

export default function NetworkBackdrop({ className = "" }: NetworkBackdropProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 260"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="3" fill="currentColor" />
      ))}
    </svg>
  );
}
