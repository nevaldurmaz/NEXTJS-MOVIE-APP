"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Movies = ({ dt }) => {
  const router = useRouter();
  const poster = dt?.poster_path || dt?.backdrop_path;
  const title = dt?.title || dt?.name || "Untitled";
  const [imgErr, setImgErr] = useState(false);
  if (!poster || imgErr) return null;
  const isPoster = Boolean(dt?.poster_path);
  const aspectClass = isPoster ? "aspect-[2/3]" : "aspect-[16/9]";
  const src = `https://image.tmdb.org/t/p/${
    isPoster ? "w500" : "w780"
  }/${poster}`;

  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      title={title}
      className="group w-full cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          fill
          src={src}
          alt={title}
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          onError={() => setImgErr(true)}
          priority={false}
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
          <div className="text-sm md:text-base font-semibold line-clamp-2">
            {title}
          </div>
          <div className="text-[11px] md:text-xs opacity-80">
            {dt?.release_date?.slice(0, 4)}
          </div>
          <div className="text-red-400 font-semibold text-sm">
            {dt?.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
