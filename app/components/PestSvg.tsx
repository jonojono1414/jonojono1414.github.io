type Props = {
  id: string;
  size?: number;
};

/* ==============================
   ゴキブリ類
   ============================== */

function KuroGokiburi() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kuro-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="100%" stopColor="#1A0F0A" />
        </radialGradient>
        <radialGradient id="kuro-sheen" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M88 52 Q70 25 52 12" stroke="#1A0F0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M52 12 Q48 10 46 11" stroke="#1A0F0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 52 Q130 25 148 12" stroke="#1A0F0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M148 12 Q152 10 154 11" stroke="#1A0F0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs - left */}
      <g className="pest-leg-l">
        <path d="M68 82 Q48 68 30 60" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 60 L25 55" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M65 105 Q40 95 22 90" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M22 90 L18 86" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M68 130 Q48 142 30 155" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 155 L26 160" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Legs - right */}
      <g className="pest-leg-r">
        <path d="M132 82 Q152 68 170 60" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M170 60 L175 55" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M135 105 Q160 95 178 90" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M178 90 L182 86" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M132 130 Q152 142 170 155" stroke="#2A1A10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M170 155 L174 160" stroke="#2A1A10" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Pronotum (前胸背板) */}
      <ellipse cx="100" cy="65" rx="28" ry="16" fill="url(#kuro-body)" />
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="115" rx="36" ry="48" fill="url(#kuro-body)" />
        {/* Wing split line */}
        <line x1="100" y1="72" x2="100" y2="158" stroke="#0D0705" strokeWidth="1.2" opacity="0.4" />
        {/* Wing veins */}
        <path d="M100 80 Q85 100 80 130" stroke="#0D0705" strokeWidth="0.6" opacity="0.3" fill="none" />
        <path d="M100 80 Q115 100 120 130" stroke="#0D0705" strokeWidth="0.6" opacity="0.3" fill="none" />
        <path d="M100 90 Q80 115 72 145" stroke="#0D0705" strokeWidth="0.5" opacity="0.2" fill="none" />
        <path d="M100 90 Q120 115 128 145" stroke="#0D0705" strokeWidth="0.5" opacity="0.2" fill="none" />
        {/* Sheen */}
        <ellipse cx="90" cy="100" rx="20" ry="30" fill="url(#kuro-sheen)" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="50" rx="16" ry="12" fill="#1A0F0A" />
      {/* Eyes */}
      <ellipse cx="91" cy="48" rx="4" ry="3.5" fill="#444" />
      <ellipse cx="109" cy="48" rx="4" ry="3.5" fill="#444" />
      <circle cx="90" cy="47" r="1.5" fill="#888" />
      <circle cx="108" cy="47" r="1.5" fill="#888" />
      {/* Mouthparts */}
      <path d="M96 56 L94 60" stroke="#1A0F0A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M104 56 L106 60" stroke="#1A0F0A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cerci (尾突起) */}
      <path d="M95 160 Q90 170 85 175" stroke="#2A1A10" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M105 160 Q110 170 115 175" stroke="#2A1A10" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function ChabaneGokiburi() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cha-body" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#C9A060" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
      </defs>
      {/* Antennae - long, thin */}
      <g className="pest-antenna-l">
        <path d="M90 58 Q72 30 50 10 Q45 6 40 8" stroke="#7A5A20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 58 Q128 30 150 10 Q155 6 160 8" stroke="#7A5A20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 82 Q52 72 35 62" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M70 100 Q48 94 28 88" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M72 120 Q52 132 35 145" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 82 Q148 72 165 62" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M130 100 Q152 94 172 88" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M128 120 Q148 132 165 145" stroke="#7A5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum with 2 dark stripes */}
      <ellipse cx="100" cy="70" rx="25" ry="14" fill="url(#cha-body)" />
      <path d="M88 58 L88 82" stroke="#4A3010" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      <path d="M112 58 L112 82" stroke="#4A3010" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      {/* Body */}
      <g className="pest-body">
        <ellipse cx="100" cy="112" rx="30" ry="40" fill="url(#cha-body)" />
        <line x1="100" y1="76" x2="100" y2="148" stroke="#6B4E12" strokeWidth="0.8" opacity="0.3" />
        <ellipse cx="92" cy="100" rx="16" ry="24" fill="white" opacity="0.1" />
      </g>
      {/* Head - small */}
      <ellipse cx="100" cy="56" rx="14" ry="10" fill="#9B7530" />
      <circle cx="93" cy="54" r="3" fill="#333" />
      <circle cx="107" cy="54" r="3" fill="#333" />
      <circle cx="92" cy="53" r="1.2" fill="#666" />
      <circle cx="106" cy="53" r="1.2" fill="#666" />
      {/* Cerci */}
      <path d="M95 150 Q92 158 88 163" stroke="#7A5A20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M105 150 Q108 158 112 163" stroke="#7A5A20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function WamonGokiburi() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wamon-body" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#B5651D" />
          <stop offset="100%" stopColor="#6B3A0A" />
        </radialGradient>
      </defs>
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M86 52 Q65 22 45 8" stroke="#5A2D08" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M114 52 Q135 22 155 8" stroke="#5A2D08" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M64 85 Q42 70 24 58" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M62 108 Q36 98 16 92" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M65 134 Q42 148 25 164" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M136 85 Q158 70 176 58" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M138 108 Q164 98 184 92" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M135 134 Q158 148 175 164" stroke="#5A2D08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum with ring pattern (輪紋) */}
      <ellipse cx="100" cy="66" rx="30" ry="17" fill="#8B5E20" />
      <ellipse cx="100" cy="66" rx="16" ry="9" fill="none" stroke="#E8C060" strokeWidth="2" opacity="0.7" />
      <ellipse cx="100" cy="66" rx="8" ry="5" fill="#D4A840" opacity="0.4" />
      {/* Body - large */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="38" ry="52" fill="url(#wamon-body)" />
        <line x1="100" y1="70" x2="100" y2="165" stroke="#4A2A08" strokeWidth="1" opacity="0.35" />
        <path d="M100 78 Q82 105 76 140" stroke="#4A2A08" strokeWidth="0.6" opacity="0.25" fill="none" />
        <path d="M100 78 Q118 105 124 140" stroke="#4A2A08" strokeWidth="0.6" opacity="0.25" fill="none" />
        <ellipse cx="88" cy="105" rx="18" ry="32" fill="white" opacity="0.08" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="48" rx="17" ry="13" fill="#6B3A0A" />
      <ellipse cx="90" cy="46" rx="4.5" ry="3.5" fill="#333" />
      <ellipse cx="110" cy="46" rx="4.5" ry="3.5" fill="#333" />
      <circle cx="89" cy="45" r="1.5" fill="#777" />
      <circle cx="109" cy="45" r="1.5" fill="#777" />
      {/* Cerci */}
      <path d="M94 167 Q88 178 82 185" stroke="#5A2D08" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M106 167 Q112 178 118 185" stroke="#5A2D08" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function YamatoGokiburi() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="yamato-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#352015" />
          <stop offset="100%" stopColor="#1A0D08" />
        </radialGradient>
      </defs>
      <g className="pest-antenna-l">
        <path d="M90 56 Q74 30 55 15" stroke="#1A0D08" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 56 Q126 30 145 15" stroke="#1A0D08" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-l">
        <path d="M70 82 Q52 70 35 62" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M68 102 Q46 95 26 90" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M70 125 Q52 138 35 150" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M130 82 Q148 70 165 62" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M132 102 Q154 95 174 90" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M130 125 Q148 138 165 150" stroke="#201008" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="67" rx="24" ry="14" fill="url(#yamato-body)" />
      {/* Body - shorter wings (female characteristic) */}
      <g className="pest-body">
        <ellipse cx="100" cy="110" rx="32" ry="44" fill="url(#yamato-body)" />
        {/* Short wing covers */}
        <path d="M72 75 Q68 100 70 120" stroke="#0D0705" strokeWidth="0.5" opacity="0.3" fill="none" />
        <path d="M128 75 Q132 100 130 120" stroke="#0D0705" strokeWidth="0.5" opacity="0.3" fill="none" />
        <line x1="100" y1="72" x2="100" y2="120" stroke="#0D0705" strokeWidth="0.8" opacity="0.3" />
        {/* Exposed abdominal segments below wings */}
        <path d="M76 125 h48" stroke="#150A05" strokeWidth="0.5" opacity="0.3" />
        <path d="M78 133 h44" stroke="#150A05" strokeWidth="0.5" opacity="0.3" />
        <path d="M80 141 h40" stroke="#150A05" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="92" cy="98" rx="16" ry="26" fill="white" opacity="0.06" />
      </g>
      <ellipse cx="100" cy="52" rx="14" ry="11" fill="#1A0D08" />
      <circle cx="93" cy="50" r="3" fill="#333" />
      <circle cx="107" cy="50" r="3" fill="#333" />
      <circle cx="92" cy="49" r="1.2" fill="#666" />
      <circle cx="106" cy="49" r="1.2" fill="#666" />
      <path d="M96 152 Q92 160 88 164" stroke="#201008" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M104 152 Q108 160 112 164" stroke="#201008" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ==============================
   蚊・ハエ類
   ============================== */

function HitosujishimakaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Antennae - feathery */}
      <g className="pest-antenna-l">
        <path d="M93 72 Q82 50 75 35" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M80 45 L74 42" stroke="#222" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M82 50 L76 48" stroke="#222" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M107 72 Q118 50 125 35" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M120 45 L126 42" stroke="#222" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M118 50 L124 48" stroke="#222" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      {/* Proboscis */}
      <g className="pest-proboscis">
        <line x1="100" y1="70" x2="100" y2="38" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="66" cy="102" rx="32" ry="11" fill="#C8D8E8" opacity="0.45" transform="rotate(-18 66 102)" />
        <path d="M92 98 Q72 90 42 95" stroke="#A0B0C0" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="134" cy="102" rx="32" ry="11" fill="#C8D8E8" opacity="0.45" transform="rotate(18 134 102)" />
        <path d="M108 98 Q128 90 158 95" stroke="#A0B0C0" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="92" rx="14" ry="12" fill="#111" />
      {/* White center stripe on thorax */}
      <line x1="100" y1="81" x2="100" y2="103" stroke="white" strokeWidth="2" opacity="0.7" />
      {/* Abdomen - black with white bands */}
      <g className="pest-body">
        <ellipse cx="100" cy="128" rx="10" ry="28" fill="#111" />
        <path d="M90 115 h20" stroke="white" strokeWidth="2" opacity="0.8" />
        <path d="M91 123 h18" stroke="white" strokeWidth="2" opacity="0.8" />
        <path d="M91 131 h18" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <path d="M92 139 h16" stroke="white" strokeWidth="1.5" opacity="0.6" />
      </g>
      {/* Head */}
      <circle cx="100" cy="78" r="9" fill="#111" />
      <circle cx="95" cy="76" r="3.5" fill="#555" />
      <circle cx="105" cy="76" r="3.5" fill="#555" />
      {/* Legs - striped black and white */}
      <g className="pest-leg-l">
        <path d="M92 145 Q75 165 58 180" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M90 140 Q70 158 52 172" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M88 105 Q68 115 55 125" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      </g>
      <g className="pest-leg-r">
        <path d="M108 145 Q125 165 142 180" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M110 140 Q130 158 148 172" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M112 105 Q132 115 145 125" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
      </g>
    </svg>
  );
}

function AkaiekaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-antenna-l">
        <path d="M93 72 Q80 48 70 30" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M107 72 Q120 48 130 30" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-proboscis">
        <line x1="100" y1="70" x2="100" y2="35" stroke="#6B4E30" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="pest-wing-l">
        <ellipse cx="64" cy="100" rx="30" ry="10" fill="#D8D8D8" opacity="0.4" transform="rotate(-15 64 100)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="136" cy="100" rx="30" ry="10" fill="#D8D8D8" opacity="0.4" transform="rotate(15 136 100)" />
      </g>
      <ellipse cx="100" cy="92" rx="13" ry="11" fill="#8B7050" />
      <g className="pest-body">
        <ellipse cx="100" cy="128" rx="9" ry="26" fill="#9B8060" />
        <path d="M91 118 h18" stroke="#7A6040" strokeWidth="0.8" opacity="0.4" />
        <path d="M92 126 h16" stroke="#7A6040" strokeWidth="0.8" opacity="0.4" />
        <path d="M92 134 h16" stroke="#7A6040" strokeWidth="0.8" opacity="0.4" />
      </g>
      <circle cx="100" cy="78" r="9" fill="#8B7050" />
      <circle cx="95" cy="76" r="3.5" fill="#5A4030" />
      <circle cx="105" cy="76" r="3.5" fill="#5A4030" />
      <g className="pest-leg-l">
        <path d="M92 140 Q72 162 55 178" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M90 135 Q68 152 48 168" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 103 Q65 112 50 122" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M108 140 Q128 162 145 178" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M110 135 Q132 152 152 168" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 103 Q135 112 150 122" stroke="#6B4E30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function IebaeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-wing-l">
        <ellipse cx="58" cy="90" rx="34" ry="14" fill="#D0D8E0" opacity="0.45" transform="rotate(-12 58 90)" />
        <path d="M88 86 Q66 78 30 84" stroke="#B0B8C0" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M85 90 Q62 84 35 90" stroke="#B0B8C0" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="142" cy="90" rx="34" ry="14" fill="#D0D8E0" opacity="0.45" transform="rotate(12 142 90)" />
        <path d="M112 86 Q134 78 170 84" stroke="#B0B8C0" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M115 90 Q138 84 165 90" stroke="#B0B8C0" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      {/* Thorax with 4 dark stripes */}
      <ellipse cx="100" cy="92" rx="20" ry="16" fill="#808080" />
      <line x1="90" y1="78" x2="88" y2="106" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      <line x1="96" y1="77" x2="95" y2="107" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      <line x1="104" y1="77" x2="105" y2="107" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="78" x2="112" y2="106" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="128" rx="18" ry="24" fill="#6A6A6A" />
        <ellipse cx="100" cy="128" rx="12" ry="18" fill="#777" opacity="0.3" />
      </g>
      {/* Head with big compound eyes */}
      <circle cx="100" cy="68" r="13" fill="#555" />
      <ellipse cx="88" cy="64" rx="9" ry="8" fill="#CC2200" />
      <ellipse cx="112" cy="64" rx="9" ry="8" fill="#CC2200" />
      {/* Compound eye facets */}
      <circle cx="86" cy="62" r="1" fill="#FF4444" opacity="0.6" />
      <circle cx="90" cy="60" r="1" fill="#FF4444" opacity="0.6" />
      <circle cx="88" cy="66" r="1" fill="#FF4444" opacity="0.6" />
      <circle cx="110" cy="62" r="1" fill="#FF4444" opacity="0.6" />
      <circle cx="114" cy="60" r="1" fill="#FF4444" opacity="0.6" />
      <circle cx="112" cy="66" r="1" fill="#FF4444" opacity="0.6" />
      {/* Proboscis (labellum) */}
      <path d="M97 78 Q100 85 103 78" stroke="#555" strokeWidth="2" fill="#666" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M84 100 Q60 105 42 115" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 108 Q60 120 45 140" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M86 130 Q68 148 52 162" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M116 100 Q140 105 158 115" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 108 Q140 120 155 140" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M114 130 Q132 148 148 162" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ShoujoubaeeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - rounded */}
      <g className="pest-wing-l">
        <ellipse cx="62" cy="92" rx="28" ry="14" fill="#E0E4E8" opacity="0.5" transform="rotate(-10 62 92)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="138" cy="92" rx="28" ry="14" fill="#E0E4E8" opacity="0.5" transform="rotate(10 138 92)" />
      </g>
      {/* Thorax - yellowish */}
      <ellipse cx="100" cy="94" rx="16" ry="13" fill="#C8A850" />
      {/* Abdomen - banded yellow-brown */}
      <g className="pest-body">
        <ellipse cx="100" cy="124" rx="15" ry="22" fill="#B89840" />
        <path d="M86 115 h28" stroke="#8B7020" strokeWidth="1.5" opacity="0.5" />
        <path d="M86 122 h28" stroke="#8B7020" strokeWidth="1.5" opacity="0.5" />
        <path d="M87 129 h26" stroke="#8B7020" strokeWidth="1.5" opacity="0.5" />
        <path d="M88 136 h24" stroke="#8B7020" strokeWidth="1.2" opacity="0.4" />
      </g>
      {/* Head */}
      <circle cx="100" cy="74" r="12" fill="#C8A850" />
      {/* Big bright red eyes */}
      <ellipse cx="88" cy="71" rx="8" ry="7" fill="#FF1100" />
      <ellipse cx="112" cy="71" rx="8" ry="7" fill="#FF1100" />
      <circle cx="86" cy="69" r="2" fill="#FF6655" opacity="0.6" />
      <circle cx="110" cy="69" r="2" fill="#FF6655" opacity="0.6" />
      {/* Antennae - short arista */}
      <g className="pest-antenna-l">
        <path d="M92 64 Q85 55 78 50" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M82 52 L75 55" stroke="#8B7020" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 64 Q115 55 122 50" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M118 52 L125 55" stroke="#8B7020" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M86 102 Q68 112 52 122" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M86 110 Q68 126 52 142" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 130 Q72 146 58 160" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 102 Q132 112 148 122" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 110 Q132 126 148 142" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 130 Q128 146 142 160" stroke="#8B7020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ==============================
   ダニ・ノミ・シラミ類
   ============================== */

function HyouhidaniSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass circle */}
      <circle cx="100" cy="100" r="70" stroke="#aaa" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <text x="100" y="185" textAnchor="middle" fontSize="11" fill="#999" fontFamily="sans-serif">×100</text>
      {/* Body - translucent, round */}
      <g className="pest-crawl">
        <ellipse cx="100" cy="100" rx="38" ry="42" fill="#EDE4D4" opacity="0.85" />
        <ellipse cx="100" cy="100" rx="38" ry="42" fill="none" stroke="#D4C8B0" strokeWidth="1.5" />
        {/* Internal organs visible */}
        <ellipse cx="100" cy="88" rx="12" ry="10" fill="#D4C0A0" opacity="0.4" />
        <ellipse cx="100" cy="108" rx="16" ry="12" fill="#C8B490" opacity="0.3" />
        {/* Mouthparts */}
        <path d="M94 60 L92 50" stroke="#C0A880" strokeWidth="2" strokeLinecap="round" />
        <path d="M106 60 L108 50" stroke="#C0A880" strokeWidth="2" strokeLinecap="round" />
        <path d="M100 58 L100 48" stroke="#C0A880" strokeWidth="1.5" strokeLinecap="round" />
        {/* 8 legs */}
        <g className="pest-leg-l">
          <path d="M65 75 Q48 60 35 50" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M63 90 Q42 80 28 72" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M63 112 Q42 118 28 128" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M66 128 Q50 142 38 152" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M135 75 Q152 60 165 50" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M137 90 Q158 80 172 72" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M137 112 Q158 118 172 128" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M134 128 Q150 142 162 152" stroke="#C8B498" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function TsumedaniSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="70" stroke="#aaa" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <text x="100" y="185" textAnchor="middle" fontSize="11" fill="#999" fontFamily="sans-serif">×80</text>
      <g className="pest-crawl">
        <ellipse cx="100" cy="105" rx="32" ry="38" fill="#F0E0C0" opacity="0.85" />
        <ellipse cx="100" cy="105" rx="32" ry="38" fill="none" stroke="#D8C8A0" strokeWidth="1.5" />
        <ellipse cx="100" cy="95" rx="10" ry="8" fill="#D4C0A0" opacity="0.35" />
        {/* Large pedipalps (chelicerae) - ツメ */}
        <path d="M88 68 Q78 52 72 44 Q68 38 74 40" stroke="#C8A870" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M112 68 Q122 52 128 44 Q132 38 126 40" stroke="#C8A870" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* 8 legs */}
        <g className="pest-leg-l">
          <path d="M70 82 Q52 68 38 56" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M68 98 Q48 88 32 80" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M68 118 Q48 124 32 134" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M72 134 Q55 148 42 158" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M130 82 Q148 68 162 56" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M132 98 Q152 88 168 80" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M132 118 Q152 124 168 134" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M128 134 Q145 148 158 158" stroke="#D0B888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function NekonomiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-jump">
        {/* Body - laterally compressed */}
        <ellipse cx="100" cy="100" rx="16" ry="36" fill="#6B3210" />
        <ellipse cx="100" cy="100" rx="16" ry="36" fill="none" stroke="#502508" strokeWidth="1" />
        {/* Segments */}
        <path d="M84 85 h32" stroke="#502508" strokeWidth="0.8" opacity="0.4" />
        <path d="M84 95 h32" stroke="#502508" strokeWidth="0.8" opacity="0.4" />
        <path d="M84 105 h32" stroke="#502508" strokeWidth="0.8" opacity="0.4" />
        <path d="M85 115 h30" stroke="#502508" strokeWidth="0.8" opacity="0.4" />
        {/* Head */}
        <ellipse cx="100" cy="58" rx="11" ry="9" fill="#5A2808" />
        <circle cx="100" cy="55" r="3" fill="black" />
        <circle cx="100" cy="54" r="1" fill="#444" />
        {/* Ctenidium (combs) */}
        <path d="M89 65 L86 62" stroke="#3A1808" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M89 68 L86 66" stroke="#3A1808" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M111 65 L114 62" stroke="#3A1808" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M111 68 L114 66" stroke="#3A1808" strokeWidth="1.5" strokeLinecap="round" />
        {/* Powerful hind legs */}
        <path d="M110 122 Q132 128 138 148 Q142 168 158 182" stroke="#502508" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M90 122 Q68 128 62 148 Q58 168 42 182" stroke="#502508" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Middle legs */}
        <path d="M114 95 Q130 102 142 108" stroke="#502508" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M86 95 Q70 102 58 108" stroke="#502508" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Front legs */}
        <path d="M110 72 Q122 78 132 82" stroke="#502508" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M90 72 Q78 78 68 82" stroke="#502508" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Jump arc indicator */}
        <path d="M160 168 Q172 135 168 100" stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" />
        <polygon points="166,102 170,110 174,102" fill="#FF6B35" opacity="0.6" />
      </g>
    </svg>
  );
}

function AtamajiramiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Body - elongated, translucent */}
        <ellipse cx="100" cy="115" rx="22" ry="34" fill="#C8B8A0" opacity="0.8" />
        <ellipse cx="100" cy="115" rx="22" ry="34" fill="none" stroke="#B0A080" strokeWidth="1.5" />
        {/* Abdominal segments */}
        <path d="M79 100 h42" stroke="#A09070" strokeWidth="0.8" opacity="0.4" />
        <path d="M78 110 h44" stroke="#A09070" strokeWidth="0.8" opacity="0.4" />
        <path d="M78 120 h44" stroke="#A09070" strokeWidth="0.8" opacity="0.4" />
        <path d="M79 130 h42" stroke="#A09070" strokeWidth="0.8" opacity="0.4" />
        <path d="M80 140 h40" stroke="#A09070" strokeWidth="0.8" opacity="0.4" />
        {/* Gut visible through body */}
        <ellipse cx="100" cy="118" rx="6" ry="18" fill="#8B7050" opacity="0.25" />
        {/* Head */}
        <ellipse cx="100" cy="72" rx="14" ry="12" fill="#B8A888" />
        <circle cx="94" cy="70" r="2.5" fill="#333" />
        <circle cx="106" cy="70" r="2.5" fill="#333" />
        {/* Short antennae */}
        <path d="M90 64 Q84 56 80 52" stroke="#A09070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M110 64 Q116 56 120 52" stroke="#A09070" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Legs with gripping claws */}
        <g className="pest-leg-l">
          <path d="M78 92 Q58 82 44 76" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="42" cy="74" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
          <path d="M78 115 Q55 108 38 104" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="36" cy="102" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
          <path d="M80 138 Q60 148 44 155" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="42" cy="157" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
        </g>
        <g className="pest-leg-r">
          <path d="M122 92 Q142 82 156 76" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="158" cy="74" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
          <path d="M122 115 Q145 108 162 104" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="164" cy="102" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
          <path d="M120 138 Q140 148 156 155" stroke="#A09070" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="158" cy="157" r="4" stroke="#A09070" strokeWidth="1.5" fill="none" />
        </g>
      </g>
    </svg>
  );
}

function TokojiramiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Body - flat, oval, reddish-brown */}
        <ellipse cx="100" cy="110" rx="35" ry="42" fill="#8B3A2A" />
        <ellipse cx="100" cy="110" rx="35" ry="42" fill="none" stroke="#6B2A1A" strokeWidth="1.5" />
        {/* Segments */}
        <path d="M66 95 h68" stroke="#6B2A1A" strokeWidth="1" opacity="0.4" />
        <path d="M65 108 h70" stroke="#6B2A1A" strokeWidth="1" opacity="0.4" />
        <path d="M65 121 h70" stroke="#6B2A1A" strokeWidth="1" opacity="0.4" />
        <path d="M67 134 h66" stroke="#6B2A1A" strokeWidth="1" opacity="0.4" />
        {/* Vestigial wing pads */}
        <path d="M80 80 Q72 88 68 95" stroke="#7A3020" strokeWidth="1.5" fill="none" />
        <path d="M120 80 Q128 88 132 95" stroke="#7A3020" strokeWidth="1.5" fill="none" />
        {/* Head - small, triangular */}
        <path d="M85 72 L100 56 L115 72 Z" fill="#7A3020" />
        <circle cx="93" cy="66" r="3" fill="#222" />
        <circle cx="107" cy="66" r="3" fill="#222" />
        {/* Antennae */}
        <g className="pest-antenna-l">
          <path d="M92 60 Q82 45 74 38" stroke="#6B2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-antenna-r">
          <path d="M108 60 Q118 45 126 38" stroke="#6B2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Legs */}
        <g className="pest-leg-l">
          <path d="M66 90 Q48 80 34 72" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M65 110 Q44 104 28 100" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M66 132 Q48 142 34 152" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M134 90 Q152 80 166 72" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M135 110 Q156 104 172 100" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M134 132 Q152 142 166 152" stroke="#6B2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function MadaniSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Body - teardrop/oval, dark */}
        <ellipse cx="100" cy="108" rx="36" ry="44" fill="#4A3020" />
        {/* Scutum (dorsal shield) */}
        <ellipse cx="100" cy="82" rx="22" ry="16" fill="#6B4A30" />
        <ellipse cx="100" cy="80" rx="14" ry="10" fill="#7A5A38" opacity="0.5" />
        {/* Body edge */}
        <ellipse cx="100" cy="108" rx="36" ry="44" fill="none" stroke="#3A2010" strokeWidth="1.5" />
        {/* Festoons (scalloped edge) */}
        <path d="M68 138 Q72 145 78 140" stroke="#3A2010" strokeWidth="1" fill="none" />
        <path d="M78 142 Q84 148 90 143" stroke="#3A2010" strokeWidth="1" fill="none" />
        <path d="M90 144 Q96 150 102 145" stroke="#3A2010" strokeWidth="1" fill="none" />
        <path d="M100 145 Q106 150 112 144" stroke="#3A2010" strokeWidth="1" fill="none" />
        <path d="M110 143 Q116 148 122 140" stroke="#3A2010" strokeWidth="1" fill="none" />
        <path d="M122 138 Q128 145 132 138" stroke="#3A2010" strokeWidth="1" fill="none" />
        {/* Capitulum (mouthparts) */}
        <rect x="94" y="58" width="12" height="16" rx="3" fill="#5A3A20" />
        <line x1="100" y1="58" x2="100" y2="44" stroke="#5A3A20" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M96 46 L94 40" stroke="#5A3A20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M104 46 L106 40" stroke="#5A3A20" strokeWidth="1.5" strokeLinecap="round" />
        {/* Palps */}
        <path d="M94 62 Q86 56 82 52" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M106 62 Q114 56 118 52" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 8 legs */}
        <g className="pest-leg-l">
          <path d="M66 78 Q46 66 30 56" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M64 92 Q42 82 24 74" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M64 110 Q42 114 24 122" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M66 126 Q48 136 34 148" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M134 78 Q154 66 170 56" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M136 92 Q158 82 176 74" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M136 110 Q158 114 176 122" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M134 126 Q152 136 166 148" stroke="#4A3020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

/* ==============================
   その他
   ============================== */

function SuzumebachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="62" cy="78" rx="28" ry="11" fill="#FFE8B0" opacity="0.5" transform="rotate(-12 62 78)" />
        <path d="M86 76 Q62 68 40 72" stroke="#E8D090" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="138" cy="78" rx="28" ry="11" fill="#FFE8B0" opacity="0.5" transform="rotate(12 138 78)" />
        <path d="M114 76 Q138 68 160 72" stroke="#E8D090" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      {/* Thorax - dark */}
      <ellipse cx="100" cy="82" rx="18" ry="14" fill="#2A2A2A" />
      {/* Petiole (narrow waist) */}
      <ellipse cx="100" cy="100" rx="6" ry="5" fill="#E89000" />
      {/* Abdomen - bold yellow and black */}
      <g className="pest-body">
        <ellipse cx="100" cy="132" rx="22" ry="32" fill="#E89000" />
        <path d="M78 118 h44" stroke="#222" strokeWidth="5" />
        <path d="M78 130 h44" stroke="#222" strokeWidth="5" />
        <path d="M80 142 h40" stroke="#222" strokeWidth="5" />
      </g>
      {/* Stinger */}
      <g className="pest-stinger">
        <polygon points="100,165 96,160 104,160" fill="#222" />
        <line x1="100" y1="165" x2="100" y2="172" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Head - large, orange */}
      <circle cx="100" cy="56" r="16" fill="#E89000" />
      {/* Large mandibles */}
      <path d="M90 68 Q84 76 80 74 Q78 72 82 68" stroke="#222" strokeWidth="2.5" fill="#2A2A2A" strokeLinecap="round" />
      <path d="M110 68 Q116 76 120 74 Q122 72 118 68" stroke="#222" strokeWidth="2.5" fill="#2A2A2A" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="90" cy="52" rx="6" ry="7" fill="#222" />
      <ellipse cx="110" cy="52" rx="6" ry="7" fill="#222" />
      <circle cx="89" cy="50" r="2" fill="#444" />
      <circle cx="109" cy="50" r="2" fill="#444" />
      {/* Ocelli (single eyes on top) */}
      <circle cx="100" cy="42" r="2" fill="#FFD700" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 44 Q78 28 72 18" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 44 Q122 28 128 18" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M84 90 Q62 98 45 112" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 96 Q60 108 48 128" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M116 90 Q138 98 155 112" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 96 Q140 108 152 128" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function AshinagabachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-wing-l">
        <ellipse cx="65" cy="72" rx="24" ry="9" fill="#F0E0C0" opacity="0.45" transform="rotate(-10 65 72)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="135" cy="72" rx="24" ry="9" fill="#F0E0C0" opacity="0.45" transform="rotate(10 135 72)" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="74" rx="14" ry="11" fill="#333" />
      {/* Long narrow petiole */}
      <ellipse cx="100" cy="90" rx="4" ry="6" fill="#DAA520" />
      {/* Abdomen - slender, yellow-brown */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="14" ry="26" fill="#DAA520" />
        <path d="M87 108 h26" stroke="#222" strokeWidth="3" />
        <path d="M86 118 h28" stroke="#222" strokeWidth="3" />
        <path d="M87 128 h26" stroke="#222" strokeWidth="3" />
      </g>
      <g className="pest-stinger">
        <polygon points="100,146 97,142 103,142" fill="#222" />
      </g>
      {/* Head */}
      <circle cx="100" cy="54" r="12" fill="#DAA520" />
      <ellipse cx="92" cy="52" rx="5" ry="5.5" fill="#222" />
      <ellipse cx="108" cy="52" rx="5" ry="5.5" fill="#222" />
      <circle cx="91" cy="51" r="1.5" fill="#555" />
      <circle cx="107" cy="51" r="1.5" fill="#555" />
      <g className="pest-antenna-l">
        <path d="M90 44 Q80 28 74 16" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 44 Q120 28 126 16" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Long dangling legs */}
      <g className="pest-leg-l">
        <path d="M88 82 Q62 95 42 115 Q35 125 30 145" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 86 Q58 105 38 130 Q32 142 28 160" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 90 Q55 118 40 148 Q35 162 32 178" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 82 Q138 95 158 115 Q165 125 170 145" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 86 Q142 105 162 130 Q168 142 172 160" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 90 Q145 118 160 148 Q165 162 168 178" stroke="#DAA520" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function IgaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - narrow, golden, with fringe */}
      <g className="pest-moth-wing-l">
        <path d="M96 90 Q55 70 35 85 Q30 90 38 100 Q50 115 96 108" fill="#D4B878" />
        <path d="M96 90 Q55 70 35 85 Q30 90 38 100 Q50 115 96 108" fill="none" stroke="#C0A460" strokeWidth="0.8" />
        {/* Fringe hairs on wing edge */}
        <path d="M35 88 L28 85" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M33 92 L26 90" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M34 96 L27 95" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M36 100 L29 100" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M40 104 L33 105" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M46 108 L40 110" stroke="#C0A460" strokeWidth="0.5" />
      </g>
      <g className="pest-moth-wing-r">
        <path d="M104 90 Q145 70 165 85 Q170 90 162 100 Q150 115 104 108" fill="#D4B878" />
        <path d="M104 90 Q145 70 165 85 Q170 90 162 100 Q150 115 104 108" fill="none" stroke="#C0A460" strokeWidth="0.8" />
        <path d="M165 88 L172 85" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M167 92 L174 90" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M166 96 L173 95" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M164 100 L171 100" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M160 104 L167 105" stroke="#C0A460" strokeWidth="0.5" />
        <path d="M154 108 L160 110" stroke="#C0A460" strokeWidth="0.5" />
      </g>
      {/* Body - thin, fuzzy */}
      <ellipse cx="100" cy="105" rx="6" ry="22" fill="#A08050" />
      <ellipse cx="100" cy="105" rx="6" ry="22" fill="none" stroke="#C0A060" strokeWidth="1" opacity="0.5" />
      {/* Head */}
      <circle cx="100" cy="78" r="7" fill="#A08050" />
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M95 72 Q82 52 72 40" stroke="#A08050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M77 47 L70 44" stroke="#A08050" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M80 52 L73 50" stroke="#A08050" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M105 72 Q118 52 128 40" stroke="#A08050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M123 47 L130 44" stroke="#A08050" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M120 52 L127 50" stroke="#A08050" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      {/* Eyes */}
      <circle cx="96" cy="76" r="2" fill="#333" />
      <circle cx="104" cy="76" r="2" fill="#333" />
      {/* Legs */}
      <path d="M94 112 Q84 125 75 135" stroke="#A08050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M106 112 Q116 125 125 135" stroke="#A08050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function TobizumukadeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head - red */}
      <g className="pest-seg-1">
        <ellipse cx="100" cy="22" rx="16" ry="10" fill="#B81C00" />
        {/* Eyes */}
        <circle cx="93" cy="20" r="2.5" fill="#222" />
        <circle cx="107" cy="20" r="2.5" fill="#222" />
        {/* Antennae */}
        <g className="pest-antenna-l">
          <path d="M88 15 Q72 5 58 2" stroke="#B81C00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-antenna-r">
          <path d="M112 15 Q128 5 142 2" stroke="#B81C00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Forcipules (venomous claws) - red */}
        <path d="M88 26 Q76 34 70 30 Q68 28 72 24" stroke="#FF3000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M112 26 Q124 34 130 30 Q132 28 128 24" stroke="#FF3000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Body segments - alternating dark green/brown with yellow legs */}
      <g className="pest-seg-2">
        <ellipse cx="100" cy="38" rx="13" ry="7" fill="#2D4A1E" />
        <path d="M87 38 Q68 32 52 26" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 38 Q132 32 148 26" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-3">
        <ellipse cx="100" cy="52" rx="13" ry="7" fill="#3A5828" />
        <path d="M87 52 Q66 46 48 40" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 52 Q134 46 152 40" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-4">
        <ellipse cx="100" cy="66" rx="13" ry="7" fill="#2D4A1E" />
        <path d="M87 66 Q66 60 46 54" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 66 Q134 60 154 54" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-5">
        <ellipse cx="100" cy="80" rx="13" ry="7" fill="#3A5828" />
        <path d="M87 80 Q66 74 46 68" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 80 Q134 74 154 68" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-6">
        <ellipse cx="100" cy="94" rx="13" ry="7" fill="#2D4A1E" />
        <path d="M87 94 Q66 88 46 82" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 94 Q134 88 154 82" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-7">
        <ellipse cx="100" cy="108" rx="13" ry="7" fill="#3A5828" />
        <path d="M87 108 Q66 102 48 96" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 108 Q134 102 152 96" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-8">
        <ellipse cx="100" cy="122" rx="13" ry="7" fill="#2D4A1E" />
        <path d="M87 122 Q66 116 48 110" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M113 122 Q134 116 152 110" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      {/* Additional segments */}
      <ellipse cx="100" cy="136" rx="12" ry="7" fill="#3A5828" />
      <path d="M88 136 Q68 130 50 124" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M112 136 Q132 130 150 124" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="150" rx="11" ry="6" fill="#2D4A1E" />
      <path d="M89 150 Q70 144 54 138" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M111 150 Q130 144 146 138" stroke="#D4A020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="163" rx="10" ry="6" fill="#3A5828" />
      {/* Tail legs (longer) */}
      <path d="M90 166 Q74 178 60 190" stroke="#D4A020" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M110 166 Q126 178 140 190" stroke="#D4A020" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function KamemushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-body">
        {/* Body - pentagonal shield shape */}
        <path d="M60 70 L100 50 L140 70 L135 140 Q100 155 65 140 Z" fill="#5A8030" />
        <path d="M60 70 L100 50 L140 70 L135 140 Q100 155 65 140 Z" fill="none" stroke="#4A6820" strokeWidth="1.5" />
        {/* Scutellum (triangular center) */}
        <path d="M75 72 L100 60 L125 72 L110 120 Q100 128 90 120 Z" fill="#6A9038" opacity="0.6" />
        {/* Wing edges */}
        <path d="M60 70 L65 140" stroke="#4A6820" strokeWidth="1" opacity="0.4" />
        <path d="M140 70 L135 140" stroke="#4A6820" strokeWidth="1" opacity="0.4" />
        {/* Membrane wing tips */}
        <path d="M90 120 Q100 140 110 120" fill="#7AA848" opacity="0.3" />
      </g>
      {/* Stink cloud (shown on hover) */}
      <g className="pest-stink" opacity="0">
        <circle cx="45" cy="100" r="8" fill="#90C040" opacity="0.3" />
        <circle cx="155" cy="100" r="8" fill="#90C040" opacity="0.3" />
        <circle cx="40" cy="85" r="5" fill="#90C040" opacity="0.2" />
        <circle cx="160" cy="85" r="5" fill="#90C040" opacity="0.2" />
      </g>
      {/* Head - small, triangular */}
      <path d="M88 52 L100 38 L112 52 Z" fill="#4A6820" />
      <circle cx="94" cy="46" r="2.5" fill="#222" />
      <circle cx="106" cy="46" r="2.5" fill="#222" />
      {/* Antennae - 5 segments */}
      <g className="pest-antenna-l">
        <path d="M90 42 Q78 30 68 22 L62 18" stroke="#4A6820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 42 Q122 30 132 22 L138 18" stroke="#4A6820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M62 80 Q44 72 30 66" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M60 100 Q40 96 24 90" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M62 122 Q44 130 30 140" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M138 80 Q156 72 170 66" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M140 100 Q160 96 176 90" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M138 122 Q156 130 170 140" stroke="#4A6820" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ShiroariSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Abdomen - pale, soft, translucent */}
        <ellipse cx="100" cy="120" rx="22" ry="30" fill="#F0E8D0" opacity="0.85" />
        <ellipse cx="100" cy="120" rx="22" ry="30" fill="none" stroke="#D8D0B8" strokeWidth="1.2" />
        {/* Gut visible */}
        <ellipse cx="100" cy="122" rx="8" ry="16" fill="#D4C8A0" opacity="0.3" />
        {/* Thorax */}
        <ellipse cx="100" cy="86" rx="14" ry="10" fill="#E8DCC0" />
        <ellipse cx="100" cy="86" rx="14" ry="10" fill="none" stroke="#D8D0B8" strokeWidth="1" />
        {/* Head - large, round, darker */}
        <circle cx="100" cy="66" r="14" fill="#D4C090" />
        <circle cx="100" cy="66" r="14" fill="none" stroke="#C0B080" strokeWidth="1" />
        {/* Large mandibles */}
        <path d="M90 74 Q82 82 78 78 Q76 76 80 72" stroke="#B0A060" strokeWidth="2.5" fill="#C0A870" strokeLinecap="round" />
        <path d="M110 74 Q118 82 122 78 Q124 76 120 72" stroke="#B0A060" strokeWidth="2.5" fill="#C0A870" strokeLinecap="round" />
        {/* Eyes - tiny */}
        <circle cx="93" cy="62" r="2" fill="#666" />
        <circle cx="107" cy="62" r="2" fill="#666" />
        {/* Antennae - beaded */}
        <path d="M92 56 Q82 42 72 34" stroke="#C0B080" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="40" r="1.5" fill="#C0B080" />
        <circle cx="74" cy="36" r="1.5" fill="#C0B080" />
        <path d="M108 56 Q118 42 128 34" stroke="#C0B080" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="120" cy="40" r="1.5" fill="#C0B080" />
        <circle cx="126" cy="36" r="1.5" fill="#C0B080" />
        {/* Legs */}
        <g className="pest-leg-l">
          <path d="M86 88 Q68 82 52 78" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M82 100 Q62 98 44 96" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M80 128 Q62 138 48 148" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M114 88 Q132 82 148 78" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M118 100 Q138 98 156 96" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M120 128 Q138 138 152 148" stroke="#D4C8A0" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function ChadokugaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - yellowish with brown patterns */}
      <g className="pest-moth-wing-l">
        <ellipse cx="60" cy="95" rx="38" ry="26" fill="#D8C078" transform="rotate(-10 60 95)" />
        <ellipse cx="60" cy="95" rx="38" ry="26" fill="none" stroke="#C0A858" strokeWidth="0.8" transform="rotate(-10 60 95)" />
        {/* Wing spots */}
        <circle cx="48" cy="88" r="5" fill="#A08030" opacity="0.5" />
        <circle cx="62" cy="82" r="3" fill="#A08030" opacity="0.4" />
        {/* Wavy line pattern */}
        <path d="M30 90 Q42 86 55 90 Q68 94 80 90" stroke="#B09040" strokeWidth="1" fill="none" opacity="0.5" />
      </g>
      <g className="pest-moth-wing-r">
        <ellipse cx="140" cy="95" rx="38" ry="26" fill="#D8C078" transform="rotate(10 140 95)" />
        <ellipse cx="140" cy="95" rx="38" ry="26" fill="none" stroke="#C0A858" strokeWidth="0.8" transform="rotate(10 140 95)" />
        <circle cx="152" cy="88" r="5" fill="#A08030" opacity="0.5" />
        <circle cx="138" cy="82" r="3" fill="#A08030" opacity="0.4" />
        <path d="M120 90 Q132 86 145 90 Q158 94 170 90" stroke="#B09040" strokeWidth="1" fill="none" opacity="0.5" />
      </g>
      {/* Lower wings */}
      <g className="pest-moth-wing-l">
        <ellipse cx="68" cy="122" rx="28" ry="18" fill="#E0D088" transform="rotate(-5 68 122)" />
      </g>
      <g className="pest-moth-wing-r">
        <ellipse cx="132" cy="122" rx="28" ry="18" fill="#E0D088" transform="rotate(5 132 122)" />
      </g>
      {/* Fuzzy body */}
      <ellipse cx="100" cy="105" rx="9" ry="24" fill="#C0A050" />
      {/* Fluffy hair tufts on body */}
      <circle cx="96" cy="88" r="3" fill="#D4B868" opacity="0.6" />
      <circle cx="104" cy="88" r="3" fill="#D4B868" opacity="0.6" />
      <circle cx="95" cy="96" r="2.5" fill="#D4B868" opacity="0.5" />
      <circle cx="105" cy="96" r="2.5" fill="#D4B868" opacity="0.5" />
      <circle cx="95" cy="118" r="3" fill="#D4B868" opacity="0.6" />
      <circle cx="105" cy="118" r="3" fill="#D4B868" opacity="0.6" />
      {/* Head - fluffy */}
      <circle cx="100" cy="75" r="8" fill="#C0A050" />
      <circle cx="97" cy="72" r="3" fill="#D4B868" opacity="0.5" />
      <circle cx="103" cy="72" r="3" fill="#D4B868" opacity="0.5" />
      <circle cx="96" cy="74" r="1.5" fill="#333" />
      <circle cx="104" cy="74" r="1.5" fill="#333" />
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M94 68 Q80 48 68 35" stroke="#C0A050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M74 42 L67 40" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
        <path d="M78 47 L71 46" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
        <path d="M82 52 L76 51" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 68 Q120 48 132 35" stroke="#C0A050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M126 42 L133 40" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
        <path d="M122 47 L129 46" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
        <path d="M118 52 L124 51" stroke="#C0A050" strokeWidth="1" strokeLinecap="round" />
      </g>
      {/* Warning symbol for toxic hairs */}
      <text x="100" y="160" textAnchor="middle" fontSize="10" fill="#CC4400" fontFamily="sans-serif">⚠ 毒針毛注意</text>
    </svg>
  );
}

