"use client";

type Props = {
  isPhoto: boolean;
  onToggle: () => void;
};

export default function ToggleButton({ isPhoto, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-md transition-all hover:shadow-lg active:scale-95"
    >
      <span className={`text-sm font-bold ${!isPhoto ? "text-emerald-600" : "text-gray-400"}`}>
        🎨 イラスト
      </span>
      <div className="relative h-7 w-12 rounded-full bg-gray-200 transition-colors">
        <div
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-emerald-500 shadow transition-all ${
            isPhoto ? "left-[22px]" : "left-0.5"
          }`}
        />
      </div>
      <span className={`text-sm font-bold ${isPhoto ? "text-emerald-600" : "text-gray-400"}`}>
        📷 写真
      </span>
    </button>
  );
}
