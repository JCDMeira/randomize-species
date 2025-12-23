import { useState } from "react";
import species from "./data/species.json";

type Species = {
  index: number;
  name: string;
  heritage: string;
  size: string;
  source: string;
  source_full: string;
  slug: string;
  image?: string;
  ref_link?: string;
};

export default function App() {
  const [result, setresult] = useState<null | Species>();

  function sortearEspecie() {
    const index = Math.floor(Math.random() * species.length);
    setresult(species[index]);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Sorteador de Espécies
        </h1>

        <button
          onClick={sortearEspecie}
          className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 active:scale-95 transition"
        >
          Sortear Espécie
        </button>

        {result && (
          <div className="mt-6 space-y-3 text-slate-200">
            <a
              href={`https://5e.tools/races.html#${result.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={`https://5e.tools/img/races/${
                  result.source == "PHB'24" ? "XPHB" : result.source
                }/${result.name}.webp`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/fallback.png";
                }}
                alt={result.name}
                className="w-full h-112 object-contain rounded-lg hover:scale-105 transition"
              />
            </a>
            <a
              href={`https://5e.tools/races.html#${result.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-bold text-purple-400 hover:underline">
                {result.name}
              </h2>
            </a>

            <p>
              <span className="font-semibold text-slate-400">Heritage:</span>{" "}
              {result.heritage}
            </p>

            <p>
              <span className="font-semibold text-slate-400">Size:</span>{" "}
              {result.size}
            </p>

            <p className="text-sm text-slate-400 mt-2">
              📘 {result.source_full}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
