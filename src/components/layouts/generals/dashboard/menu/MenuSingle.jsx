import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuSingle({ nav }) {
  const router = useRouter();

  return (
    <div>
      {nav.title && (
        <p className="font-bold text-lg px-6 pt-4 pb-2">{nav.title}</p>
      )}
      {nav.items.map((item, j) => (
        <Link
          key={j}
          href={item.href}
          className={`flex items-center gap-4 py-3 px-5 hover:bg-violet-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:text-white focus:bg-violet-700 ${
            nav.title ? "font-semibold" : "font-bold"
          } ${
            router.pathname === item.href
              ? "bg-violet-900 text-white"
              : "text-black"
          }`}
        >
          {item.icon}
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
}
