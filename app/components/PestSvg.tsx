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
   追加 20 種
   ============================== */

function SashibaeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Proboscis - sharp, forward-pointing */}
      <line x1="100" y1="48" x2="100" y2="28" stroke="#3A3A3A" strokeWidth="2" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="100" cy="54" rx="12" ry="8" fill="#6B6B6B" />
      <circle cx="94" cy="52" r="3.5" fill="#993333" />
      <circle cx="106" cy="52" r="3.5" fill="#993333" />
      <circle cx="94" cy="51.5" r="1.5" fill="#CC5555" />
      <circle cx="106" cy="51.5" r="1.5" fill="#CC5555" />
      {/* Thorax */}
      <ellipse cx="100" cy="72" rx="16" ry="12" fill="#808080" />
      <path d="M100 62 L100 82" stroke="#666" strokeWidth="0.8" opacity="0.4" />
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="72" cy="78" rx="26" ry="8" fill="#C0C0C0" opacity="0.3" transform="rotate(-15 72 78)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="128" cy="78" rx="26" ry="8" fill="#C0C0C0" opacity="0.3" transform="rotate(15 128 78)" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="110" rx="14" ry="28" fill="#7A7A7A" />
        <path d="M86 100 Q100 96 114 100" stroke="#666" strokeWidth="1" fill="none" />
        <path d="M86 110 Q100 106 114 110" stroke="#666" strokeWidth="1" fill="none" />
        <path d="M86 120 Q100 116 114 120" stroke="#666" strokeWidth="1" fill="none" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M86 68 Q66 56 50 48" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 76 Q62 72 44 70" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M86 84 Q66 92 50 100" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 68 Q134 56 150 48" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 76 Q138 72 156 70" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M114 84 Q134 92 150 100" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function NukakaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Very tiny fly - drawn centered and small to emphasize its tiny size */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M94 72 Q88 60 82 54" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 72 Q112 60 118 54" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="78" rx="10" ry="8" fill="#2A2A2A" />
      <circle cx="95" cy="76" r="2.5" fill="#444" />
      <circle cx="105" cy="76" r="2.5" fill="#444" />
      {/* Thorax */}
      <ellipse cx="100" cy="94" rx="12" ry="10" fill="#3A3020" />
      {/* Wings - broad, rounded */}
      <g className="pest-wing-l">
        <ellipse cx="76" cy="92" rx="20" ry="10" fill="#D0D0D0" opacity="0.3" transform="rotate(-10 76 92)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="124" cy="92" rx="20" ry="10" fill="#D0D0D0" opacity="0.3" transform="rotate(10 124 92)" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="10" ry="16" fill="#2E2418" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M90 90 Q78 82 68 76" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 98 Q76 96 66 94" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M90 106 Q78 112 68 118" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 90 Q122 82 132 76" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 98 Q124 96 134 94" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M110 106 Q122 112 132 118" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function GaganboSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crane fly - very long thin legs */}
      {/* Head */}
      <ellipse cx="100" cy="42" rx="8" ry="6" fill="#8B7355" />
      <circle cx="96" cy="40" r="2" fill="#555" />
      <circle cx="104" cy="40" r="2" fill="#555" />
      {/* Thorax */}
      <ellipse cx="100" cy="56" rx="12" ry="10" fill="#9B8565" />
      {/* Wings - long, narrow */}
      <g className="pest-wing-l">
        <ellipse cx="68" cy="56" rx="30" ry="6" fill="#C8C0B0" opacity="0.3" transform="rotate(-8 68 56)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="132" cy="56" rx="30" ry="6" fill="#C8C0B0" opacity="0.3" transform="rotate(8 132 56)" />
      </g>
      {/* Abdomen - long, thin */}
      <g className="pest-body">
        <ellipse cx="100" cy="86" rx="7" ry="24" fill="#8B7355" />
        <path d="M93 76 Q100 74 107 76" stroke="#7A6245" strokeWidth="0.8" fill="none" />
        <path d="M93 86 Q100 84 107 86" stroke="#7A6245" strokeWidth="0.8" fill="none" />
        <path d="M93 96 Q100 94 107 96" stroke="#7A6245" strokeWidth="0.8" fill="none" />
      </g>
      {/* Legs - extremely long and thin */}
      <g className="pest-leg-l">
        <path d="M90 52 Q60 30 30 18 Q24 16 20 20" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M88 58 Q54 52 24 58 Q18 60 16 66" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M90 64 Q60 86 34 118 Q30 124 26 130" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 52 Q140 30 170 18 Q176 16 180 20" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M112 58 Q146 52 176 58 Q182 60 184 66" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M110 64 Q140 86 166 118 Q170 124 174 130" stroke="#7A6245" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function AbuSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Horsefly - large, stout body, big eyes */}
      {/* Head */}
      <ellipse cx="100" cy="52" rx="18" ry="14" fill="#4A3A2A" />
      {/* Large compound eyes */}
      <ellipse cx="88" cy="48" rx="8" ry="7" fill="#2E8B57" />
      <ellipse cx="112" cy="48" rx="8" ry="7" fill="#2E8B57" />
      <ellipse cx="88" cy="47" rx="4" ry="3.5" fill="#3CB371" opacity="0.4" />
      <ellipse cx="112" cy="47" rx="4" ry="3.5" fill="#3CB371" opacity="0.4" />
      {/* Mouthparts */}
      <path d="M96 60 L95 68" stroke="#3A2A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M104 60 L105 68" stroke="#3A2A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 62 L100 70" stroke="#3A2A1A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Thorax */}
      <ellipse cx="100" cy="80" rx="22" ry="16" fill="#5A4A3A" />
      <path d="M100 66 L100 94" stroke="#4A3A2A" strokeWidth="0.8" opacity="0.3" />
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="64" cy="80" rx="30" ry="10" fill="#C8C0B0" opacity="0.25" transform="rotate(-12 64 80)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="136" cy="80" rx="30" ry="10" fill="#C8C0B0" opacity="0.25" transform="rotate(12 136 80)" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="18" ry="28" fill="#5A4A3A" />
        <path d="M82 106 Q100 102 118 106" stroke="#4A3A2A" strokeWidth="1" fill="none" />
        <path d="M82 116 Q100 112 118 116" stroke="#4A3A2A" strokeWidth="1" fill="none" />
        <path d="M82 126 Q100 122 118 126" stroke="#4A3A2A" strokeWidth="1" fill="none" />
        <ellipse cx="100" cy="115" rx="14" ry="22" fill="#8B7355" opacity="0.15" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M82 74 Q62 62 46 52" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 82 Q58 78 40 76" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M82 90 Q62 100 48 112" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 74 Q138 62 154 52" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120 82 Q142 78 160 76" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M118 90 Q138 100 152 112" stroke="#4A3A2A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function YusurikaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chironomid (non-biting midge) - mosquito-like, feathery antennae */}
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M92 54 Q80 36 72 22" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M78 32 Q72 28 68 30" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M80 36 Q74 34 70 36" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M82 40 Q76 38 72 40" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M76 28 Q70 24 66 26" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 54 Q120 36 128 22" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M122 32 Q128 28 132 30" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M120 36 Q126 34 130 36" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M118 40 Q124 38 128 40" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M124 28 Q130 24 134 26" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="60" rx="10" ry="8" fill="#8B7355" />
      <circle cx="95" cy="58" r="2.5" fill="#555" />
      <circle cx="105" cy="58" r="2.5" fill="#555" />
      {/* Thorax */}
      <ellipse cx="100" cy="78" rx="14" ry="11" fill="#9B8565" />
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="72" cy="78" rx="24" ry="7" fill="#C8C8C8" opacity="0.25" transform="rotate(-10 72 78)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="128" cy="78" rx="24" ry="7" fill="#C8C8C8" opacity="0.25" transform="rotate(10 128 78)" />
      </g>
      {/* Abdomen - slender */}
      <g className="pest-body">
        <ellipse cx="100" cy="110" rx="8" ry="24" fill="#A09070" />
        <path d="M92 100 Q100 98 108 100" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M92 108 Q100 106 108 108" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M92 116 Q100 114 108 116" stroke="#8B7355" strokeWidth="0.8" fill="none" />
      </g>
      {/* Legs - long, thin */}
      <g className="pest-leg-l">
        <path d="M88 74 Q64 58 44 44" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M86 82 Q60 78 38 78" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M88 88 Q66 102 48 122" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 74 Q136 58 156 44" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M114 82 Q140 78 162 78" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M112 88 Q134 102 152 122" stroke="#8B7355" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function KinokobaeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fungus gnat - tiny, dark, slender */}
      {/* Antennae - long, bead-like */}
      <g className="pest-antenna-l">
        <path d="M92 68 Q82 50 74 34" stroke="#2A2A2A" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 68 Q118 50 126 34" stroke="#2A2A2A" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="74" rx="9" ry="7" fill="#1A1A1A" />
      <circle cx="95" cy="72" r="2.5" fill="#333" />
      <circle cx="105" cy="72" r="2.5" fill="#333" />
      {/* Thorax */}
      <ellipse cx="100" cy="90" rx="11" ry="9" fill="#2A2A2A" />
      {/* Wings - relatively large for body */}
      <g className="pest-wing-l">
        <ellipse cx="74" cy="88" rx="22" ry="8" fill="#B8B8B8" opacity="0.25" transform="rotate(-12 74 88)" />
        <path d="M74 84 Q66 82 56 80" stroke="#999" strokeWidth="0.5" opacity="0.3" fill="none" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="126" cy="88" rx="22" ry="8" fill="#B8B8B8" opacity="0.25" transform="rotate(12 126 88)" />
        <path d="M126 84 Q134 82 144 80" stroke="#999" strokeWidth="0.5" opacity="0.3" fill="none" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="116" rx="8" ry="20" fill="#1E1E1E" />
      </g>
      {/* Legs - long, thin */}
      <g className="pest-leg-l">
        <path d="M90 86 Q72 76 58 68" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M90 92 Q70 90 52 90" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M92 100 Q74 110 60 124" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 86 Q128 76 142 68" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M110 92 Q130 90 148 90" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M108 100 Q126 110 140 124" stroke="#222" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function IedaniSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* House mite - tiny, oval, 8 legs */}
      {/* Body */}
      <g className="pest-body">
        <ellipse cx="100" cy="100" rx="28" ry="34" fill="#C4A882" />
        <ellipse cx="100" cy="100" rx="28" ry="34" fill="none" stroke="#A08860" strokeWidth="1.5" />
        {/* Dorsal plate */}
        <ellipse cx="100" cy="90" rx="18" ry="16" fill="#B09A72" opacity="0.5" />
      </g>
      {/* Head/Gnathosoma */}
      <ellipse cx="100" cy="62" rx="10" ry="8" fill="#B09A72" />
      {/* Chelicerae */}
      <path d="M96 56 L94 48" stroke="#8A7A5A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M104 56 L106 48" stroke="#8A7A5A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Palps */}
      <path d="M92 60 Q86 54 82 50" stroke="#8A7A5A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M108 60 Q114 54 118 50" stroke="#8A7A5A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* 4 pairs of legs */}
      <g className="pest-leg-l">
        <path d="M76 78 Q56 66 40 56" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M74 92 Q52 84 34 78" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M74 108 Q52 112 36 118" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M76 122 Q58 134 44 144" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M124 78 Q144 66 160 56" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M126 92 Q148 84 166 78" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M126 108 Q148 112 164 118" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M124 122 Q142 134 156 144" stroke="#A08860" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function JorougumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jorō spider - colorful, yellow and blue-black stripes */}
      {/* Web threads (background) */}
      <line x1="20" y1="20" x2="180" y2="180" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="180" y1="20" x2="20" y2="180" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="100" y1="10" x2="100" y2="190" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="10" y1="100" x2="190" y2="100" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      {/* Legs - 4 pairs, banded yellow/dark */}
      <g className="pest-leg-l">
        <path d="M82 82 Q50 50 26 28" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 90 Q46 78 20 68" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 104 Q46 114 22 128" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M82 112 Q54 140 32 164" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 82 Q150 50 174 28" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120 90 Q154 78 180 68" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120 104 Q154 114 178 128" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M118 112 Q146 140 168 164" stroke="#2A2A40" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Cephalothorax */}
      <ellipse cx="100" cy="78" rx="14" ry="10" fill="#2A2A40" />
      {/* Eyes */}
      <circle cx="95" cy="74" r="2" fill="#444" />
      <circle cx="105" cy="74" r="2" fill="#444" />
      <circle cx="92" cy="78" r="1.2" fill="#444" />
      <circle cx="108" cy="78" r="1.2" fill="#444" />
      {/* Abdomen - striped yellow and blue-black */}
      <g className="pest-body">
        <ellipse cx="100" cy="116" rx="20" ry="28" fill="#E8C840" />
        <path d="M80 102 Q100 98 120 102" stroke="#2A2A60" strokeWidth="4" fill="none" />
        <path d="M80 112 Q100 108 120 112" stroke="#2A2A60" strokeWidth="4" fill="none" />
        <path d="M82 122 Q100 118 118 122" stroke="#2A2A60" strokeWidth="4" fill="none" />
        <path d="M84 132 Q100 128 116 132" stroke="#2A2A60" strokeWidth="3" fill="none" />
        {/* Red marking */}
        <ellipse cx="100" cy="138" rx="6" ry="4" fill="#CC3333" opacity="0.7" />
      </g>
      {/* Spinnerets */}
      <path d="M97 143 L95 148" stroke="#2A2A40" strokeWidth="1" strokeLinecap="round" />
      <path d="M103 143 L105 148" stroke="#2A2A40" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function KuroariSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Black carpenter ant - large, shiny black */}
      {/* Antennae - elbowed */}
      <g className="pest-antenna-l">
        <path d="M90 52 L78 38 L64 28" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 52 L122 38 L136 28" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Head - large, round */}
      <ellipse cx="100" cy="58" rx="18" ry="14" fill="#1A1A1A" />
      <ellipse cx="100" cy="56" rx="12" ry="8" fill="#2A2A2A" opacity="0.3" />
      {/* Mandibles */}
      <path d="M88 66 Q84 72 80 72" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M112 66 Q116 72 120 72" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="92" cy="54" r="3" fill="#333" />
      <circle cx="108" cy="54" r="3" fill="#333" />
      {/* Petiole (narrow waist) */}
      <ellipse cx="100" cy="80" rx="6" ry="5" fill="#1A1A1A" />
      {/* Thorax */}
      <ellipse cx="100" cy="92" rx="16" ry="10" fill="#222" />
      {/* Abdomen - large, glossy */}
      <g className="pest-body">
        <ellipse cx="100" cy="126" rx="24" ry="28" fill="#1A1A1A" />
        <ellipse cx="92" cy="118" rx="10" ry="14" fill="#333" opacity="0.15" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M86 86 Q62 74 42 64" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M84 94 Q58 90 36 88" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M86 100 Q64 112 46 128" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 86 Q138 74 158 64" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M116 94 Q142 90 164 88" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M114 100 Q136 112 154 128" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function KatsuobushimushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Varied carpet beetle - small, round, mottled brown/white */}
      {/* Antennae - short, clubbed */}
      <g className="pest-antenna-l">
        <path d="M86 68 Q78 58 72 50" stroke="#5A4030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="72" cy="49" r="2.5" fill="#5A4030" />
      </g>
      <g className="pest-antenna-r">
        <path d="M114 68 Q122 58 128 50" stroke="#5A4030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="128" cy="49" r="2.5" fill="#5A4030" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="72" rx="12" ry="8" fill="#5A4030" />
      <circle cx="95" cy="70" r="2" fill="#333" />
      <circle cx="105" cy="70" r="2" fill="#333" />
      {/* Pronotum */}
      <ellipse cx="100" cy="86" rx="18" ry="8" fill="#6B5040" />
      {/* Elytra - round, mottled */}
      <g className="pest-body">
        <ellipse cx="100" cy="115" rx="26" ry="30" fill="#7B6050" />
        <line x1="100" y1="88" x2="100" y2="144" stroke="#6B5040" strokeWidth="1" opacity="0.4" />
        {/* Mottled pattern - white/tan patches */}
        <ellipse cx="88" cy="100" rx="6" ry="4" fill="#D4C4A0" opacity="0.5" transform="rotate(-15 88 100)" />
        <ellipse cx="114" cy="98" rx="5" ry="3.5" fill="#D4C4A0" opacity="0.5" transform="rotate(15 114 98)" />
        <ellipse cx="92" cy="118" rx="5" ry="3" fill="#D4C4A0" opacity="0.4" transform="rotate(-10 92 118)" />
        <ellipse cx="110" cy="120" rx="5" ry="3" fill="#D4C4A0" opacity="0.4" transform="rotate(10 110 120)" />
        <ellipse cx="100" cy="132" rx="6" ry="3" fill="#D4C4A0" opacity="0.35" />
        <ellipse cx="86" cy="108" rx="3" ry="4" fill="#E8D8B8" opacity="0.3" />
        <ellipse cx="116" cy="110" rx="3" ry="4" fill="#E8D8B8" opacity="0.3" />
      </g>
      {/* Legs - short */}
      <g className="pest-leg-l">
        <path d="M76 96 Q66 90 58 84" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M74 110 Q62 108 52 106" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M76 124 Q64 130 54 136" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M124 96 Q134 90 142 84" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M126 110 Q138 108 148 106" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M124 124 Q136 130 146 136" stroke="#5A4030" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function HanekakushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rove beetle (Paederus) - elongated, blue-black head, orange thorax/abdomen, black tip */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 38 Q80 24 72 14" stroke="#1A1A30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 38 Q120 24 128 14" stroke="#1A1A30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Head - dark blue-black */}
      <ellipse cx="100" cy="44" rx="14" ry="10" fill="#1A1A3A" />
      <circle cx="94" cy="42" r="2.5" fill="#333" />
      <circle cx="106" cy="42" r="2.5" fill="#333" />
      {/* Mandibles */}
      <path d="M93 50 L90 54" stroke="#1A1A3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M107 50 L110 54" stroke="#1A1A3A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Thorax - orange */}
      <ellipse cx="100" cy="64" rx="14" ry="10" fill="#E08030" />
      {/* Short elytra - blue-black */}
      <rect x="86" y="74" width="28" height="14" rx="3" fill="#1A1A3A" />
      <line x1="100" y1="74" x2="100" y2="88" stroke="#101028" strokeWidth="0.8" opacity="0.4" />
      {/* Abdomen segments - orange then black tip */}
      <g className="pest-body">
        <ellipse cx="100" cy="98" rx="12" ry="8" fill="#E08030" />
        <ellipse cx="100" cy="112" rx="12" ry="8" fill="#E08030" />
        <ellipse cx="100" cy="126" rx="12" ry="8" fill="#E08030" />
        <ellipse cx="100" cy="140" rx="11" ry="7" fill="#1A1A3A" />
        <ellipse cx="100" cy="152" rx="9" ry="6" fill="#1A1A3A" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M88 60 Q68 50 52 44" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M86 70 Q64 66 46 64" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M88 82 Q68 88 52 96" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 60 Q132 50 148 44" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M114 70 Q136 66 154 64" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M112 82 Q132 88 148 96" stroke="#C07028" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function KoganemushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kogane-body" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#7BC060" />
          <stop offset="50%" stopColor="#4A8C30" />
          <stop offset="100%" stopColor="#2A5A18" />
        </radialGradient>
        <radialGradient id="kogane-sheen" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Antennae - lamellate (fan-shaped tips) */}
      <g className="pest-antenna-l">
        <path d="M86 60 Q78 48 72 40" stroke="#3A5A20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M72 40 L68 36" stroke="#3A5A20" strokeWidth="2" strokeLinecap="round" />
        <path d="M72 40 L70 42" stroke="#3A5A20" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M114 60 Q122 48 128 40" stroke="#3A5A20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M128 40 L132 36" stroke="#3A5A20" strokeWidth="2" strokeLinecap="round" />
        <path d="M128 40 L130 42" stroke="#3A5A20" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="66" rx="14" ry="10" fill="#3A6A20" />
      <circle cx="93" cy="64" r="3" fill="#2A4A18" />
      <circle cx="107" cy="64" r="3" fill="#2A4A18" />
      {/* Pronotum */}
      <ellipse cx="100" cy="82" rx="22" ry="10" fill="url(#kogane-body)" />
      {/* Elytra - glossy green */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="28" ry="34" fill="url(#kogane-body)" />
        <line x1="100" y1="86" x2="100" y2="150" stroke="#2A5A18" strokeWidth="1.2" opacity="0.4" />
        {/* Metallic sheen */}
        <ellipse cx="90" cy="108" rx="14" ry="20" fill="url(#kogane-sheen)" />
        {/* Wing lines */}
        <path d="M100 90 Q88 108 82 130" stroke="#2A5A18" strokeWidth="0.6" opacity="0.2" fill="none" />
        <path d="M100 90 Q112 108 118 130" stroke="#2A5A18" strokeWidth="0.6" opacity="0.2" fill="none" />
      </g>
      {/* Legs - strong, with spines */}
      <g className="pest-leg-l">
        <path d="M76 82 Q56 72 40 62" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M74 96 Q52 92 34 90" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M76 110 Q56 120 40 134" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M124 82 Q144 72 160 62" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M126 96 Q148 92 166 90" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M124 110 Q144 120 160 134" stroke="#3A5A20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function UnkaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brown planthopper - small, wedge-shaped */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 62 Q82 48 76 38" stroke="#7A6A4A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 62 Q118 48 124 38" stroke="#7A6A4A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      {/* Head - blunt, wedge */}
      <ellipse cx="100" cy="68" rx="12" ry="8" fill="#8B7A5A" />
      <circle cx="94" cy="66" r="2.5" fill="#555" />
      <circle cx="106" cy="66" r="2.5" fill="#555" />
      {/* Thorax */}
      <ellipse cx="100" cy="84" rx="16" ry="10" fill="#9B8A6A" />
      {/* Wings - long, transparent, folded roof-like */}
      <g className="pest-wing-l">
        <path d="M86 80 Q60 100 46 140" stroke="#C8C0A0" strokeWidth="1" fill="#D8D0B8" fillOpacity="0.2" strokeLinecap="round" />
        <path d="M86 80 Q72 98 66 130" stroke="#C8C0A0" strokeWidth="0.5" fill="none" />
      </g>
      <g className="pest-wing-r">
        <path d="M114 80 Q140 100 154 140" stroke="#C8C0A0" strokeWidth="1" fill="#D8D0B8" fillOpacity="0.2" strokeLinecap="round" />
        <path d="M114 80 Q128 98 134 130" stroke="#C8C0A0" strokeWidth="0.5" fill="none" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="108" rx="14" ry="20" fill="#8B7A5A" />
        <path d="M86 100 Q100 98 114 100" stroke="#7A6A4A" strokeWidth="0.8" fill="none" />
        <path d="M86 108 Q100 106 114 108" stroke="#7A6A4A" strokeWidth="0.8" fill="none" />
      </g>
      {/* Legs - jumping hind legs longer */}
      <g className="pest-leg-l">
        <path d="M86 80 Q70 72 58 66" stroke="#7A6A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M86 88 Q68 86 52 84" stroke="#7A6A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M86 96 Q66 110 48 132" stroke="#7A6A4A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 80 Q130 72 142 66" stroke="#7A6A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 88 Q132 86 148 84" stroke="#7A6A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 96 Q134 110 152 132" stroke="#7A6A4A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function SashigameSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Assassin bug - dark brown, elongated, raptorial forelegs */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M88 42 Q76 28 66 16" stroke="#3A2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 42 Q124 28 134 16" stroke="#3A2A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Head - narrow, elongated */}
      <ellipse cx="100" cy="48" rx="12" ry="10" fill="#3A2A1A" />
      <circle cx="94" cy="44" r="3" fill="#555" />
      <circle cx="106" cy="44" r="3" fill="#555" />
      {/* Rostrum (beak) */}
      <path d="M100 56 L100 68" stroke="#2A1A0A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pronotum - wider, shield-like */}
      <path d="M74 72 Q100 62 126 72 Q128 78 126 82 Q100 76 74 82 Q72 78 74 72Z" fill="#4A3520" />
      {/* Scutellum */}
      <path d="M90 82 L100 92 L110 82Z" fill="#3A2A1A" />
      {/* Abdomen - oval, dark with edges visible */}
      <g className="pest-body">
        <ellipse cx="100" cy="120" rx="22" ry="30" fill="#4A3520" />
        <path d="M78 110 Q100 106 122 110" stroke="#3A2A1A" strokeWidth="1" fill="none" />
        <path d="M78 120 Q100 116 122 120" stroke="#3A2A1A" strokeWidth="1" fill="none" />
        <path d="M78 130 Q100 126 122 130" stroke="#3A2A1A" strokeWidth="1" fill="none" />
        {/* Connexivum - exposed edges */}
        <path d="M78 108 Q76 120 78 132" stroke="#6B5A40" strokeWidth="2" fill="none" />
        <path d="M122 108 Q124 120 122 132" stroke="#6B5A40" strokeWidth="2" fill="none" />
      </g>
      {/* Forelegs - raptorial */}
      <g className="pest-leg-l">
        <path d="M80 72 Q58 58 44 50 Q40 52 42 56 Q52 60 56 66" stroke="#3A2A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M78 80 Q56 78 38 78" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 88 Q60 100 44 118" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M120 72 Q142 58 156 50 Q160 52 158 56 Q148 60 144 66" stroke="#3A2A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M122 80 Q144 78 162 78" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120 88 Q140 100 156 118" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function HasamimushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Earwig - elongated, dark brown, prominent cerci (pincers) */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 34 Q78 20 68 10" stroke="#3A2A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 34 Q122 20 132 10" stroke="#3A2A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="40" rx="14" ry="10" fill="#4A3828" />
      <circle cx="94" cy="38" r="2.5" fill="#333" />
      <circle cx="106" cy="38" r="2.5" fill="#333" />
      {/* Mandibles */}
      <path d="M92 46 L88 50" stroke="#3A2A18" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M108 46 L112 50" stroke="#3A2A18" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pronotum */}
      <ellipse cx="100" cy="56" rx="16" ry="8" fill="#5A4838" />
      {/* Elytra (short) */}
      <rect x="84" y="64" width="32" height="16" rx="4" fill="#4A3828" />
      <line x1="100" y1="64" x2="100" y2="80" stroke="#3A2A18" strokeWidth="0.8" opacity="0.4" />
      {/* Abdomen segments */}
      <g className="pest-body">
        <ellipse cx="100" cy="88" rx="14" ry="8" fill="#5A4838" />
        <ellipse cx="100" cy="100" rx="14" ry="8" fill="#4A3828" />
        <ellipse cx="100" cy="112" rx="13" ry="7" fill="#5A4838" />
        <ellipse cx="100" cy="122" rx="12" ry="6" fill="#4A3828" />
        <ellipse cx="100" cy="132" rx="11" ry="6" fill="#5A4838" />
        <ellipse cx="100" cy="140" rx="10" ry="5" fill="#4A3828" />
      </g>
      {/* Cerci (pincers) - prominent curved */}
      <path d="M90 144 Q78 152 74 164 Q72 170 76 174 Q82 170 88 160 Q92 154 94 148" stroke="#3A2A18" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M110 144 Q122 152 126 164 Q128 170 124 174 Q118 170 112 160 Q108 154 106 148" stroke="#3A2A18" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M86 58 Q68 50 54 44" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 70 Q64 68 48 66" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M86 82 Q68 88 54 96" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M114 58 Q132 50 146 44" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 70 Q136 68 152 66" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M114 82 Q132 88 146 96" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function WarajimushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Woodlouse (flat, cannot roll up like pillbug) */}
      {/* Body - more flattened than dangomushi */}
      <g className="pest-body">
        <ellipse cx="100" cy="100" rx="36" ry="42" fill="#7A7A6A" />
        <ellipse cx="100" cy="100" rx="36" ry="42" fill="none" stroke="#666" strokeWidth="1.5" />
        {/* Segments */}
        <path d="M66 72 Q100 64 134 72" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M64 84 Q100 76 136 84" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M64 96 Q100 88 136 96" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M64 108 Q100 100 136 108" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M66 120 Q100 112 134 120" stroke="#666" strokeWidth="1.5" fill="none" />
        <path d="M68 130 Q100 124 132 130" stroke="#666" strokeWidth="1.5" fill="none" />
        {/* Slight texture */}
        <ellipse cx="88" cy="92" rx="8" ry="12" fill="#8A8A7A" opacity="0.2" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="56" rx="14" ry="7" fill="#6A6A5A" />
      <circle cx="93" cy="54" r="2" fill="#444" />
      <circle cx="107" cy="54" r="2" fill="#444" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M88 50 Q76 38 66 28" stroke="#7A7A6A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M66 28 L60 24" stroke="#7A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 50 Q124 38 134 28" stroke="#7A7A6A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M134 28 L140 24" stroke="#7A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs - 7 pairs */}
      <g className="pest-leg-l">
        <path d="M66 72 Q56 68 48 64" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M64 84 Q52 80 42 76" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M64 96 Q50 92 38 88" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M64 108 Q50 106 38 104" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M66 120 Q52 118 40 118" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 130 Q56 130 44 130" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M72 138 Q60 140 48 142" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M134 72 Q144 68 152 64" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M136 84 Q148 80 158 76" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M136 96 Q150 92 162 88" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M136 108 Q150 106 162 104" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M134 120 Q148 118 160 118" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M132 130 Q144 130 156 130" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M128 138 Q140 140 152 142" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Uropods (tail) */}
      <path d="M90 142 L86 150" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M110 142 L114 150" stroke="#6A6A5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function NoshimemadarameigaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Indian meal moth - distinctive two-toned wings: gray base, reddish-brown outer */}
      {/* Antennae - thin, thread-like */}
      <g className="pest-antenna-l">
        <path d="M94 72 Q82 50 72 32" stroke="#8A7A6A" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 72 Q118 50 128 32" stroke="#8A7A6A" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="76" rx="8" ry="6" fill="#8A7A6A" />
      <circle cx="96" cy="74" r="2" fill="#444" />
      <circle cx="104" cy="74" r="2" fill="#444" />
      {/* Thorax */}
      <ellipse cx="100" cy="88" rx="10" ry="7" fill="#9A8A7A" />
      {/* Wings - two-toned */}
      <g className="pest-wing-l">
        {/* Inner part - grayish white */}
        <path d="M90 85 Q60 78 38 82 Q34 84 36 90 Q44 92 60 90 L90 95Z" fill="#C8C0B0" />
        {/* Outer part - reddish brown */}
        <path d="M90 95 Q60 90 36 90 Q30 92 28 100 Q32 118 48 130 Q64 138 82 136 Q88 130 90 120Z" fill="#A04830" />
        <path d="M90 95 Q70 96 52 104" stroke="#884030" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M90 105 Q72 108 56 116" stroke="#884030" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      <g className="pest-wing-r">
        {/* Inner part - grayish white */}
        <path d="M110 85 Q140 78 162 82 Q166 84 164 90 Q156 92 140 90 L110 95Z" fill="#C8C0B0" />
        {/* Outer part - reddish brown */}
        <path d="M110 95 Q140 90 164 90 Q170 92 172 100 Q168 118 152 130 Q136 138 118 136 Q112 130 110 120Z" fill="#A04830" />
        <path d="M110 95 Q130 96 148 104" stroke="#884030" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M110 105 Q128 108 144 116" stroke="#884030" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
      {/* Abdomen (mostly hidden by wings) */}
      <g className="pest-body">
        <ellipse cx="100" cy="108" rx="8" ry="16" fill="#8A7A6A" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M92 84 Q80 78 70 72" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M90 92 Q78 90 66 88" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M92 98 Q80 104 70 112" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M108 84 Q120 78 130 72" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M110 92 Q122 90 134 88" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M108 98 Q120 104 130 112" stroke="#8A7A6A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function MaimaigaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gypsy moth (male) - brown/gray, feathery antennae, broad wings */}
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M92 62 Q80 44 70 28" stroke="#6B5A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M78 40 Q72 38 68 40" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M80 44 Q74 42 70 44" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M76 36 Q70 34 66 36" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M74 32 Q68 30 64 32" stroke="#6B5A4A" strokeWidth="1" fill="none" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 62 Q120 44 130 28" stroke="#6B5A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M122 40 Q128 38 132 40" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M120 44 Q126 42 130 44" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M124 36 Q130 34 134 36" stroke="#6B5A4A" strokeWidth="1" fill="none" />
        <path d="M126 32 Q132 30 136 32" stroke="#6B5A4A" strokeWidth="1" fill="none" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="68" rx="10" ry="8" fill="#6B5A4A" />
      <circle cx="95" cy="66" r="2.5" fill="#444" />
      <circle cx="105" cy="66" r="2.5" fill="#444" />
      {/* Thorax - furry */}
      <ellipse cx="100" cy="82" rx="12" ry="8" fill="#7B6A5A" />
      {/* Wings - broad, rounded */}
      <g className="pest-wing-l">
        <path d="M88 80 Q50 60 28 72 Q18 82 22 100 Q28 124 48 138 Q68 148 86 140 Q90 130 88 110Z" fill="#8B7A6A" />
        {/* Wing pattern - zigzag lines */}
        <path d="M86 88 Q66 80 46 84" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M88 100 Q64 94 40 98" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M88 112 Q64 108 42 112" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M86 124 Q66 120 48 126" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        {/* Spots */}
        <circle cx="60" cy="96" r="3" fill="#5A4A3A" opacity="0.4" />
        <circle cx="54" cy="114" r="2.5" fill="#5A4A3A" opacity="0.4" />
      </g>
      <g className="pest-wing-r">
        <path d="M112 80 Q150 60 172 72 Q182 82 178 100 Q172 124 152 138 Q132 148 114 140 Q110 130 112 110Z" fill="#8B7A6A" />
        <path d="M114 88 Q134 80 154 84" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M112 100 Q136 94 160 98" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M112 112 Q136 108 158 112" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <path d="M114 124 Q134 120 152 126" stroke="#6B5A4A" strokeWidth="1.2" fill="none" />
        <circle cx="140" cy="96" r="3" fill="#5A4A3A" opacity="0.4" />
        <circle cx="146" cy="114" r="2.5" fill="#5A4A3A" opacity="0.4" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="110" rx="10" ry="22" fill="#7B6A5A" />
      </g>
    </svg>
  );
}

function IragaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Slug moth / Limacodid - stout, furry, green-brown, rounded wings */}
      {/* Antennae - short, comb-like */}
      <g className="pest-antenna-l">
        <path d="M92 66 Q86 54 80 44" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M84 50 Q80 48 78 50" stroke="#8B7A40" strokeWidth="1" fill="none" />
        <path d="M82 46 Q78 44 76 46" stroke="#8B7A40" strokeWidth="1" fill="none" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 66 Q114 54 120 44" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M116 50 Q120 48 122 50" stroke="#8B7A40" strokeWidth="1" fill="none" />
        <path d="M118 46 Q122 44 124 46" stroke="#8B7A40" strokeWidth="1" fill="none" />
      </g>
      {/* Head - small, tucked under thorax */}
      <ellipse cx="100" cy="72" rx="8" ry="6" fill="#8B7A40" />
      <circle cx="96" cy="70" r="1.5" fill="#555" />
      <circle cx="104" cy="70" r="1.5" fill="#555" />
      {/* Thorax - very furry/fluffy */}
      <ellipse cx="100" cy="84" rx="16" ry="10" fill="#A09040" />
      <ellipse cx="100" cy="82" rx="12" ry="6" fill="#B0A050" opacity="0.4" />
      {/* Wings - rounded, tent-like */}
      <g className="pest-wing-l">
        <path d="M86 82 Q46 78 24 92 Q16 102 20 118 Q28 140 52 148 Q72 152 86 142 Q90 130 88 110Z" fill="#A09848" />
        {/* Subtle brown line across wing */}
        <path d="M86 106 Q60 100 32 108" stroke="#8B8038" strokeWidth="1.5" fill="none" />
        <path d="M84 126 Q62 122 38 128" stroke="#8B8038" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Green tint area */}
        <ellipse cx="58" cy="110" rx="16" ry="14" fill="#90A840" opacity="0.15" />
      </g>
      <g className="pest-wing-r">
        <path d="M114 82 Q154 78 176 92 Q184 102 180 118 Q172 140 148 148 Q128 152 114 142 Q110 130 112 110Z" fill="#A09848" />
        <path d="M114 106 Q140 100 168 108" stroke="#8B8038" strokeWidth="1.5" fill="none" />
        <path d="M116 126 Q138 122 162 128" stroke="#8B8038" strokeWidth="1" fill="none" opacity="0.5" />
        <ellipse cx="142" cy="110" rx="16" ry="14" fill="#90A840" opacity="0.15" />
      </g>
      {/* Abdomen (mostly hidden) */}
      <g className="pest-body">
        <ellipse cx="100" cy="112" rx="10" ry="20" fill="#8B7A40" />
      </g>
      {/* Legs - short, fuzzy */}
      <g className="pest-leg-l">
        <path d="M90 88 Q80 84 72 80" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 94 Q78 92 68 90" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 88 Q120 84 128 80" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 94 Q122 92 132 90" stroke="#8B7A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function TsumaakasuzumebachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Asian hornet - dark body, orange-tipped abdomen, yellow legs */}
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 40 Q78 24 68 14" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 40 Q122 24 132 14" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Head - dark */}
      <ellipse cx="100" cy="46" rx="16" ry="12" fill="#2A2A2A" />
      {/* Eyes */}
      <ellipse cx="91" cy="44" rx="4" ry="3.5" fill="#444" />
      <ellipse cx="109" cy="44" rx="4" ry="3.5" fill="#444" />
      {/* Mandibles */}
      <path d="M92 54 Q88 58 84 58" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
      <path d="M108 54 Q112 58 116 58" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round" />
      {/* Orange face band */}
      <path d="M86 50 Q100 54 114 50" stroke="#E08030" strokeWidth="2.5" fill="none" />
      {/* Thorax - dark */}
      <ellipse cx="100" cy="68" rx="18" ry="12" fill="#1A1A1A" />
      {/* Wings */}
      <g className="pest-wing-l">
        <ellipse cx="66" cy="68" rx="28" ry="9" fill="#C8B890" opacity="0.25" transform="rotate(-10 66 68)" />
      </g>
      <g className="pest-wing-r">
        <ellipse cx="134" cy="68" rx="28" ry="9" fill="#C8B890" opacity="0.25" transform="rotate(10 134 68)" />
      </g>
      {/* Petiole */}
      <ellipse cx="100" cy="84" rx="8" ry="5" fill="#1A1A1A" />
      {/* Abdomen - dark with orange/yellow tip */}
      <g className="pest-body">
        <ellipse cx="100" cy="114" rx="20" ry="28" fill="#1A1A1A" />
        {/* Dark brown bands */}
        <path d="M80 100 Q100 96 120 100" stroke="#3A2A1A" strokeWidth="2" fill="none" />
        <path d="M80 110 Q100 106 120 110" stroke="#3A2A1A" strokeWidth="2" fill="none" />
        {/* Yellow band */}
        <path d="M82 120 Q100 116 118 120" stroke="#E8C040" strokeWidth="3" fill="none" />
        {/* Orange-red tip */}
        <ellipse cx="100" cy="136" rx="14" ry="8" fill="#D06030" />
      </g>
      {/* Stinger */}
      <line x1="100" y1="142" x2="100" y2="150" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs - yellow tips */}
      <g className="pest-leg-l">
        <path d="M84 64 Q62 52 44 42" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M44 42 L40 38" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
        <path d="M82 72 Q58 68 38 66" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M38 66 L32 64" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
        <path d="M84 80 Q64 90 48 106" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M48 106 L44 112" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M116 64 Q138 52 156 42" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M156 42 L160 38" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
        <path d="M118 72 Q142 68 162 66" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M162 66 L168 64" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
        <path d="M116 80 Q136 90 152 106" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M152 106 L156 112" stroke="#E8C040" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ShimiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shimi-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#C0C0C8" />
          <stop offset="100%" stopColor="#8A8A96" />
        </radialGradient>
        <radialGradient id="shimi-sheen" cx="35%" cy="30%" r="45%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shimi-tail-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9A9AA6" />
          <stop offset="100%" stopColor="#B8B8C4" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Antennae (long, curved) */}
      <g className="pest-antenna-l">
        <path d="M82 56 Q60 30 40 14" stroke="#8A8A96" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="14" r="1.5" fill="#8A8A96" />
      </g>
      <g className="pest-antenna-r">
        <path d="M118 56 Q140 30 160 14" stroke="#8A8A96" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="160" cy="14" r="1.5" fill="#8A8A96" />
      </g>

      {/* Legs – tiny, 3 pairs */}
      <g className="pest-leg-l">
        <path d="M72 78 Q58 72 48 66" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 95 Q54 90 44 85" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M72 112 Q58 116 46 120" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 78 Q142 72 152 66" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M132 95 Q146 90 156 85" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M128 112 Q142 116 154 120" stroke="#9A9AA6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Body – teardrop / carrot shape, wide head tapering to tail */}
      <g className="pest-undulate">
        {/* Main body */}
        <path
          d="M100 50 Q130 60 134 80 Q136 100 130 120 Q124 140 112 155 Q106 164 100 170 Q94 164 88 155 Q76 140 70 120 Q64 100 66 80 Q70 60 100 50Z"
          fill="url(#shimi-body)"
        />
        {/* Silver sheen overlay */}
        <path
          d="M100 50 Q130 60 134 80 Q136 100 130 120 Q124 140 112 155 Q106 164 100 170 Q94 164 88 155 Q76 140 70 120 Q64 100 66 80 Q70 60 100 50Z"
          fill="url(#shimi-sheen)"
        />
        {/* Scale pattern – horizontal lines */}
        <path d="M74 75 Q100 78 126 75" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M70 88 Q100 92 130 88" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M68 101 Q100 106 132 101" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M72 114 Q100 119 128 114" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M78 127 Q100 132 122 127" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M84 140 Q100 144 116 140" stroke="#A8A8B4" strokeWidth="0.6" fill="none" opacity="0.5" />
        {/* Center line */}
        <line x1="100" y1="55" x2="100" y2="168" stroke="#7A7A88" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* Head / eyes */}
      <circle cx="90" cy="58" r="3.5" fill="#2C2C34" />
      <circle cx="110" cy="58" r="3.5" fill="#2C2C34" />
      <circle cx="91" cy="57" r="1.2" fill="white" opacity="0.7" />
      <circle cx="111" cy="57" r="1.2" fill="white" opacity="0.7" />

      {/* Three tail filaments (cerci + terminal filament) */}
      <g className="pest-antenna-l">
        <path d="M94 170 Q80 186 68 196" stroke="url(#shimi-tail-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-body">
        <path d="M100 172 Q100 188 100 198" stroke="url(#shimi-tail-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 170 Q120 186 132 196" stroke="url(#shimi-tail-g)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Tiny silver sparkle particles */}
      <circle cx="60" cy="90" r="1" fill="white" opacity="0.6" />
      <circle cx="142" cy="75" r="0.8" fill="white" opacity="0.5" />
      <circle cx="55" cy="115" r="0.7" fill="white" opacity="0.4" />
      <circle cx="148" cy="108" r="0.9" fill="white" opacity="0.5" />
    </svg>
  );
}

