"use client";

import { useState } from "react";
import { pests, categories } from "./data/pests";
import PestCard from "./components/PestCard";
import ToggleButton from "./components/ToggleButton";

export default function Home() {
  const [isPhoto, setIsPhoto] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? pests.filter((p) => p.categoryId === activeCategory)
    : pests;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-12 text-center text-white shadow-lg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-5 text-6xl">🪲</div>
          <div className="absolute right-10 top-8 text-5xl">🦟</div>
          <div className="absolute bottom-5 left-1/4 text-4xl">🐝</div>
          <div className="absolute bottom-3 right-1/4 text-5xl">🦗</div>
        </div>
        <h1 className="relative text-4xl font-extrabold tracking-tight md:text-5xl">
          🐝 害虫図鑑
        </h1>
        <p className="relative mt-3 text-lg font-medium text-emerald-100">
          目に優しい害虫図鑑
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Controls */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                activeCategory === null
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow"
              }`}
            >
              すべて ({pests.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow"
                }`}
              >
                {cat.name} ({pests.filter((p) => p.categoryId === cat.id).length})
              </button>
            ))}
          </div>

          {/* Toggle */}
          <ToggleButton isPhoto={isPhoto} onToggle={() => setIsPhoto(!isPhoto)} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((pest) => (
            <PestCard key={pest.id} pest={pest} isPhoto={isPhoto} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-gray-400">該当する害虫が見つかりません</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 px-4 py-6 text-center text-sm text-gray-400">
        <p>害虫図鑑 &copy; 2026 — 身近な害虫を知って、正しく対策しよう</p>
      </footer>
    </div>
  );
}
