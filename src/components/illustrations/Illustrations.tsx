import { useId, type CSSProperties } from "react";

/*
 * Hand-built SVG illustrations. Animations are CSS (Tailwind keyframes) so they
 * are cheap, pause with prefers-reduced-motion, and render identically on the
 * server. `fill-box` keeps rotations centred on each element.
 */

const spinBox: CSSProperties = { transformBox: "fill-box", transformOrigin: "center" };
const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

function Snowflake({ x, y, s = 1, d = 0, className = "animate-drift" }: { x: number; y: number; s?: number; d?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className} style={{ ...spinBox, ...delay(d) }}>
        <path
          d="M0-7V7M-6.1-3.5 6.1 3.5M-6.1 3.5 6.1-3.5M0-7l-2-2M0-7l2-2M0 7l-2 2M0 7l2 2"
          stroke="#75D9FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </g>
  );
}

export function AcIllustration({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 320 230" className={className} role="img" aria-label="Split air conditioner blowing cool air">
      <defs>
        <linearGradient id={`${id}body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E3EEFB" />
        </linearGradient>
        <linearGradient id={`${id}air`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2CC5FB" />
          <stop offset="1" stopColor="#2CC5FB" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* shadow */}
      <ellipse cx="160" cy="98" rx="132" ry="10" fill="#0B1B3A" opacity=".06" />
      {/* body */}
      <rect x="22" y="18" width="276" height="78" rx="20" fill={`url(#${id}body)`} stroke="#BBD6FF" strokeWidth="2" />
      <path d="M40 34h160" stroke="#D9E8FF" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 44h120" stroke="#D9E8FF" strokeWidth="3" strokeLinecap="round" />
      {/* display */}
      <rect x="226" y="30" width="54" height="26" rx="8" fill="#0B1B3A" />
      <text x="253" y="48.5" textAnchor="middle" fontSize="15" fontWeight="800" fill="#75D9FF" fontFamily="system-ui, sans-serif">
        18°
      </text>
      <circle cx="286" cy="84" r="3" fill="#25D366" className="animate-twinkle" style={spinBox} />
      {/* louver */}
      <rect x="42" y="74" width="236" height="12" rx="6" fill="#133C8C" opacity=".9" />
      <rect x="48" y="77" width="224" height="3" rx="1.5" fill="#2F74F5" opacity=".6" />
      {/* airflow */}
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${70 + i * 60} 100 C ${60 + i * 60} 130, ${95 + i * 60} 150, ${80 + i * 60} 190`}
          stroke={`url(#${id}air)`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="30 50"
          className="animate-airflow"
          style={delay(i * 450)}
        />
      ))}
      <Snowflake x={60} y={120} d={0} />
      <Snowflake x={130} y={112} s={0.8} d={900} />
      <Snowflake x={190} y={126} s={1.1} d={400} />
      <Snowflake x={250} y={116} s={0.9} d={1500} />
      <Snowflake x={100} y={140} s={0.7} d={2100} />
      <Snowflake x={225} y={145} s={0.75} d={2600} />
    </svg>
  );
}

