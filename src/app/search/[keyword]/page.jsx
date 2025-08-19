import Movies from "@/components/Movies/Movies";
import React from "react";

const Page = async ({ params, className }) => {
  const apiKey = process.env.API_KEY;
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-USinclude_adult=false`
  );

  const data = await res.json();

  return (
    <div className="">
      {!data?.results ? (
        <div className="text-xl ml-5 md:ml-6 py-35">
          No results found for your search!
        </div>
      ) : (
        <div className="flex gap-8 flex-wrap justify-center p-5 ">
          {data?.results?.map((dt, i) => (
            <div
              alt="movies"
              key={i}
              className="w-[470px] h-[320px] flex gap-8 flex-wrap justify-center p-8 "
            >
              <Movies dt={dt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
