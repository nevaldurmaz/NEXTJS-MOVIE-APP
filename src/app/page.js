import Movies from "@/components/Movies/Movies";
import React from "react";

const TMDB_BASE = "https://api.themoviedb.org/3";
const ALLOWED_GENRES = new Set([
  "popular",
  "now_playing",
  "upcoming",
  "top_rated",
]);

async function fetchMovies({ genre, query }) {
  const headers = {};
  if (process.env.TMDB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.TMDB_TOKEN}`;
  }

  let url;

  if (query?.trim()) {
    // Arama: kategori bağımsız
    const q = encodeURIComponent(query.trim());
    url = `${TMDB_BASE}/search/movie?language=en-US&page=1&include_adult=false&query=${q}`;
  } else if (genre && ALLOWED_GENRES.has(genre)) {
    // Kategori: her biri farklı endpoint
    url = `${TMDB_BASE}/movie/${genre}?language=en-US&page=1`;
  } else {
    // Varsayılan: trend filmler
    url = `${TMDB_BASE}/trending/movie/day?language=en-US&page=1`;
  }

  const res = await fetch(
    process.env.TMDB_TOKEN ? url : `${url}&api_key=${process.env.API_KEY}`,
    { headers, next: { revalidate: 10 } }
  );

  if (!res.ok) throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  return res.json();
}

export default async function Page({ searchParams }) {
  // Next 15: searchParams async
  const { genre, query } = await searchParams;

  const data = await fetchMovies({ genre, query });
  const raw = data?.results ?? [];

  // Görseli olmayanları ele
  const withImage = raw.filter((r) => r && (r.poster_path || r.backdrop_path));

  // Tekrarlı kayıtları id'ye göre ele
  const seen = new Set();
  const list = withImage.filter((r) => {
    if (seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  });

  if (list.length === 0) {
    return (
      <div className="min-h-[50vh] grid place-items-center">
        <div>No movies matched your criteria!</div>
      </div>
    );
  }

  // Her satırda tam 4 kart
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {list.map((dt) => (
        <Movies key={dt.id} dt={dt} />
      ))}
    </div>
  );
}
