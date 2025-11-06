import Link from "next/link";
import { useRouter } from "next/router";
import MenuAccordion from "@/components/layouts/generals/dashboard/menu/MenuAccordion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/userSlice";
import MenuSingle from "@/components/layouts/generals/dashboard/menu/MenuSingle";
import { AdminNav } from "@/components/layouts/generals/dashboard/menu/nav-items/AdminNav";
import { ProdiNav } from "@/components/layouts/generals/dashboard/menu/nav-items/ProdiNav";

export default function Sidebar() {
  const { user } = useSelector(selectUser);
  const router = useRouter();

  const [navItems, setNavItems] = useState([]);
  //
  useEffect(() => {
    // setNavItems(AdminNav);
    setNavItems(ProdiNav);
  }, []);
  //
  // useEffect(() => {
  // if (user) {
  //   const roleId = user.adm_group.id;
  // if (roleId === 1) {
  //   setNavItems(AdminNav);
  // }
  // }
  // }, [user]);

  return (
    <div className="w-1/5 h-full overflow-y-auto hide-scrollbar min-h-screen pb-56 hidden md:inline bg-gray-50">
      {navItems.map((nav, i) => (
        <div key={i} className="border-b border-gray-300">
          {nav.type === "single" ? (
            <MenuSingle nav={nav} />
          ) : (
            <MenuAccordion
              label={
                <div className="flex items-center gap-2">
                  {nav.icon}
                  <p className="font-bold text-lg">{nav.title}</p>
                </div>
              }
            >
              {nav.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  className={`flex items-center gap-4 py-3 px-8 font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:text-white focus:bg-violet-700 ${
                    router.pathname === item.href
                      ? "bg-violet-900 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {item.icon}
                  <p>{item.label}</p>
                </Link>
              ))}
            </MenuAccordion>
          )}
        </div>
      ))}
    </div>
  );
}