export function FridgeIllustration({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 220 330" className={className} role="img" aria-label="Double door refrigerator with frost">
      <defs>
        <linearGradient id={`${id}body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCEBFB" />
        </linearGradient>
        <linearGradient id={`${id}shine`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset=".5" stopColor="#FFFFFF" stopOpacity=".9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="318" rx="78" ry="8" fill="#0B1B3A" opacity=".08" />
      <rect x="30" y="14" width="160" height="300" rx="22" fill={`url(#${id}body)`} stroke="#BBD6FF" strokeWidth="2" />
      {/* freezer door */}
      <rect x="38" y="22" width="144" height="92" rx="14" fill="#F4F8FD" stroke="#D9E8FF" strokeWidth="2" />
      {/* fridge door */}
      <rect x="38" y="122" width="144" height="184" rx="14" fill="#F4F8FD" stroke="#D9E8FF" strokeWidth="2" />
      {/* handles */}
      <rect x="160" y="44" width="8" height="50" rx="4" fill="#8CBCFF" />
      <rect x="160" y="140" width="8" height="70" rx="4" fill="#8CBCFF" />
      {/* display */}
      <rect x="54" y="150" width="62" height="36" rx="10" fill="#0B1B3A" />
      <text x="85" y="174" textAnchor="middle" fontSize="16" fontWeight="800" fill="#75D9FF" fontFamily="system-ui, sans-serif">
        4°C
      </text>
      {/* frost on freezer */}
      <path d="M46 36c10 6 18-4 28 2s16-4 26 2" stroke="#B6E9FF" strokeWidth="3" strokeLinecap="round" fill="none" />
      <Snowflake x={70} y={72} s={1.1} className="animate-twinkle" d={0} />
      <Snowflake x={110} y={58} s={0.8} className="animate-twinkle" d={700} />
      <Snowflake x={135} y={86} s={0.9} className="animate-twinkle" d={1400} />
      {/* shine sweep */}
      <rect x="40" y="130" width="30" height="170" fill={`url(#${id}shine)`} opacity=".7" transform="skewX(-12)" />
      {/* feet */}
      <rect x="48" y="312" width="18" height="6" rx="3" fill="#133C8C" opacity=".5" />
      <rect x="154" y="312" width="18" height="6" rx="3" fill="#133C8C" opacity=".5" />
    </svg>
  );
}

export function WasherIllustration({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 240 290" className={className} role="img" aria-label="Front load washing machine spinning">
      <defs>
        <linearGradient id={`${id}body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#DCEBFB" />
        </linearGradient>
        <radialGradient id={`${id}glass`} cx=".4" cy=".35" r=".8">
          <stop offset="0" stopColor="#DEF3FF" />
          <stop offset="1" stopColor="#8CBCFF" />
        </radialGradient>
        <clipPath id={`${id}clip`}>
          <circle cx="120" cy="170" r="62" />
        </clipPath>
      </defs>
      <ellipse cx="120" cy="280" rx="96" ry="8" fill="#0B1B3A" opacity=".08" />
      <rect x="18" y="12" width="204" height="262" rx="24" fill={`url(#${id}body)`} stroke="#BBD6FF" strokeWidth="2" />
      {/* control panel */}
      <rect x="18" y="12" width="204" height="54" rx="24" fill="#EEF5FF" />
      <rect x="18" y="52" width="204" height="14" fill="#EEF5FF" />
      <circle cx="176" cy="39" r="15" fill="#FFFFFF" stroke="#8CBCFF" strokeWidth="3" />
      <path d="M176 39l7-7" stroke="#1257D6" strokeWidth="3" strokeLinecap="round" />
      <rect x="40" y="31" width="58" height="16" rx="6" fill="#0B1B3A" />
      <text x="69" y="43.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#75D9FF" fontFamily="system-ui, sans-serif">
        SPIN
      </text>
      <circle cx="116" cy="39" r="4" fill="#25D366" className="animate-twinkle" style={spinBox} />
      <circle cx="132" cy="39" r="4" fill="#BBD6FF" />
      {/* door ring */}
      <circle cx="120" cy="170" r="80" fill="#FFFFFF" stroke="#BBD6FF" strokeWidth="3" />
      <circle cx="120" cy="170" r="70" fill="#15346F" />
      <circle cx="120" cy="170" r="62" fill={`url(#${id}glass)`} />
      <g clipPath={`url(#${id}clip)`}>
        {/* water */}
        <path d="M50 195c20-8 40 8 70 0s50-8 70 0v60H50z" fill="#2F74F5" opacity=".35" />
        {/* tumbling clothes */}
        <g className="animate-spin-drum" style={spinBox}>
          <circle cx="120" cy="170" r="58" fill="none" />
          <path d="M92 128c14-6 28 2 30 14s-14 16-26 12-16-20-4-26z" fill="#FFB020" opacity=".9" />
          <path d="M150 150c10 2 16 14 10 24s-20 8-24-2 4-24 14-22z" fill="#1257D6" opacity=".85" />
          <path d="M96 190c12-4 26 4 26 14s-16 14-26 8-12-18 0-22z" fill="#25D366" opacity=".8" />
          <circle cx="140" cy="206" r="8" fill="#FFFFFF" opacity=".8" />
        </g>
        {/* bubbles */}
        {[
          [80, 215, 0],
          [105, 222, 700],
          [135, 218, 1300],
          [160, 212, 400],
          [120, 225, 1900],
        ].map(([cx, cy, d]) => (
          <circle key={`${cx}-${d}`} cx={cx} cy={cy} r="5" fill="#FFFFFF" opacity=".85" className="animate-bubble" style={{ ...spinBox, ...delay(d) }} />
        ))}
      </g>
      {/* glass highlight */}
      <path d="M78 140a52 52 0 0 1 36-30" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity=".7" fill="none" />
      <rect x="194" y="160" width="8" height="24" rx="4" fill="#8CBCFF" />
    </svg>
  );
}

/** Wrench + spark accent used as a floating decoration. */
export function ToolBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="#FFB020" />
      <path
        d="M31.5 13.5a7 7 0 0 0-9.3 8.6L13 31.3a2.5 2.5 0 1 0 3.6 3.6l9.2-9.2a7 7 0 0 0 8.6-9.3l-4 4-3.6-1-1-3.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export const ILLUSTRATION = {
  ac: AcIllustration,
  fridge: FridgeIllustration,
  washer: WasherIllustration,
} as const;