/* ==============================
   追加種 SVG
   ============================== */

function MukadeSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mukade-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B2500" />
          <stop offset="100%" stopColor="#5A1A00" />
        </linearGradient>
      </defs>
      {/* Body segments */}
      <g className="pest-body">
      {[30,45,60,75,90,105,120,135,150,165].map((y,i) => (
        <g key={i}>
          <ellipse cx="100" cy={y} rx="18" ry="8" fill="url(#mukade-body)" stroke="#4A1200" strokeWidth="0.5" />
        </g>
      ))}
      </g>
      <g className="pest-leg-l">
      {[30,45,60,75,90,105,120,135,150,165].map((y,i) => (
          <line key={i} x1="82" y1={y} x2={60-i*2} y2={y-8} stroke="#7B2000" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      </g>
      <g className="pest-leg-r">
      {[30,45,60,75,90,105,120,135,150,165].map((y,i) => (
          <line key={i} x1="118" y1={y} x2={140+i*2} y2={y-8} stroke="#7B2000" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      </g>
      {/* Head */}
      <ellipse cx="100" cy="22" rx="14" ry="10" fill="#6B1800" />
      <circle cx="94" cy="20" r="2.5" fill="#FF6633" />
      <circle cx="106" cy="20" r="2.5" fill="#FF6633" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M90 14 Q78 4 70 2" stroke="#6B1800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M110 14 Q122 4 130 2" stroke="#6B1800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Forcipules (毒肢) */}
      <path d="M92 28 Q82 34 78 30" stroke="#FF4400" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M108 28 Q118 34 122 30" stroke="#FF4400" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function HaetoriSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="haetori-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#222" />
        </radialGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 100 Q50 80 35 70" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M70 110 Q45 100 28 95" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M72 120 Q50 130 35 140" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M75 130 Q55 145 40 158" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 100 Q150 80 165 70" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M130 110 Q155 100 172 95" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M128 120 Q150 130 165 140" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M125 130 Q145 145 160 158" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen */}
      <ellipse cx="100" cy="125" rx="28" ry="25" fill="url(#haetori-body)" />
      <path d="M80 118 Q100 112 120 118" stroke="#666" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Cephalothorax */}
      <rect x="72" y="60" rx="18" ry="18" width="56" height="48" fill="#333" />
      {/* Large front eyes */}
      <circle cx="88" cy="72" r="12" fill="#111" stroke="#444" strokeWidth="1" />
      <circle cx="112" cy="72" r="12" fill="#111" stroke="#444" strokeWidth="1" />
      <circle cx="85" cy="69" r="5" fill="#4CAF50" />
      <circle cx="109" cy="69" r="5" fill="#4CAF50" />
      <circle cx="83" cy="67" r="2" fill="white" opacity="0.8" />
      <circle cx="107" cy="67" r="2" fill="white" opacity="0.8" />
      {/* Small secondary eyes */}
      <circle cx="76" cy="64" r="4" fill="#222" />
      <circle cx="124" cy="64" r="4" fill="#222" />
      {/* Pedipalps */}
      <ellipse cx="86" cy="90" rx="6" ry="4" fill="#555" />
      <ellipse cx="114" cy="90" rx="6" ry="4" fill="#555" />
    </svg>
  );
}

function TentouSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tentou-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#D4A050" />
          <stop offset="100%" stopColor="#A07030" />
        </radialGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M70 100 Q50 88 35 82" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 115 Q45 112 30 108" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M72 135 Q55 148 40 155" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M130 100 Q150 88 165 82" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M132 115 Q155 112 170 108" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M128 135 Q145 148 160 155" stroke="#5A3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Body dome */}
      <ellipse cx="100" cy="115" rx="40" ry="38" fill="url(#tentou-body)" />
      <line x1="100" y1="78" x2="100" y2="152" stroke="#5A3A20" strokeWidth="1" opacity="0.6" />
      {/* Spots - 28 spots pattern */}
      <circle cx="85" cy="95" r="5" fill="#222" />
      <circle cx="115" cy="95" r="5" fill="#222" />
      <circle cx="78" cy="112" r="5" fill="#222" />
      <circle cx="122" cy="112" r="5" fill="#222" />
      <circle cx="82" cy="130" r="5" fill="#222" />
      <circle cx="118" cy="130" r="5" fill="#222" />
      <circle cx="92" cy="142" r="4" fill="#222" />
      <circle cx="108" cy="142" r="4" fill="#222" />
      {/* Pronotum */}
      <ellipse cx="100" cy="78" rx="22" ry="12" fill="#5A3A20" />
      {/* Head */}
      <ellipse cx="100" cy="66" rx="14" ry="10" fill="#3A2A15" />
      <circle cx="94" cy="64" r="3" fill="#555" />
      <circle cx="106" cy="64" r="3" fill="#555" />
      {/* Antennae */}
      <path d="M92 58 Q84 48 80 44" stroke="#3A2A15" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M108 58 Q116 48 120 44" stroke="#3A2A15" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function KamikiriSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kamikiri-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
      </defs>
      {/* Very long antennae */}
      <g className="pest-antenna-l">
        <path d="M88 55 Q60 20 20 8" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 55 Q140 20 180 8" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 90 Q50 78 32 70" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M70 110 Q45 105 25 100" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M72 140 Q52 155 35 165" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 90 Q150 78 168 70" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M130 110 Q155 105 175 100" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M128 140 Q148 155 165 165" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="75" rx="22" ry="14" fill="#333" />
      {/* Elytra */}
      <rect x="74" y="85" rx="8" width="52" height="80" fill="url(#kamikiri-body)" />
      <line x1="100" y1="85" x2="100" y2="165" stroke="#444" strokeWidth="0.8" opacity="0.4" />
      {/* Head */}
      <ellipse cx="100" cy="58" rx="16" ry="12" fill="#222" />
      {/* Eyes */}
      <circle cx="90" cy="56" r="4" fill="#555" />
      <circle cx="110" cy="56" r="4" fill="#555" />
      {/* Mandibles */}
      <path d="M94 68 Q90 76 86 74" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M106 68 Q110 76 114 74" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function KiirosuzuSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kiiro-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="72" cy="100" rx="28" ry="14" fill="#D4A84088" transform="rotate(-15 72 100)" />
      <ellipse cx="128" cy="100" rx="28" ry="14" fill="#D4A84088" transform="rotate(15 128 100)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M82 115 Q60 125 45 135" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 130 Q58 145 42 158" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M84 100 Q62 95 48 88" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 115 Q140 125 155 135" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M120 130 Q142 145 158 158" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M116 100 Q138 95 152 88" stroke="#AA8800" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen with stripes */}
      <ellipse cx="100" cy="130" rx="22" ry="30" fill="url(#kiiro-body)" />
      <path d="M80 120 Q100 116 120 120" stroke="#222" strokeWidth="3" fill="none" />
      <path d="M78 130 Q100 126 122 130" stroke="#222" strokeWidth="3" fill="none" />
      <path d="M80 140 Q100 136 120 140" stroke="#222" strokeWidth="3" fill="none" />
      {/* Thorax */}
      <ellipse cx="100" cy="95" rx="18" ry="14" fill="#222" />
      {/* Head */}
      <ellipse cx="100" cy="72" rx="14" ry="11" fill="#FFD700" />
      <circle cx="93" cy="70" r="3.5" fill="#222" />
      <circle cx="107" cy="70" r="3.5" fill="#222" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M92 62 Q82 45 78 38" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 62 Q118 45 122 38" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Stinger */}
      <g className="pest-body">
        <path d="M100 158 L100 168" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function MitsubachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mitsu-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#E8B030" />
          <stop offset="100%" stopColor="#C08820" />
        </radialGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="68" cy="95" rx="26" ry="12" fill="#D4D4FF44" stroke="#AAA" strokeWidth="0.5" transform="rotate(-10 68 95)" />
      <ellipse cx="132" cy="95" rx="26" ry="12" fill="#D4D4FF44" stroke="#AAA" strokeWidth="0.5" transform="rotate(10 132 95)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M82 120 Q65 135 55 148" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M85 108 Q65 108 50 105" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 120 Q135 135 145 148" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M115 108 Q135 108 150 105" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Fuzzy abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="125" rx="24" ry="28" fill="url(#mitsu-body)" />
        <path d="M78 115 Q100 111 122 115" stroke="#6B4400" strokeWidth="2.5" fill="none" />
        <path d="M76 125 Q100 121 124 125" stroke="#6B4400" strokeWidth="2.5" fill="none" />
        <path d="M78 135 Q100 131 122 135" stroke="#6B4400" strokeWidth="2.5" fill="none" />
        <ellipse cx="100" cy="125" rx="24" ry="28" fill="none" stroke="#D4A030" strokeWidth="0.5" strokeDasharray="2 2" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="90" rx="16" ry="14" fill="#8B6914" />
      {/* Head */}
      <ellipse cx="100" cy="68" rx="12" ry="10" fill="#8B6914" />
      <circle cx="94" cy="66" r="3" fill="#222" />
      <circle cx="106" cy="66" r="3" fill="#222" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M94 58 Q86 44 84 38" stroke="#6B4400" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 58 Q114 44 116 38" stroke="#6B4400" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function NamekujiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nameku-body" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5C4A32" />
        </radialGradient>
        <radialGradient id="nameku-slime" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#AACC88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#88AA66" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      {/* Slime trail */}
      <path d="M30 160 Q60 155 100 148 Q140 140 170 145" stroke="#AACC88" strokeWidth="8" fill="none" opacity="0.2" strokeLinecap="round" />
      {/* Body */}
      <g className="pest-body">
      <path d="M55 120 Q55 90 75 82 Q100 74 130 80 Q155 86 155 110 Q155 138 130 142 Q100 148 70 144 Q55 140 55 120Z" fill="url(#nameku-body)" />
      {/* Mantle (外套膜) */}
      <ellipse cx="90" cy="100" rx="22" ry="16" fill="#7A6445" opacity="0.6" />
      {/* Texture */}
      <path d="M75 110 Q85 108 95 110" stroke="#6B5A40" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M100 115 Q115 112 130 115" stroke="#6B5A40" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M80 125 Q100 122 120 125" stroke="#6B5A40" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Head area */}
      <ellipse cx="148" cy="105" rx="12" ry="14" fill="#7A6445" />
      {/* Lower tentacles */}
      <path d="M150 108 Q156 112 158 110" stroke="#6B5A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M148 110 Q152 116 150 118" stroke="#6B5A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Eye stalks as antennae */}
      <g className="pest-antenna-l">
        <path d="M145 98 Q148 80 150 72" stroke="#6B5A40" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M152 98 Q158 82 162 76" stroke="#6B5A40" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function KatatsumuriSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kata-shell" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#C4A46A" />
          <stop offset="100%" stopColor="#8B7340" />
        </radialGradient>
      </defs>
      {/* Body */}
      <g className="pest-body">
        <path d="M40 150 Q40 135 60 128 Q90 118 130 125 Q155 130 155 145 Q155 158 130 162 Q90 168 55 162 Q40 158 40 150Z" fill="#8B7B60" />
      </g>
      {/* Shell */}
      <circle cx="105" cy="95" r="40" fill="url(#kata-shell)" />
      <path d="M105 55 Q80 70 75 95 Q72 115 90 130" stroke="#7A6335" strokeWidth="2" fill="none" />
      <path d="M105 55 Q120 65 125 80 Q130 100 118 118" stroke="#7A6335" strokeWidth="1.5" fill="none" />
      <path d="M92 70 Q100 78 108 72" stroke="#7A6335" strokeWidth="1.2" fill="none" />
      <path d="M85 85 Q100 95 115 85" stroke="#7A6335" strokeWidth="1" fill="none" />
      {/* Shell stripes */}
      <path d="M70 100 Q105 120 140 100" stroke="#6B5328" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Head */}
      <ellipse cx="50" cy="138" rx="14" ry="12" fill="#7A6B50" />
      {/* Eye stalks */}
      <g className="pest-antenna-l">
        <path d="M44 132 Q38 112 36 102" stroke="#7A6B50" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="36" cy="100" r="3.5" fill="#333" />
        <circle cx="35" cy="99" r="1.5" fill="#666" />
      </g>
      <g className="pest-antenna-r">
        <path d="M52 130 Q52 114 54 106" stroke="#7A6B50" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="54" cy="104" r="3.5" fill="#333" />
        <circle cx="53" cy="103" r="1.5" fill="#666" />
      </g>
    </svg>
  );
}

function KemushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kemushi-seg" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F5F0E0" />
          <stop offset="100%" stopColor="#D4C8A0" />
        </radialGradient>
      </defs>
      {/* Body segments with hair tufts */}
      <g className="pest-body">
      {[35,55,75,95,115,135,155].map((y,i) => (
        <g key={i}>
          <ellipse cx="100" cy={y} rx="20" ry="11" fill="url(#kemushi-seg)" />
          {/* Hair tufts */}
          <line x1="85" y1={y-8} x2={80-i} y2={y-18} stroke="#CCC0A0" strokeWidth="1" strokeLinecap="round" />
          <line x1="95" y1={y-9} x2="92" y2={y-20} stroke="#CCC0A0" strokeWidth="1" strokeLinecap="round" />
          <line x1="105" y1={y-9} x2="108" y2={y-20} stroke="#CCC0A0" strokeWidth="1" strokeLinecap="round" />
          <line x1="115" y1={y-8} x2={120+i} y2={y-18} stroke="#CCC0A0" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
      </g>
      <g className="pest-leg-l">
      {[35,55,75,95,115,135,155].map((y,i) => (
          <ellipse key={i} cx="82" cy={y+6} rx="4" ry="3" fill="#C4B880" />
      ))}
      </g>
      <g className="pest-leg-r">
      {[35,55,75,95,115,135,155].map((y,i) => (
          <ellipse key={i} cx="118" cy={y+6} rx="4" ry="3" fill="#C4B880" />
      ))}
      </g>
      {/* Head */}
      <circle cx="100" cy="22" r="10" fill="#C4B880" />
      <circle cx="96" cy="20" r="2.5" fill="#333" />
      <circle cx="104" cy="20" r="2.5" fill="#333" />
    </svg>
  );
}

function YoshibueSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="yoshi-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A2A1A" />
          <stop offset="100%" stopColor="#1A1008" />
        </linearGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 95 Q48 82 30 75" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M70 110 Q42 108 22 105" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M72 135 Q52 148 35 160" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 95 Q152 82 170 75" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M130 110 Q158 108 178 105" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M128 135 Q148 148 165 160" stroke="#2A1A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen - shield shape */}
      <path d="M70 85 L130 85 L135 120 Q135 155 100 165 Q65 155 65 120Z" fill="url(#yoshi-body)" />
      {/* White edge markings */}
      <path d="M70 85 L65 120" stroke="white" strokeWidth="2" opacity="0.5" />
      <path d="M130 85 L135 120" stroke="white" strokeWidth="2" opacity="0.5" />
      {/* Red spot */}
      <circle cx="100" cy="130" r="6" fill="#CC3333" opacity="0.7" />
      {/* Head */}
      <ellipse cx="100" cy="72" rx="14" ry="10" fill="#2A1A0A" />
      <circle cx="94" cy="70" r="3" fill="#555" />
      <circle cx="106" cy="70" r="3" fill="#555" />
      {/* Antennae */}
      <path d="M90 64 Q78 48 72 40" stroke="#2A1A0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M110 64 Q122 48 128 40" stroke="#2A1A0A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Beak (rostrum) */}
      <path d="M98 80 L100 90 L102 80" stroke="#4A3020" strokeWidth="1.5" fill="#4A3020" />
    </svg>
  );
}

function KoganegumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kogane-abd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#222" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
      {/* Web lines */}
      <line x1="0" y1="100" x2="200" y2="100" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="20" y1="20" x2="180" y2="180" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      <line x1="180" y1="20" x2="20" y2="180" stroke="#DDD" strokeWidth="0.5" opacity="0.3" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M88 90 Q55 55 30 35" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 95 Q50 75 22 65" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 105 Q50 125 22 140" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 110 Q55 145 30 168" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 90 Q145 55 170 35" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 95 Q150 75 178 65" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 105 Q150 125 178 140" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 110 Q145 145 170 168" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Large abdomen */}
      <ellipse cx="100" cy="130" rx="22" ry="32" fill="url(#kogane-abd)" />
      <path d="M80 118 Q100 114 120 118" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <path d="M80 142 Q100 138 120 142" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {/* Cephalothorax */}
      <ellipse cx="100" cy="88" rx="14" ry="12" fill="#333" />
      {/* Eyes */}
      <circle cx="96" cy="84" r="2" fill="#666" />
      <circle cx="104" cy="84" r="2" fill="#666" />
    </svg>
  );
}

function KusakagerouSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - large, transparent, veined */}
      <ellipse cx="60" cy="90" rx="38" ry="16" fill="#CCFFCC33" stroke="#88CC88" strokeWidth="0.8" transform="rotate(-5 60 90)" />
      <ellipse cx="140" cy="90" rx="38" ry="16" fill="#CCFFCC33" stroke="#88CC88" strokeWidth="0.8" transform="rotate(5 140 90)" />
      {/* Wing veins */}
      <path d="M35 88 Q60 82 85 88" stroke="#99CC99" strokeWidth="0.5" fill="none" />
      <path d="M115 88 Q140 82 165 88" stroke="#99CC99" strokeWidth="0.5" fill="none" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M90 115 Q70 130 55 145" stroke="#7BAA55" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 108 Q65 112 48 118" stroke="#7BAA55" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 115 Q130 130 145 145" stroke="#7BAA55" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 108 Q135 112 152 118" stroke="#7BAA55" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Body - slender green */}
      <g className="pest-body">
        <ellipse cx="100" cy="115" rx="10" ry="20" fill="#7BAA55" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="90" rx="8" ry="10" fill="#8BBB66" />
      {/* Head */}
      <circle cx="100" cy="72" r="8" fill="#8BBB66" />
      {/* Golden eyes */}
      <circle cx="94" cy="70" r="4" fill="#FFD700" />
      <circle cx="106" cy="70" r="4" fill="#FFD700" />
      <circle cx="94" cy="70" r="2" fill="#222" />
      <circle cx="106" cy="70" r="2" fill="#222" />
      {/* Long antennae */}
      <g className="pest-antenna-l">
        <path d="M94 64 Q80 35 72 20" stroke="#8BBB66" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 64 Q120 35 128 20" stroke="#8BBB66" strokeWidth="1" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function KamakiriSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kama-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#4A6B10" />
        </linearGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="70" cy="120" rx="30" ry="10" fill="#88AA4488" transform="rotate(-5 70 120)" />
      <ellipse cx="130" cy="120" rx="30" ry="10" fill="#88AA4488" transform="rotate(5 130 120)" />
      {/* Back legs */}
      <path d="M85 145 Q65 165 50 180" stroke="#4A6B10" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M115 145 Q135 165 150 180" stroke="#4A6B10" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M88 130 Q60 135 42 140" stroke="#4A6B10" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M112 130 Q140 135 158 140" stroke="#4A6B10" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Abdomen */}
      <ellipse cx="100" cy="140" rx="16" ry="25" fill="url(#kama-body)" />
      {/* Thorax - elongated */}
      <rect x="94" y="75" rx="6" width="12" height="45" fill="#5A7D18" />
      {/* Raptorial forelegs (カマ) */}
      <g className="pest-leg-l">
        <path d="M94 82 Q70 65 55 55" stroke="#5A7D18" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M55 55 Q48 45 42 38" stroke="#5A7D18" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Spines on foreleg */}
        <line x1="72" y1="63" x2="68" y2="58" stroke="#5A7D18" strokeWidth="1" strokeLinecap="round" />
        <line x1="65" y1="59" x2="60" y2="55" stroke="#5A7D18" strokeWidth="1" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M106 82 Q130 65 145 55" stroke="#5A7D18" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M145 55 Q152 45 158 38" stroke="#5A7D18" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="128" y1="63" x2="132" y2="58" stroke="#5A7D18" strokeWidth="1" strokeLinecap="round" />
        <line x1="135" y1="59" x2="140" y2="55" stroke="#5A7D18" strokeWidth="1" strokeLinecap="round" />
      </g>
      {/* Triangular head */}
      <path d="M86 70 L100 55 L114 70Z" fill="#6B8E23" />
      {/* Eyes */}
      <circle cx="92" cy="65" r="4" fill="#333" />
      <circle cx="108" cy="65" r="4" fill="#333" />
      <circle cx="91" cy="64" r="1.5" fill="#888" />
      <circle cx="107" cy="64" r="1.5" fill="#888" />
      {/* Antennae */}
      <path d="M96 57 Q88 40 84 30" stroke="#5A7D18" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M104 57 Q112 40 116 30" stroke="#5A7D18" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function TonboSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Four wings */}
      <ellipse cx="60" cy="72" rx="40" ry="10" fill="#E8E8FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(-8 60 72)" />
      <ellipse cx="140" cy="72" rx="40" ry="10" fill="#E8E8FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(8 140 72)" />
      <ellipse cx="62" cy="85" rx="38" ry="9" fill="#E8E8FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(-3 62 85)" />
      <ellipse cx="138" cy="85" rx="38" ry="9" fill="#E8E8FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(3 138 85)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M92 85 Q78 95 68 100" stroke="#456" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M108 85 Q122 95 132 100" stroke="#456" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Long abdomen */}
      <g className="pest-body">
        <rect x="96" y="80" rx="4" width="8" height="95" fill="#4A7090" />
        <line x1="100" y1="90" x2="100" y2="170" stroke="#3A6080" strokeWidth="0.5" />
        {/* Abdomen segments */}
        {[90,100,110,120,130,140,150,160].map((y,i) => (
          <line key={i} x1="96" y1={y} x2="104" y2={y} stroke="#3A6080" strokeWidth="0.5" />
        ))}
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="75" rx="12" ry="10" fill="#4A7090" />
      {/* Large compound eyes */}
      <circle cx="88" cy="55" r="12" fill="#446688" />
      <circle cx="112" cy="55" r="12" fill="#446688" />
      <circle cx="86" cy="53" r="4" fill="#6688AA" opacity="0.5" />
      <circle cx="110" cy="53" r="4" fill="#6688AA" opacity="0.5" />
      {/* Face */}
      <rect x="94" y="52" width="12" height="8" rx="3" fill="#3A5A78" />
    </svg>
  );
}

function GokiburiTobiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tobi-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#6B3A1F" />
          <stop offset="100%" stopColor="#3A1F0F" />
        </radialGradient>
      </defs>
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M88 52 Q70 25 52 12" stroke="#3A1F0F" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M112 52 Q130 25 148 12" stroke="#3A1F0F" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M68 82 Q48 68 30 60" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M65 105 Q40 95 22 90" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M68 130 Q48 142 30 155" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M132 82 Q152 68 170 60" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M135 105 Q160 95 178 90" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M132 130 Q152 142 170 155" stroke="#4A2A14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="65" rx="28" ry="16" fill="url(#tobi-body)" />
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="115" rx="36" ry="48" fill="url(#tobi-body)" />
        <line x1="100" y1="72" x2="100" y2="158" stroke="#2A1008" strokeWidth="1.2" opacity="0.4" />
      </g>
      {/* Head */}
      <ellipse cx="100" cy="50" rx="16" ry="12" fill="#3A1F0F" />
      <ellipse cx="91" cy="48" rx="4" ry="3.5" fill="#555" />
      <ellipse cx="109" cy="48" rx="4" ry="3.5" fill="#555" />
      {/* Cerci */}
      <path d="M95 160 Q90 170 85 175" stroke="#4A2A14" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M105 160 Q110 170 115 175" stroke="#4A2A14" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function HimeariSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M85 108 Q65 98 48 90" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M82 118 Q60 115 42 112" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 130 Q65 142 50 152" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M115 108 Q135 98 152 90" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M118 118 Q140 115 158 112" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 130 Q135 142 150 152" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Gaster (abdomen) */}
      <ellipse cx="100" cy="138" rx="18" ry="16" fill="#CC9944" />
      {/* Petiole (waist) */}
      <circle cx="100" cy="118" r="5" fill="#BB8833" />
      {/* Thorax */}
      <ellipse cx="100" cy="105" rx="14" ry="10" fill="#BB8833" />
      {/* Head */}
      <ellipse cx="100" cy="85" rx="12" ry="10" fill="#CC9944" />
      <circle cx="95" cy="83" r="2.5" fill="#333" />
      <circle cx="105" cy="83" r="2.5" fill="#333" />
      {/* Mandibles */}
      <path d="M95 93 Q92 98 88 96" stroke="#AA7722" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M105 93 Q108 98 112 96" stroke="#AA7722" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Antennae */}
      <path d="M92 78 Q80 65 74 58" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M108 78 Q120 65 126 58" stroke="#AA8844" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function ArgentiariSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M85 108 Q62 96 45 88" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M82 118 Q55 114 38 110" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 132 Q62 145 48 156" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M115 108 Q138 96 155 88" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M118 118 Q145 114 162 110" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 132 Q138 145 152 156" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Gaster */}
      <ellipse cx="100" cy="140" rx="17" ry="15" fill="#8B6B45" />
      {/* Petiole */}
      <circle cx="100" cy="120" r="4.5" fill="#7A5C3A" />
      {/* Thorax */}
      <ellipse cx="100" cy="106" rx="13" ry="10" fill="#7A5C3A" />
      {/* Head */}
      <ellipse cx="100" cy="86" rx="11" ry="9" fill="#8B6B45" />
      <circle cx="95" cy="84" r="2.5" fill="#333" />
      <circle cx="105" cy="84" r="2.5" fill="#333" />
      {/* Antennae - elbowed */}
      <path d="M92 78 Q82 72 78 66 Q76 58 72 52" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M108 78 Q118 72 122 66 Q124 58 128 52" stroke="#7A5C3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function RurichirigokegumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ruri-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5C4A32" />
        </radialGradient>
      </defs>
      {/* Long thin legs */}
      <g className="pest-leg-l">
        <path d="M88 95 Q50 50 25 30" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 100 Q40 72 15 60" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M85 108 Q40 130 15 150" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 112 Q50 155 25 178" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M112 95 Q150 50 175 30" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 100 Q160 72 185 60" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 108 Q160 130 185 150" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 112 Q150 155 175 178" stroke="#6B5A42" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen */}
      <ellipse cx="100" cy="125" rx="18" ry="22" fill="url(#ruri-body)" />
      {/* Cephalothorax with violin mark */}
      <ellipse cx="100" cy="90" rx="14" ry="12" fill="#7A6345" />
      <path d="M96 82 Q100 88 104 82 Q100 96 96 82Z" fill="#4A3525" opacity="0.6" />
      {/* Eyes - 3 pairs in semicircle */}
      <circle cx="95" cy="82" r="1.5" fill="#222" />
      <circle cx="105" cy="82" r="1.5" fill="#222" />
      <circle cx="98" cy="80" r="1.5" fill="#222" />
      <circle cx="102" cy="80" r="1.5" fill="#222" />
    </svg>
  );
}

function AmigasabachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <ellipse cx="70" cy="100" rx="25" ry="10" fill="#D4A84044" transform="rotate(-10 70 100)" />
      <ellipse cx="130" cy="100" rx="25" ry="10" fill="#D4A84044" transform="rotate(10 130 100)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M85 115 Q65 128 50 140" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 105 Q68 105 50 102" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M115 115 Q135 128 150 140" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 105 Q132 105 150 102" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen - fusiform */}
      <g className="pest-body">
        <ellipse cx="100" cy="135" rx="14" ry="24" fill="#AA8833" />
        <path d="M88 128 Q100 124 112 128" stroke="#886622" strokeWidth="1.5" fill="none" />
        <path d="M87 138 Q100 134 113 138" stroke="#886622" strokeWidth="1.5" fill="none" />
      </g>
      {/* Thin waist (petiole) */}
      <rect x="97" y="108" width="6" height="12" rx="3" fill="#996B22" />
      {/* Thorax */}
      <ellipse cx="100" cy="98" rx="14" ry="12" fill="#8B6B20" />
      {/* Head */}
      <ellipse cx="100" cy="78" rx="10" ry="9" fill="#AA8833" />
      <circle cx="95" cy="76" r="2.5" fill="#222" />
      <circle cx="105" cy="76" r="2.5" fill="#222" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M94 70 Q84 55 80 45" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 70 Q116 55 120 45" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function GomadaraSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Very long antennae */}
      <g className="pest-antenna-l">
        <path d="M86 55 Q55 18 15 5" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* White bands on antennae */}
        <circle cx="60" cy="30" r="2" fill="white" opacity="0.7" />
        <circle cx="40" cy="18" r="2" fill="white" opacity="0.7" />
      </g>
      <g className="pest-antenna-r">
        <path d="M114 55 Q145 18 185 5" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="140" cy="30" r="2" fill="white" opacity="0.7" />
        <circle cx="160" cy="18" r="2" fill="white" opacity="0.7" />
      </g>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 92 Q48 78 28 68" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M70 112 Q42 108 22 102" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M72 140 Q48 155 30 168" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 92 Q152 78 172 68" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M130 112 Q158 108 178 102" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M128 140 Q152 155 170 168" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="76" rx="22" ry="14" fill="#222" />
      <circle cx="92" cy="74" r="3" fill="white" opacity="0.6" />
      <circle cx="108" cy="74" r="3" fill="white" opacity="0.6" />
      {/* Elytra */}
      <rect x="74" y="86" rx="8" width="52" height="80" fill="#1A1A1A" />
      <line x1="100" y1="86" x2="100" y2="166" stroke="#333" strokeWidth="0.8" />
      {/* White spots */}
      <circle cx="86" cy="100" r="4" fill="white" opacity="0.7" />
      <circle cx="114" cy="100" r="4" fill="white" opacity="0.7" />
      <circle cx="82" cy="118" r="3.5" fill="white" opacity="0.7" />
      <circle cx="118" cy="118" r="3.5" fill="white" opacity="0.7" />
      <circle cx="88" cy="136" r="3" fill="white" opacity="0.7" />
      <circle cx="112" cy="136" r="3" fill="white" opacity="0.7" />
      <circle cx="85" cy="152" r="2.5" fill="white" opacity="0.7" />
      <circle cx="115" cy="152" r="2.5" fill="white" opacity="0.7" />
      {/* Head */}
      <ellipse cx="100" cy="58" rx="14" ry="11" fill="#222" />
      <circle cx="92" cy="56" r="3.5" fill="#555" />
      <circle cx="108" cy="56" r="3.5" fill="#555" />
    </svg>
  );
}

function HamushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hamu-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#E8A040" />
          <stop offset="100%" stopColor="#CC7820" />
        </radialGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M72 108 Q52 98 35 90" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M70 118 Q48 116 32 112" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M74 132 Q56 142 42 150" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M128 108 Q148 98 165 90" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M130 118 Q152 116 168 112" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M126 132 Q144 142 158 150" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Body - oval */}
      <g className="pest-body">
        <ellipse cx="100" cy="118" rx="32" ry="28" fill="url(#hamu-body)" />
        <line x1="100" y1="90" x2="100" y2="146" stroke="#AA6618" strokeWidth="0.8" opacity="0.3" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="86" rx="18" ry="10" fill="#CC8830" />
      {/* Head */}
      <ellipse cx="100" cy="72" rx="12" ry="9" fill="#AA6618" />
      <circle cx="94" cy="70" r="3" fill="#333" />
      <circle cx="106" cy="70" r="3" fill="#333" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M92 64 Q84 52 80 44" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 64 Q116 52 120 44" stroke="#8B6B20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Noshimemadara2Svg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings - moth shape */}
      <g className="pest-leg-l">
        <path d="M100 90 Q55 70 35 80 Q25 90 40 105 Q60 115 100 110Z" fill="#A09080" />
        {/* Wing pattern */}
        <path d="M50 88 Q75 82 100 90" stroke="#7A6A5A" strokeWidth="1" fill="none" />
      </g>
      <g className="pest-leg-r">
        <path d="M100 90 Q145 70 165 80 Q175 90 160 105 Q140 115 100 110Z" fill="#A09080" />
        <path d="M150 88 Q125 82 100 90" stroke="#7A6A5A" strokeWidth="1" fill="none" />
      </g>
      {/* Body */}
      <g className="pest-body">
        <ellipse cx="100" cy="105" rx="6" ry="16" fill="#8A7A6A" />
      </g>
      {/* Head */}
      <circle cx="100" cy="84" r="6" fill="#8A7A6A" />
      {/* Eyes */}
      <circle cx="97" cy="82" r="2" fill="#222" />
      <circle cx="103" cy="82" r="2" fill="#222" />
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M96 78 Q82 60 76 48" stroke="#8A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M104 78 Q118 60 124 48" stroke="#8A7A6A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function TobinebumiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tobi-beetle" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#A06030" />
          <stop offset="100%" stopColor="#6B3A18" />
        </radialGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M78 112 Q60 104 45 96" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M76 122 Q56 120 40 116" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M80 134 Q62 144 48 152" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M122 112 Q140 104 155 96" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M124 122 Q144 120 160 116" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M120 134 Q138 144 152 152" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Round body */}
      <g className="pest-body">
        <ellipse cx="100" cy="120" rx="25" ry="24" fill="url(#tobi-beetle)" />
        <line x1="100" y1="96" x2="100" y2="144" stroke="#5A2A10" strokeWidth="0.8" opacity="0.3" />
      </g>
      {/* Pronotum */}
      <ellipse cx="100" cy="92" rx="18" ry="10" fill="#8B5028" />
      {/* Head - tucked under */}
      <ellipse cx="100" cy="80" rx="10" ry="8" fill="#6B3A18" />
      <circle cx="96" cy="78" r="2" fill="#444" />
      <circle cx="104" cy="78" r="2" fill="#444" />
      {/* Antennae - serrate */}
      <g className="pest-antenna-l">
        <path d="M94 74 Q88 62 86 54" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 74 Q112 62 114 54" stroke="#6B3A18" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function HiratakikuimushiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hirata-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5A3A20" />
          <stop offset="100%" stopColor="#3A2210" />
        </linearGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M78 90 Q58 82 42 75" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M76 108 Q54 104 38 100" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M78 130 Q58 140 42 150" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M122 90 Q142 82 158 75" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M124 108 Q146 104 162 100" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M122 130 Q142 140 158 150" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Elongated flat body */}
      <g className="pest-body">
        <rect x="76" y="72" rx="10" width="48" height="85" fill="url(#hirata-body)" />
        <line x1="100" y1="72" x2="100" y2="157" stroke="#2A1208" strokeWidth="0.8" opacity="0.4" />
      </g>
      {/* Pronotum */}
      <rect x="80" y="65" rx="6" width="40" height="15" fill="#4A2A15" />
      {/* Head */}
      <ellipse cx="100" cy="58" rx="12" ry="8" fill="#3A2210" />
      <circle cx="95" cy="56" r="2.5" fill="#555" />
      <circle cx="105" cy="56" r="2.5" fill="#555" />
      {/* Antennae - clubbed */}
      <g className="pest-antenna-l">
        <path d="M92 52 Q84 40 80 32" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="79" cy="30" r="3" fill="#4A2A15" />
      </g>
      <g className="pest-antenna-r">
        <path d="M108 52 Q116 40 120 32" stroke="#3A2210" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="121" cy="30" r="3" fill="#4A2A15" />
      </g>
    </svg>
  );
}

function KonadaniSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kona-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#D8D0C0" />
        </radialGradient>
      </defs>
      {/* Legs - 8 short legs */}
      <g className="pest-leg-l">
        <path d="M78 95 Q60 82 48 72" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M75 105 Q55 98 40 92" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M75 118 Q55 125 40 132" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M78 128 Q60 140 48 150" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M122 95 Q140 82 152 72" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M125 105 Q145 98 160 92" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M125 118 Q145 125 160 132" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M122 128 Q140 140 152 150" stroke="#C8C0B0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Round translucent body */}
      <g className="pest-body">
        <ellipse cx="100" cy="108" rx="28" ry="30" fill="url(#kona-body)" opacity="0.85" />
      </g>
      {/* Internal organs visible */}
      <ellipse cx="100" cy="105" rx="12" ry="14" fill="#E0D8C8" opacity="0.4" />
      {/* Mouthparts (gnathosoma) */}
      <ellipse cx="100" cy="76" rx="8" ry="6" fill="#D8D0C0" />
      {/* Hair bristles */}
      <line x1="80" y1="90" x2="72" y2="82" stroke="#C8C0B0" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="120" y1="90" x2="128" y2="82" stroke="#C8C0B0" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="78" y1="120" x2="70" y2="128" stroke="#C8C0B0" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="122" y1="120" x2="130" y2="128" stroke="#C8C0B0" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function SuzumegaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="suzume-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B7B6B" />
          <stop offset="100%" stopColor="#5A4A3A" />
        </linearGradient>
      </defs>
      {/* Large swept-back wings */}
      <g className="pest-leg-l">
        <path d="M100 85 Q50 60 20 50 Q15 65 25 85 Q50 105 100 108Z" fill="url(#suzume-wing)" />
        <path d="M40 65 Q70 78 100 90" stroke="#6B5B4B" strokeWidth="1" fill="none" opacity="0.5" />
      </g>
      <g className="pest-leg-r">
        <path d="M100 85 Q150 60 180 50 Q185 65 175 85 Q150 105 100 108Z" fill="url(#suzume-wing)" />
        <path d="M160 65 Q130 78 100 90" stroke="#6B5B4B" strokeWidth="1" fill="none" opacity="0.5" />
      </g>
      {/* Robust body */}
      <g className="pest-body">
        <ellipse cx="100" cy="108" rx="12" ry="28" fill="#7B6B5B" />
        {/* Abdomen stripes */}
        <path d="M89 105 Q100 103 111 105" stroke="#5A4A3A" strokeWidth="1" fill="none" />
        <path d="M89 115 Q100 113 111 115" stroke="#5A4A3A" strokeWidth="1" fill="none" />
        <path d="M90 125 Q100 123 110 125" stroke="#5A4A3A" strokeWidth="1" fill="none" />
      </g>
      {/* Head */}
      <circle cx="100" cy="75" r="8" fill="#6B5B4B" />
      <circle cx="96" cy="73" r="2.5" fill="#222" />
      <circle cx="104" cy="73" r="2.5" fill="#222" />
      {/* Long proboscis (curled) */}
      <path d="M100 80 Q95 90 98 85 Q96 92 100 88" stroke="#5A4A3A" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M95 68 Q86 55 82 45" stroke="#6B5B4B" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M105 68 Q114 55 118 45" stroke="#6B5B4B" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ChikaekaSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chika-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B5A4A" />
          <stop offset="100%" stopColor="#4A3A2A" />
        </linearGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="72" cy="100" rx="28" ry="10" fill="#D4D4DD22" stroke="#999" strokeWidth="0.3" transform="rotate(-10 72 100)" />
      <ellipse cx="128" cy="100" rx="28" ry="10" fill="#D4D4DD22" stroke="#999" strokeWidth="0.3" transform="rotate(10 128 100)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M90 115 Q68 130 50 148" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M88 100 Q62 95 42 88" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M90 125 Q72 145 58 168" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M110 115 Q132 130 150 148" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M112 100 Q138 95 158 88" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M110 125 Q128 145 142 168" stroke="#4A3A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen */}
      <g className="pest-body">
        <ellipse cx="100" cy="120" rx="12" ry="22" fill="url(#chika-body)" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="92" rx="10" ry="10" fill="#5A4A3A" />
      {/* Head */}
      <circle cx="100" cy="74" r="8" fill="#5A4A3A" />
      <circle cx="96" cy="72" r="2.5" fill="#333" />
      <circle cx="104" cy="72" r="2.5" fill="#333" />
      {/* Proboscis */}
      <line x1="100" y1="80" x2="100" y2="96" stroke="#3A2A1A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Feathery antennae */}
      <g className="pest-antenna-l">
        <path d="M94 68 Q82 52 76 42" stroke="#5A4A3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Antenna feathers */}
        <line x1="84" y1="56" x2="78" y2="52" stroke="#5A4A3A" strokeWidth="0.5" />
        <line x1="80" y1="50" x2="74" y2="46" stroke="#5A4A3A" strokeWidth="0.5" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 68 Q118 52 124 42" stroke="#5A4A3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="116" y1="56" x2="122" y2="52" stroke="#5A4A3A" strokeWidth="0.5" />
        <line x1="120" y1="50" x2="126" y2="46" stroke="#5A4A3A" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function KumabachiSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="kuma-thorax" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </radialGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="65" cy="95" rx="28" ry="12" fill="#D4D4FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(-8 65 95)" />
      <ellipse cx="135" cy="95" rx="28" ry="12" fill="#D4D4FF33" stroke="#AAA" strokeWidth="0.5" transform="rotate(8 135 95)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M82 118 Q62 132 48 145" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M85 105 Q62 102 45 98" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 118 Q138 132 152 145" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M115 105 Q138 102 155 98" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Large round abdomen - black */}
      <g className="pest-body">
        <ellipse cx="100" cy="130" rx="26" ry="24" fill="#1A1A1A" />
      </g>
      {/* Fuzzy thorax - yellow */}
      <ellipse cx="100" cy="96" rx="22" ry="18" fill="url(#kuma-thorax)" />
      {/* Fur texture */}
      <ellipse cx="100" cy="96" rx="22" ry="18" fill="none" stroke="#E8C020" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Head - black */}
      <circle cx="100" cy="72" r="12" fill="#222" />
      <circle cx="94" cy="70" r="3" fill="#444" />
      <circle cx="106" cy="70" r="3" fill="#444" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M94 62 Q86 48 84 40" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 62 Q114 48 116 40" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function JigumoSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jigu-body" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#4A3A2A" />
          <stop offset="100%" stopColor="#2A1A0A" />
        </radialGradient>
      </defs>
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M82 95 Q58 72 40 58" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M78 102 Q52 88 32 78" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M78 115 Q52 128 35 142" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M82 122 Q58 142 42 160" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M118 95 Q142 72 160 58" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M122 102 Q148 88 168 78" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M122 115 Q148 128 165 142" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M118 122 Q142 142 158 160" stroke="#3A2A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen */}
      <ellipse cx="100" cy="128" rx="22" ry="24" fill="url(#jigu-body)" />
      {/* Cephalothorax */}
      <ellipse cx="100" cy="92" rx="18" ry="16" fill="#3A2A1A" />
      {/* Large chelicerae (顎) */}
      <path d="M92 100 Q84 112 80 108 Q78 104 86 96" fill="#4A3020" stroke="#2A1A0A" strokeWidth="1" />
      <path d="M108 100 Q116 112 120 108 Q122 104 114 96" fill="#4A3020" stroke="#2A1A0A" strokeWidth="1" />
      {/* Eyes */}
      <circle cx="94" cy="86" r="2.5" fill="#555" />
      <circle cx="106" cy="86" r="2.5" fill="#555" />
      <circle cx="98" cy="83" r="1.5" fill="#444" />
      <circle cx="102" cy="83" r="1.5" fill="#444" />
      {/* Silk tube hint */}
      <path d="M100 152 Q100 170 100 185" stroke="#8B7B6B" strokeWidth="4" fill="none" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

function KogataSuzuSvg() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kogata-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#CC8800" />
        </linearGradient>
      </defs>
      {/* Wings */}
      <ellipse cx="68" cy="98" rx="26" ry="11" fill="#D4A84044" transform="rotate(-12 68 98)" />
      <ellipse cx="132" cy="98" rx="26" ry="11" fill="#D4A84044" transform="rotate(12 132 98)" />
      {/* Legs */}
      <g className="pest-leg-l">
        <path d="M84 112 Q62 122 48 132" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M82 125 Q60 138 45 150" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M86 100 Q66 96 50 90" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-leg-r">
        <path d="M116 112 Q138 122 152 132" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M118 125 Q140 138 155 150" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 100 Q134 96 150 90" stroke="#AA7700" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Abdomen with stripes */}
      <g className="pest-body">
        <ellipse cx="100" cy="128" rx="20" ry="26" fill="url(#kogata-body)" />
        <path d="M82 118 Q100 114 118 118" stroke="#222" strokeWidth="2.5" fill="none" />
        <path d="M80 128 Q100 124 120 128" stroke="#222" strokeWidth="2.5" fill="none" />
        <path d="M82 138 Q100 134 118 138" stroke="#222" strokeWidth="2.5" fill="none" />
      </g>
      {/* Thorax */}
      <ellipse cx="100" cy="95" rx="16" ry="12" fill="#222" />
      {/* Head */}
      <ellipse cx="100" cy="74" rx="12" ry="10" fill="#E8A020" />
      <circle cx="94" cy="72" r="3" fill="#222" />
      <circle cx="106" cy="72" r="3" fill="#222" />
      {/* Antennae */}
      <g className="pest-antenna-l">
        <path d="M94 64 Q84 48 80 40" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      <g className="pest-antenna-r">
        <path d="M106 64 Q116 48 120 40" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Stinger */}
      <path d="M100 152 L100 162" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
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
  sashibae: <SashibaeSvg />,
  nukaka: <NukakaSvg />,
  gaganbo: <GaganboSvg />,
  abu: <AbuSvg />,
  yusurika: <YusurikaSvg />,
  kinokobae: <KinokobaeSvg />,
  iedani: <IedaniSvg />,
  jorougumo: <JorougumoSvg />,
  kuroari: <KuroariSvg />,
  katsuobushimushi: <KatsuobushimushiSvg />,
  hanekakushi: <HanekakushiSvg />,
  koganemushi: <KoganemushiSvg />,
  unka: <UnkaSvg />,
  sashigame: <SashigameSvg />,
  hasamimushi: <HasamimushiSvg />,
  warajimushi: <WarajimushiSvg />,
  noshimemadarameiga: <NoshimemadarameigaSvg />,
  maimaiga: <MaimaigaSvg />,
  iraga: <IragaSvg />,
  tsumaakasuzumebachi: <TsumaakasuzumebachiSvg />,
  shimi: <ShimiSvg />,
  mukade: <MukadeSvg />,
  haetori: <HaetoriSvg />,
  tentou: <TentouSvg />,
  kamikiri: <KamikiriSvg />,
  kiirosuzu: <KiirosuzuSvg />,
  mitsubachi: <MitsubachiSvg />,
  namekuji: <NamekujiSvg />,
  katatsumuri: <KatatsumuriSvg />,
  kemushi: <KemushiSvg />,
  yoshibue: <YoshibueSvg />,
  koganegumo: <KoganegumoSvg />,
  kusakagerou: <KusakagerouSvg />,
  kamakiri: <KamakiriSvg />,
  tonbo: <TonboSvg />,
  gokiburi_tobi: <GokiburiTobiSvg />,
  himearikai: <HimeariSvg />,
  argentiari: <ArgentiariSvg />,
  rurichirigokegumo: <RurichirigokegumoSvg />,
  amigasabachi: <AmigasabachiSvg />,
  gomadara: <GomadaraSvg />,
  hamushi: <HamushiSvg />,
  noshimemadara2: <Noshimemadara2Svg />,
  tobinebumi: <TobinebumiSvg />,
  hiratakikuimushi: <HiratakikuimushiSvg />,
  konadani: <KonadaniSvg />,
  suzumega: <SuzumegaSvg />,
  chikaeka: <ChikaekaSvg />,
  kumabachi: <KumabachiSvg />,
  jigumo: <JigumoSvg />,
  kogatasuzu: <KogataSuzuSvg />,
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