/* ==============================
   蚊・ハエ類（追加）
   ============================== */

function ChoubaeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - heart/leaf shaped, fuzzy */}
      <g className="pest-moth-wing-l">
        <path d="M94 88 Q60 60 40 75 Q28 85 35 100 Q45 118 94 110" fill="#B0A090" />
        <path d="M94 88 Q60 60 40 75 Q28 85 35 100 Q45 118 94 110" fill="none" stroke="#9A8A7A" strokeWidth="0.8" />
        {/* Fuzzy texture dots */}
        <circle cx="55" cy="82" r="2" fill="#C0B0A0" opacity="0.5" />
        <circle cx="48" cy="90" r="1.5" fill="#C0B0A0" opacity="0.5" />
        <circle cx="60" cy="95" r="2" fill="#C0B0A0" opacity="0.5" />
        <circle cx="42" cy="98" r="1.5" fill="#C0B0A0" opacity="0.4" />
        {/* Vein pattern */}
        <path d="M90 95 Q65 85 42 88" stroke="#8A7A6A" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M88 100 Q60 95 40 96" stroke="#8A7A6A" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      <g className="pest-moth-wing-r">
        <path d="M106 88 Q140 60 160 75 Q172 85 165 100 Q155 118 106 110" fill="#B0A090" />
        <path d="M106 88 Q140 60 160 75 Q172 85 165 100 Q155 118 106 110" fill="none" stroke="#9A8A7A" strokeWidth="0.8" />
        <circle cx="145" cy="82" r="2" fill="#C0B0A0" opacity="0.5" />
        <circle cx="152" cy="90" r="1.5" fill="#C0B0A0" opacity="0.5" />
        <circle cx="140" cy="95" r="2" fill="#C0B0A0" opacity="0.5" />
        <circle cx="158" cy="98" r="1.5" fill="#C0B0A0" opacity="0.4" />
        <path d="M110 95 Q135 85 158 88" stroke="#8A7A6A" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M112 100 Q140 95 160 96" stroke="#8A7A6A" strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      {/* Fuzzy body */}
      <ellipse cx="100" cy="100" rx="7" ry="18" fill="#8A7A6A" />
      {/* Fuzzy hair tufts */}
      <circle cx="96" cy="90" r="2.5" fill="#A09080" opacity="0.6" />
      <circle cx="104" cy="90" r="2.5" fill="#A09080" opacity="0.6" />
      <circle cx="96" cy="100" r="2" fill="#A09080" opacity="0.5" />
      <circle cx="104" cy="100" r="2" fill="#A09080" opacity="0.5" />
      {/* Head - fuzzy */}
      <circle cx="100" cy="76" r="7" fill="#8A7A6A" />
      <circle cx="97" cy="74" r="2.5" fill="#9A8A7A" opacity="0.5" />
      <circle cx="103" cy="74" r="2.5" fill="#9A8A7A" opacity="0.5" />
      <circle cx="97" cy="75" r="1.2" fill="#333" />
      <circle cx="103" cy="75" r="1.2" fill="#333" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M95 70 Q86 56 78 48" stroke="#8A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M105 70 Q114 56 122 48" stroke="#8A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <path d="M94 112 Q86 124 78 132" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M106 112 Q114 124 122 132" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function BuyuSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - broad, rounded */}
      <g className="pest-wing-l">
        <ellipse cx="62" cy="90" rx="30" ry="16" fill="#D0D8E0" opacity="0.45" transform="rotate(-12 62 90)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="138" cy="90" rx="30" ry="16" fill="#D0D8E0" opacity="0.45" transform="rotate(12 138 90)" />
      </g>
      {/* Thorax - humped */}
      <ellipse cx="100" cy="86" rx="18" ry="16" fill="#2A2A2A" />
      <ellipse cx="96" cy="80" rx="8" ry="10" fill="#3A3A3A" opacity="0.4" />
      {/* Abdomen - short, stout */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="14" ry="20" fill="#1A1A1A" />
        <path d="M87 110 h26" stroke="#333" strokeWidth="0.8" opacity="0.3" />
        <path d="M86 118 h28" stroke="#333" strokeWidth="0.8" opacity="0.3" />
        <path d="M87 126 h26" stroke="#333" strokeWidth="0.8" opacity="0.3" />
      </g>
      {/* Head - round, tucked under thorax */}
      <circle cx="100" cy="72" r="10" fill="#222" />
      <circle cx="95" cy="70" r="3.5" fill="#444" />
      <circle cx="105" cy="70" r="3.5" fill="#444" />
      {/* Short antennae */}
      <g className="pest-antenna-l">
        <path d="M93 64 Q88 55 84 50" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M107 64 Q112 55 116 50" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs - short, stout */}
      <g className="pest-leg-l">
        <path d="M86 96 Q68 100 54 108" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M86 108 Q68 116 54 128" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M88 128 Q72 140 60 150" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 96 Q132 100 146 108" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M114 108 Q132 116 146 128" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M112 128 Q128 140 140 150" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ==============================
   クモ類
   ============================== */

function SeakagokegumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abdomen - glossy black with red stripe */}
      <g className="pest-body">
        <circle cx="100" cy="120" r="30" fill="#1A1A1A" />
        <circle cx="100" cy="120" r="30" fill="none" stroke="#111" strokeWidth="1" />
        {/* Red dorsal stripe */}
        <path d="M100 92 L94 108 L100 115 L106 108 Z" fill="#CC0000" />
        <path d="M94 108 L100 115 L106 108" fill="none" stroke="#FF0000" strokeWidth="1" opacity="0.6" />
        {/* Red hourglass (ventral, shown for recognition) */}
        <ellipse cx="100" cy="135" rx="6" ry="8" fill="#CC0000" opacity="0.7" />
        {/* Sheen */}
        <circle cx="92" cy="112" r="8" fill="white" opacity="0.08" />
      </g>
      {/* Cephalothorax */}
      <ellipse cx="100" cy="86" rx="12" ry="10" fill="#222" />
      {/* Eyes (8 eyes in 2 rows) */}
      <circle cx="95" cy="82" r="1.5" fill="#FF4444" />
      <circle cx="99" cy="80" r="1.2" fill="#FF4444" />
      <circle cx="101" cy="80" r="1.2" fill="#FF4444" />
      <circle cx="105" cy="82" r="1.5" fill="#FF4444" />
      {/* Chelicerae */}
      <path d="M96 92 L94 98" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M104 92 L106 98" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      {/* 8 legs - thin, long */}
      <g className="pest-leg-l">
        <path d="M90 82 Q62 55 38 35" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 86 Q56 65 28 52" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 90 Q55 85 25 78" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 94 Q58 108 30 125" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 82 Q138 55 162 35" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 86 Q144 65 172 52" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 90 Q145 85 175 78" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 94 Q142 108 170 125" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      {/* Pedipalps */}
      <path d="M94 88 Q84 82 78 80" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M106 88 Q116 82 122 80" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Warning */}
      <text x="100" y="172" textAnchor="middle" fontSize="9" fill="#CC0000" fontFamily="sans-serif">⚠ 特定外来生物</text>
    </svg>
  );
}

function AshidakagumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="108" rx="18" ry="22" fill="#8B7355" />
        <ellipse cx="100" cy="108" rx="18" ry="22" fill="none" stroke="#7A6245" strokeWidth="1" />
        {/* Pattern */}
        <path d="M86 100 Q100 95 114 100" stroke="#6A5235" strokeWidth="0.8" fill="none" opacity="0.4" />
      </g>
      {/* Cephalothorax */}
      <ellipse cx="100" cy="82" rx="15" ry="12" fill="#7A6245" />
      {/* Eyes */}
      <circle cx="94" cy="78" r="2" fill="#222" />
      <circle cx="98" cy="76" r="1.5" fill="#222" />
      <circle cx="102" cy="76" r="1.5" fill="#222" />
      <circle cx="106" cy="78" r="2" fill="#222" />
      {/* Chelicerae */}
      <path d="M96 90 L93 96" stroke="#6A5235" strokeWidth="2" strokeLinecap="round" />
      <path d="M104 90 L107 96" stroke="#6A5235" strokeWidth="2" strokeLinecap="round" />
      {/* Pedipalps */}
      <path d="M93 86 Q82 78 74 76" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M107 86 Q118 78 126 76" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* 8 very long legs */}
      <g className="pest-leg-l">
        <path d="M88 78 Q52 42 22 18" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M86 82 Q48 52 14 32" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M86 86 Q44 72 8 60" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M86 92 Q50 108 18 135" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 78 Q148 42 178 18" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M114 82 Q152 52 186 32" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M114 86 Q156 72 192 60" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M114 92 Q150 108 182 135" stroke="#8B7355" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ==============================
   アリ・甲虫類
   ============================== */

function HiariSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Gaster (abdomen) */}
        <ellipse cx="100" cy="128" rx="18" ry="22" fill="#B83020" />
        <ellipse cx="100" cy="128" rx="18" ry="22" fill="none" stroke="#A02818" strokeWidth="1" />
        <ellipse cx="95" cy="120" rx="6" ry="10" fill="#C84030" opacity="0.3" />
        {/* Stinger */}
        <g className="pest-stinger">
          <path d="M100 150 L100 158" stroke="#8B2010" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Petiole (waist nodes) */}
        <circle cx="100" cy="103" r="4" fill="#A03020" />
        <circle cx="100" cy="96" r="3.5" fill="#A03020" />
        {/* Thorax */}
        <ellipse cx="100" cy="82" rx="12" ry="10" fill="#C04030" />
        {/* Head */}
        <ellipse cx="100" cy="62" rx="14" ry="12" fill="#B83020" />
        <ellipse cx="100" cy="62" rx="14" ry="12" fill="none" stroke="#A02818" strokeWidth="1" />
        {/* Eyes */}
        <circle cx="92" cy="60" r="3" fill="#222" />
        <circle cx="108" cy="60" r="3" fill="#222" />
        {/* Mandibles */}
        <path d="M90 70 Q84 78 78 76 Q76 74 80 70" stroke="#8B2010" strokeWidth="2" fill="#A03020" strokeLinecap="round" />
        <path d="M110 70 Q116 78 122 76 Q124 74 120 70" stroke="#8B2010" strokeWidth="2" fill="#A03020" strokeLinecap="round" />
        {/* Antennae - elbowed */}
        <g className="pest-antenna-l">
          <path d="M90 54 L78 48 Q68 40 62 32" stroke="#A03020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-antenna-r">
          <path d="M110 54 L122 48 Q132 40 138 32" stroke="#A03020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Legs */}
        <g className="pest-leg-l">
          <path d="M88 78 Q68 70 50 62" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M88 86 Q66 82 46 78" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M88 92 Q66 100 48 112" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M112 78 Q132 70 150 62" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M112 86 Q134 82 154 78" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M112 92 Q134 100 152 112" stroke="#A03020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>
      </g>
      <text x="100" y="180" textAnchor="middle" fontSize="9" fill="#CC0000" fontFamily="sans-serif">⚠ 特定外来生物</text>
    </svg>
  );
}

function KokuzoumushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Body - oval, dark brown */}
        <ellipse cx="100" cy="112" rx="24" ry="32" fill="#4A2A10" />
        <ellipse cx="100" cy="112" rx="24" ry="32" fill="none" stroke="#3A1A08" strokeWidth="1.2" />
        {/* Elytra line */}
        <line x1="100" y1="82" x2="100" y2="142" stroke="#2A1208" strokeWidth="1" opacity="0.4" />
        {/* Elytra ridges */}
        <path d="M88 85 Q86 112 88 138" stroke="#3A1A08" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M94 82 Q92 112 94 140" stroke="#3A1A08" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M106 82 Q108 112 106 140" stroke="#3A1A08" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M112 85 Q114 112 112 138" stroke="#3A1A08" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Pronotum */}
        <ellipse cx="100" cy="76" rx="18" ry="10" fill="#3A1A08" />
        {/* Head with long snout (rostrum) */}
        <ellipse cx="100" cy="62" rx="10" ry="8" fill="#3A1A08" />
        {/* Long snout */}
        <path d="M100 54 L100 34" stroke="#3A1A08" strokeWidth="4" strokeLinecap="round" />
        <path d="M100 54 L100 34" stroke="#4A2A10" strokeWidth="2" strokeLinecap="round" />
        {/* Antennae - elbowed, from middle of snout */}
        <g className="pest-antenna-l">
          <path d="M98 44 L86 38 Q78 32 72 28" stroke="#3A1A08" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-antenna-r">
          <path d="M102 44 L114 38 Q122 32 128 28" stroke="#3A1A08" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        {/* Eyes - small, on sides of head */}
        <circle cx="91" cy="60" r="2.5" fill="#222" />
        <circle cx="109" cy="60" r="2.5" fill="#222" />
        {/* Legs */}
        <g className="pest-leg-l">
          <path d="M78 84 Q60 76 44 70" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M76 100 Q56 96 38 92" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M78 122 Q58 132 42 142" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M122 84 Q140 76 156 70" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M124 100 Q144 96 162 92" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M122 122 Q142 132 158 142" stroke="#3A1A08" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function ShibanmushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-crawl">
        {/* Body - very round, reddish-brown */}
        <circle cx="100" cy="110" r="30" fill="#8B4513" />
        <circle cx="100" cy="110" r="30" fill="none" stroke="#6B3510" strokeWidth="1.2" />
        {/* Elytra line */}
        <line x1="100" y1="82" x2="100" y2="138" stroke="#5A2A0A" strokeWidth="1" opacity="0.35" />
        {/* Slight sheen */}
        <circle cx="90" cy="100" r="12" fill="white" opacity="0.06" />
        {/* Pronotum - hood-like, covering head */}
        <ellipse cx="100" cy="78" rx="22" ry="14" fill="#7A3A10" />
        {/* Head - hidden under pronotum */}
        <ellipse cx="100" cy="68" rx="10" ry="7" fill="#6B3010" />
        {/* Eyes */}
        <circle cx="94" cy="66" r="2" fill="#222" />
        <circle cx="106" cy="66" r="2" fill="#222" />
        {/* Antennae - club-shaped (last 3 segments enlarged) */}
        <g className="pest-antenna-l">
          <path d="M92 62 Q82 50 74 42" stroke="#6B3010" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="72" cy="40" r="2.5" fill="#6B3010" />
        </g>
        <g className="pest-antenna-r">
          <path d="M108 62 Q118 50 126 42" stroke="#6B3010" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="128" cy="40" r="2.5" fill="#6B3010" />
        </g>
        {/* Legs */}
        <g className="pest-leg-l">
          <path d="M72 92 Q54 84 38 78" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M70 110 Q50 106 34 102" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M72 128 Q54 138 40 148" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <g className="pest-leg-r">
          <path d="M128 92 Q146 84 162 78" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M130 110 Q150 106 166 102" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M128 128 Q146 138 160 148" stroke="#6B3010" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

/* ==============================
   その他（追加）
   ============================== */

function GejiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body - elongated, segmented */}
      <ellipse cx="100" cy="100" rx="14" ry="28" fill="#B8A888" />
      <ellipse cx="100" cy="100" rx="14" ry="28" fill="none" stroke="#A09070" strokeWidth="1" />
      {/* Segments */}
      <path d="M86 88 h28" stroke="#9A8A6A" strokeWidth="0.6" opacity="0.4" />
      <path d="M86 96 h28" stroke="#9A8A6A" strokeWidth="0.6" opacity="0.4" />
      <path d="M86 104 h28" stroke="#9A8A6A" strokeWidth="0.6" opacity="0.4" />
      <path d="M86 112 h28" stroke="#9A8A6A" strokeWidth="0.6" opacity="0.4" />
      {/* Head */}
      <ellipse cx="100" cy="66" rx="10" ry="8" fill="#A09070" />
      {/* Large compound eyes */}
      <circle cx="93" cy="64" r="4" fill="#222" />
      <circle cx="107" cy="64" r="4" fill="#222" />
      <circle cx="92" cy="63" r="1.5" fill="#555" />
      <circle cx="106" cy="63" r="1.5" fill="#555" />
      {/* Very long antennae */}
      <g className="pest-antenna-l">
        <path d="M90 60 Q60 30 25 10" stroke="#B8A888" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 60 Q140 30 175 10" stroke="#B8A888" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      {/* 15 pairs of very long legs - getting longer toward rear */}
      <g className="pest-leg-l">
        <path d="M86 76 Q68 62 52 50" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M86 80 Q62 64 40 48" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M86 86 Q56 68 28 52" stroke="#C8B898" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M86 92 Q50 74 18 60" stroke="#C8B898" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M86 98 Q48 82 12 72" stroke="#C8B898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M86 104 Q46 92 10 86" stroke="#C8B898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M86 110 Q48 106 12 104" stroke="#C8B898" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M86 116 Q50 118 16 126" stroke="#C8B898" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 76 Q132 62 148 50" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M114 80 Q138 64 160 48" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M114 86 Q144 68 172 52" stroke="#C8B898" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M114 92 Q150 74 182 60" stroke="#C8B898" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M114 98 Q152 82 188 72" stroke="#C8B898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M114 104 Q154 92 190 86" stroke="#C8B898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M114 110 Q152 106 188 104" stroke="#C8B898" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <path d="M114 116 Q150 118 184 126" stroke="#C8B898" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      </g>
      {/* Long tail cerci */}
      <path d="M92 128 Q68 155 40 180" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M108 128 Q132 155 160 180" stroke="#C8B898" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function YasudeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body segments - round, dark brown */}
      <g className="pest-seg-1">
        <ellipse cx="100" cy="30" rx="14" ry="8" fill="#3A2A1A" />
        {/* Eyes */}
        <circle cx="94" cy="28" r="2" fill="#222" />
        <circle cx="106" cy="28" r="2" fill="#222" />
        {/* Short antennae */}
        <path d="M92 24 Q86 16 82 12" stroke="#3A2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M108 24 Q114 16 118 12" stroke="#3A2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-2">
        <ellipse cx="100" cy="44" rx="15" ry="8" fill="#4A3520" />
        <path d="M85 44 Q70 38 58 34" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 44 Q70 50 58 54" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 44 Q130 38 142 34" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 44 Q130 50 142 54" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-3">
        <ellipse cx="100" cy="58" rx="15" ry="8" fill="#3A2A1A" />
        <path d="M85 58 Q68 52 54 48" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 58 Q68 64 54 68" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 58 Q132 52 146 48" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 58 Q132 64 146 68" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-4">
        <ellipse cx="100" cy="72" rx="15" ry="8" fill="#4A3520" />
        <path d="M85 72 Q68 66 52 62" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 72 Q68 78 52 82" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 72 Q132 66 148 62" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 72 Q132 78 148 82" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-5">
        <ellipse cx="100" cy="86" rx="15" ry="8" fill="#3A2A1A" />
        <path d="M85 86 Q68 80 52 76" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 86 Q68 92 52 96" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 86 Q132 80 148 76" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 86 Q132 92 148 96" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-6">
        <ellipse cx="100" cy="100" rx="15" ry="8" fill="#4A3520" />
        <path d="M85 100 Q68 94 52 90" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 100 Q68 106 52 110" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 100 Q132 94 148 90" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 100 Q132 106 148 110" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-7">
        <ellipse cx="100" cy="114" rx="15" ry="8" fill="#3A2A1A" />
        <path d="M85 114 Q68 108 52 104" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M85 114 Q68 120 52 124" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 114 Q132 108 148 104" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M115 114 Q132 120 148 124" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-seg-8">
        <ellipse cx="100" cy="128" rx="14" ry="8" fill="#4A3520" />
        <path d="M86 128 Q70 122 56 118" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M86 128 Q70 134 56 138" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M114 128 Q130 122 144 118" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M114 128 Q130 134 144 138" stroke="#5A4530" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      {/* Tail segments */}
      <ellipse cx="100" cy="142" rx="13" ry="7" fill="#3A2A1A" />
      <ellipse cx="100" cy="154" rx="11" ry="6" fill="#4A3520" />
      <ellipse cx="100" cy="164" rx="8" ry="5" fill="#3A2A1A" />
    </svg>
  );
}

function DangomushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="pest-body">
        {/* Body - oval, segmented, armored */}
        <ellipse cx="100" cy="105" rx="38" ry="44" fill="#6B6B6B" />
        <ellipse cx="100" cy="105" rx="38" ry="44" fill="none" stroke="#555" strokeWidth="1.5" />
        {/* Segments - arched plates */}
        <path d="M64 75 Q100 68 136 75" stroke="#555" strokeWidth="1.5" fill="none" />
        <path d="M62 88 Q100 80 138 88" stroke="#555" strokeWidth="1.5" fill="none" />
        <path d="M62 100 Q100 92 138 100" stroke="#555" strokeWidth="1.5" fill="none" />
        <path d="M62 112 Q100 104 138 112" stroke="#555" strokeWidth="1.5" fill="none" />
        <path d="M63 124 Q100 116 137 124" stroke="#555" strokeWidth="1.5" fill="none" />
        <path d="M65 135 Q100 128 135 135" stroke="#555" strokeWidth="1.5" fill="none" />
        {/* Sheen */}
        <ellipse cx="88" cy="95" rx="15" ry="22" fill="white" opacity="0.06" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="58" rx="16" ry="8" fill="#5A5A5A" />
      <circle cx="92" cy="56" r="2.5" fill="#333" />
      <circle cx="108" cy="56" r="2.5" fill="#333" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M88 52 Q76 40 68 32" stroke="#6B6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 32 L62 28" stroke="#6B6B6B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 52 Q124 40 132 32" stroke="#6B6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M132 32 L138 28" stroke="#6B6B6B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Many small legs (7 pairs) */}
      <g className="pest-leg-l">
        <path d="M64 76 Q54 72 46 68" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M62 88 Q52 84 42 80" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M62 100 Q50 96 40 92" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M62 112 Q50 110 40 106" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M63 124 Q52 122 42 120" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M65 134 Q54 134 44 132" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 142 Q58 144 48 144" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M136 76 Q146 72 154 68" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M138 88 Q148 84 158 80" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M138 100 Q150 96 160 92" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M138 112 Q150 110 160 106" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M137 124 Q148 122 158 120" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M135 134 Q146 134 156 132" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M132 142 Q142 144 152 144" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Uropods (tail) */}
      <path d="M92 148 L88 156" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M108 148 L112 156" stroke="#5A5A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ==============================
   SVG Map & Export
   ============================== */

const svgMap: Record<string, React.ReactNode> = {
  kurogokiburi: <KuroGokiburi />,
  chabanegokiburi: <ChabaneGokiburi />,
  wamongokiburi: <WamonGokiburi />,
  yamatogokiburi: <YamatoGokiburi />,
  hitosujishimaka: <HitosujishimakaSvg />,
  akaieka: <AkaiekaSvg />,
  iebae: <IebaeSvg />,
  shoujoubae: <ShoujoubaeeSvg />,
  hyouhidani: <HyouhidaniSvg />,
  tsumedani: <TsumedaniSvg />,
  nekonomi: <NekonomiSvg />,
  atamajirami: <AtamajiramiSvg />,
  tokojirami: <TokojiramiSvg />,
  madani: <MadaniSvg />,
  suzumebachi: <SuzumebachiSvg />,
  ashinagabachi: <AshinagabachiSvg />,
  iga: <IgaSvg />,
  tobizumukade: <TobizumukadeSvg />,
  kamemushi: <KamemushiSvg />,
  shiroari: <ShiroariSvg />,
  chadokuga: <ChadokugaSvg />,
  choubae: <ChoubaeSvg />,
  buyu: <BuyuSvg />,
  seakagokegumo: <SeakagokegumoSvg />,
  ashidakagumo: <AshidakagumoSvg />,
  hiari: <HiariSvg />,
  kokuzoumushi: <KokuzoumushiSvg />,
  shibanmushi: <ShibanmushiSvg />,
  geji: <GejiSvg />,
  yasude: <YasudeSvg />,
  dangomushi: <DangomushiSvg />,
};

export default function PestSvg({ id, size = 200 }: Props) {
  const svg = svgMap[id];
  if (!svg) {
    return (
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <circle cx="100" cy="100" r="60" fill="#ddd" />
        <text x="100" y="105" textAnchor="middle" fontSize="14" fill="#888">No Image</text>
      </svg>
    );
  }
  return <div style={{ width: size, height: size }}>{svg}</div>;
}
