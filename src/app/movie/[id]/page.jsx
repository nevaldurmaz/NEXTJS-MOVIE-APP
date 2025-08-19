import Image from "next/image";
import React from "react";

const TMDB_BASE = "https://api.themoviedb.org/3";

async function getMovie(id) {
  const headers = {};
  if (process.env.TMDB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.TMDB_TOKEN}`;
  }
  const url = `${TMDB_BASE}/movie/${id}?language=en-US`;

  const res = await fetch(
    process.env.TMDB_TOKEN ? url : `${url}&api_key=${process.env.API_KEY}`,
    { headers }
  );
  if (!res.ok) throw new Error(`TMDB error: ${res.status} ${res.statusText}`);
  return res.json();
}

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        className="opacity-50 hover:opacity-75"
        fill
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt={movieDetail?.title || "Poster"}
      />
      <div className="absolute">
        <div className="text-5xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2 font-semibold text-2xl ">
          {movieDetail?.overview}
        </div>
        <div className="my-3 text-2xl">{movieDetail?.release_date}</div>
        <div className="my-3 text-2xl">{movieDetail?.vote_average}</div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
