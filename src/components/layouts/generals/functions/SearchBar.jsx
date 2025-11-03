import { Icon } from "@iconify/react";
import { useState } from "react";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  onReset,
  onSubmit = () => {},
  placeholder = "Cari",
  fullWidth = false,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form
      className={`form relative ${fullWidth ? "w-full" : "w-[30%]"}`}
      onSubmit={onSubmit}
    >
      <button
        type="submit"
        className={`absolute left-2 -translate-y-1/2 top-1/2 p-1 ${
          isFocused ? "text-gray-700" : "text-gray-400"
        }`}
      >
        <Icon icon="uil:search" className="text-xl" />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input rounded-md px-10 py-3 border-[1.5px] border-gray-200 focus:outline-none bg-white focus:border-gray-500 placeholder-gray-400 transition-all duration-300 shadow-md w-full"
      />
      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
        onClick={onReset}
      >
        <Icon icon="uil:times" className="text-gray-500 text-xl" />
      </button>
    </form>
  );
}
