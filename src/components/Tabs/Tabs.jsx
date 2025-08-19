"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Now Playing",
      url: "now_playing",
    },
    {
      name: "Upcoming",
      url: "upcoming",
    },
  ];

  return (
    <div className="text-4xl p-5 m-5 bg-blue-900/30 dark:bg-gray-600 flex items-center justify-center gap-16">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-orange-400"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
