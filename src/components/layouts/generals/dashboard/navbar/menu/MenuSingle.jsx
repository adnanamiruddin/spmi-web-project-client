import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuSingle({ nav }) {
  const router = useRouter();

  return (
    <div>
      {nav.title && (
        <p className="font-bold text-lg px-6 pt-4 pb-2">{nav.title}</p>
      )}

      {nav.items.map((item, j) => {
        const isActive =
          router.pathname === item.href ||
          router.pathname.startsWith(item.href);

        return (
          <Link
            key={j}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`
              flex items-center gap-4 py-3 px-5 rounded-md transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 ${
                nav.title ? "font-semibold" : "font-bold"
              } ${
              isActive
                ? "bg-violet-900 text-white shadow-md transform translate-x-0 border-l-4 border-l-violet-400"
                : "text-black hover:bg-violet-600 hover:text-white hover:translate-x-1"
            }
            `}
          >
            {item.icon}
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
}
