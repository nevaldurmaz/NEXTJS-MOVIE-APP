"use client";

import { BiSearch } from "react-icons/bi";
import MenuItem from "./Menu/MenuItem";
import Theme from "./Menu/Theme/Theme";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/login" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const q = keyword.trim();
    if (!q) {
      router.push("/");
      return;
    }

    router.push(`/?query=${encodeURIComponent(q)}`);
    setKeyword("");
  };

  const doSearchClick = () => {
    const q = keyword.trim();
    if (!q) {
      router.push("/");
      return;
    }
    router.push(`/?query=${encodeURIComponent(q)}`);
    setKeyword("");
  };

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <Link
        href="/"
        className="bg-orange-400 text-white rounded-lg p-3 text-2xl font-bold hover:opacity-90 transition inline-block"
        aria-label="Go to home"
      >
        MovieApp
      </Link>

      <form
        onSubmit={onSubmit}
        className="flex flex-1 items-center gap-2 border p-3 rounded-lg"
      >
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          placeholder="Search..."
          type="text"
        />
        <BiSearch
          onClick={doSearchClick}
          className="text-gray-400 cursor-pointer"
          size={25}
          title="Search"
          role="button"
        />
      </form>

      <Theme />
      {menu.map((m, i) => (
        <MenuItem menu={m} key={i} />
      ))}
    </div>
  );
};

export default Header;
