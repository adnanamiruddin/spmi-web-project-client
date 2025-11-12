import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MenuAccordion({ nav, className = "" }) {
  const router = useRouter();

  const items = Array.isArray(nav?.items) ? nav.items : [];
  const isGroupActive = items.some((item) =>
    item?.href
      ? router.pathname === item.href || router.pathname.startsWith(item.href)
      : false
  );

  const [isOpen, setIsOpen] = useState(Boolean(isGroupActive));
  useEffect(() => {
    if (isGroupActive) setIsOpen(true);
  }, [isGroupActive]);

  return (
    <div
      className={`collapse collapse-arrow rounded-md transition-colors duration-200 ${
        isGroupActive
          ? "bg-violet-700 text-white"
          : "bg-transparent text-gray-800"
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      />
      <div
        className="collapse-title text-xl font-bold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {nav.icon}
          <p className="font-bold text-lg">{nav.title}</p>
        </div>
      </div>

      <div className="collapse-content p-0">
        {items.map((item, j) => {
          const isActive = item?.href
            ? router.pathname === item.href ||
              router.pathname.startsWith(item.href)
            : false;

          return (
            <Link
              key={j}
              href={item.href}
              className={`flex items-center gap-4 py-3 px-8 font-semibold transition-all duration-300 ease-in-out focus:outline-none
                ${
                  isActive
                    ? "bg-violet-900 text-white"
                    : isGroupActive
                    ? "text-white/90 hover:bg-violet-600 hover:text-white"
                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
                }`}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
