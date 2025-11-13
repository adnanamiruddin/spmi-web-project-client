import { useRouter } from "next/router";
import MenuAccordion from "@/components/layouts/generals/dashboard/menu/MenuAccordion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/userSlice";
import MenuSingle from "@/components/layouts/generals/dashboard/menu/MenuSingle";
import { AdminNav } from "@/components/layouts/generals/dashboard/menu/nav-items/AdminNav";
import { ProdiNav } from "@/components/layouts/generals/dashboard/menu/nav-items/ProdiNav";
import { AsesorNav } from "@/components/layouts/generals/dashboard/menu/nav-items/AsesorNav";

export default function Sidebar() {
  const { user } = useSelector(selectUser);
  const router = useRouter();

  const [navItems, setNavItems] = useState([]);
  //
  useEffect(() => {
    // setNavItems(AdminNav);
    setNavItems(ProdiNav);
    // setNavItems(AsesorNav);
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
            <MenuAccordion nav={nav} />
          )}
        </div>
      ))}
    </div>
  );
}
