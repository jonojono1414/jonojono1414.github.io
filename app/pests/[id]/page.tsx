import Link from "next/link";
import { notFound } from "next/navigation";
import { pests } from "../../data/pests";
import PestSvg from "../../components/PestSvg";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return pests.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const pest = pests.find((p) => p.id === id);
  if (!pest) return { title: "害虫が見つかりません" };
  return { title: `${pest.name} | 害虫図鑑` };
}

const dangerStars = (level: number) => "★".repeat(level) + "☆".repeat(5 - level);

const dangerColor = (level: number) => {
  if (level >= 5) return "text-red-600";
  if (level >= 4) return "text-orange-500";
  if (level >= 3) return "text-yellow-500";
  return "text-green-500";
};

export default async function PestDetail({ params }: Props) {
  const { id } = await params;
  const currentIndex = pests.findIndex((p) => p.id === id);
  if (currentIndex === -1) notFound();

  const pest = pests[currentIndex];
  const prevPest = currentIndex > 0 ? pests[currentIndex - 1] : pests[pests.length - 1];
  const nextPest = currentIndex < pests.length - 1 ? pests[currentIndex + 1] : pests[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-6 text-white shadow-lg">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-white/30"
          >
            ← 一覧に戻る
          </Link>
          <h1 className="text-2xl font-extrabold">🔍 害虫図鑑</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Top Section */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* SVG - always animated */}
            <div className="always-animate flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:w-1/2">
              <PestSvg id={pest.id} size={250} />
            </div>
            {/* Basic Info */}
            <div className="p-6 md:w-1/2 md:p-8">
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                {pest.category}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-800">{pest.name}</h2>
              <p className="mt-1 text-sm italic text-gray-400">{pest.scientificName}</p>

              <div className="mt-6 space-y-3">
                <InfoRow label="サイズ" value={pest.size} />
                <InfoRow label="生息場所" value={pest.habitat} />
                <div className="flex items-start gap-3">
                  <span className="w-20 shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-center text-xs font-bold text-gray-500">
                    危険度
                  </span>
                  <span className={`text-lg font-bold ${dangerColor(pest.danger)}`}>
                    {dangerStars(pest.danger)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md md:p-8">
          <h3 className="mb-4 text-xl font-extrabold text-gray-800">📝 特徴</h3>
          <p className="leading-relaxed text-gray-700">{pest.description}</p>
        </section>

        {/* Trivia */}
        <section className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-md md:p-8">
          <h3 className="mb-4 text-xl font-extrabold text-gray-800">💡 豆知識</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {pest.trivia.map((t, i) => (
              <div
                key={i}
                className="relative rounded-xl bg-white p-4 shadow-sm before:absolute before:-top-2 before:left-4 before:h-4 before:w-4 before:rotate-45 before:bg-white"
              >
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="mr-1 text-orange-400">🔸</span>
                  {t}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-md md:p-8">
          <h3 className="mb-4 text-xl font-extrabold text-gray-800">🛡️ 対策</h3>
          <ul className="space-y-2">
            {pest.prevention.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Prev / Next Navigation */}
        <nav className="mt-10 grid grid-cols-2 gap-4">
          <Link
            href={`/pests/${prevPest.id}`}
            className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="text-2xl text-gray-300 transition group-hover:text-emerald-500">←</span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400">前の害虫</p>
              <p className="truncate font-bold text-gray-700 group-hover:text-emerald-600 transition">{prevPest.name}</p>
            </div>
          </Link>
          <Link
            href={`/pests/${nextPest.id}`}
            className="group flex items-center justify-end gap-3 rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="min-w-0 text-right">
              <p className="text-xs text-gray-400">次の害虫</p>
              <p className="truncate font-bold text-gray-700 group-hover:text-emerald-600 transition">{nextPest.name}</p>
            </div>
            <span className="text-2xl text-gray-300 transition group-hover:text-emerald-500">→</span>
          </Link>
        </nav>

        {/* Back button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600 hover:shadow-lg active:scale-95"
          >
            ← 一覧に戻る
          </Link>
        </div>
      </main>

      <footer className="mt-12 bg-gray-800 px-4 py-6 text-center text-sm text-gray-400">
        <p>害虫図鑑 &copy; 2026 — 身近な害虫を知って、正しく対策しよう</p>
      </footer>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-20 shrink-0 rounded-lg bg-gray-100 px-2 py-1 text-center text-xs font-bold text-gray-500">
        {label}
      </span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}
