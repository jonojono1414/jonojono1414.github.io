"use client";

import Link from "next/link";
import type { Pest } from "../data/pests";
import PestSvg from "./PestSvg";

type Props = {
  pest: Pest;
  isPhoto: boolean;
};

const dangerLabel = (level: number) => {
  return "★".repeat(level) + "☆".repeat(5 - level);
};

const categoryColors: Record<string, string> = {
  cockroach: "bg-amber-700 text-white",
  "mosquito-fly": "bg-sky-500 text-white",
  "mite-flea": "bg-rose-500 text-white",
  spider: "bg-purple-600 text-white",
  "ant-beetle": "bg-red-700 text-white",
  other: "bg-yellow-500 text-white",
};

export default function PestCard({ pest, isPhoto }: Props) {
  return (
    <Link href={`/pests/${pest.id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
          {isPhoto ? (
            <div className="flex h-[160px] w-[160px] items-center justify-center rounded-xl bg-gray-200 text-gray-400">
              <span className="text-center text-sm">📷 写真準備中</span>
            </div>
          ) : (
            <PestSvg id={pest.id} size={160} />
          )}
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${categoryColors[pest.categoryId] ?? "bg-gray-500 text-white"}`}>
              {pest.category}
            </span>
            <span className="text-xs text-yellow-500">{dangerLabel(pest.danger)}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
            {pest.name}
          </h3>
          <p className="mt-0.5 text-xs italic text-gray-400">{pest.scientificName}</p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {pest.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
