import { selectUser, setUser } from "@/redux/features/userSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Image from "next/image";

const navMenu = [
  {
    href: "#",
    label: "Statistik",
  },
  {
    href: "#",
    label: "Dokumen",
  },
];

export default function Navbar({ isCarouselPassed }) {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  const router = useRouter();

  const handleDrawerClose = () => {
    // @ts-ignore
    document.getElementById("navbar_drawer").checked = false;
  };

  return (
    <div
      className={`text-white px-3.5 py-3 grid grid-cols-2 md:grid-cols-2 items-center fixed w-full shadow-lg z-50 transition-all duration-300 ${
        isCarouselPassed || router.pathname !== "/"
          ? "bg-[#071015] md:py-4"
          : "bg-transparent md:shadow-none md:py-6"
      }`}
    >
      <Link href="/" className="flex justify-center items-center gap-3">
        <Image
          src="/icon-spmi-white.png"
          alt="Sistem Penjaminan Mutu Indonesia"
          width={500}
          height={500}
          className="w-max h-16 object-contain"
        />
        <div className="text-2xl">
          <h1>Sistem Penjaminan Mutu Internal</h1>
          <h1 className="font-semibold">Universitas Fulan</h1>
        </div>
      </Link>

      {/* Mobile View START */}
      <div className="ms-auto w-max drawer-end md:hidden">
        <input id="navbar_drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="navbar_drawer"
            className="px-1 py-0.5 flex justify-center items-center"
          >
            <Icon icon="uil:bars" className="text-4xl" />
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="navbar_drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#071015] text-white gap-3">
            <h1 className="w-max font-mono text-2xl font-bold backdrop-blur-sm px-3 pt-0.5 pb-2">
              Jelajah AI
            </h1>
            {navMenu.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleDrawerClose}
                  className={`text-lg font-semibold ${
                    router.pathname === link.href
                      ? "bg-gradient-to-br from-green-800 to-green-400"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {user ? (
              <>
                {navMenu.map((link) => (
                  <li key={link.href} className="mt-auto">
                    <Link
                      href={link.href}
                      onClick={handleDrawerClose}
                      className={`text-lg font-semibold ${
                        router.pathname === link.href
                          ? "bg-gradient-to-br from-green-800 to-green-400"
                          : ""
                      }`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <button
                    onClick={handleLogout}
                    className="text-lg font-semibold bg-red-600 text-white hover:bg-red-500 focus:bg-red-800"
                  >
                    <FiLogOut className="text-2xl me-1" />
                    Logout
                  </button>
                </li> */}
              </>
            ) : (
              <>
                {/* <li className="mt-auto">
                  <button
                    onClick={() => {
                      document.getElementById("navbar_drawer").checked = false;
                      document.getElementById("login_modal").showModal();
                    }}
                    className="text-lg font-semibold bg-gray-900"
                  >
                    Login
                  </button>
                </li> */}
                {/* <li>
                  <button
                    onClick={() => {
                      document.getElementById("navbar_drawer").checked = false;
                      document.getElementById("register_modal").showModal();
                    }}
                    className="text-lg font-semibold bg-gray-900"
                  >
                    Register
                  </button>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </div>
      {/* Mobile View END */}

      {/* Desktop View START */}
      <div className="hidden md:flex md:justify-center">
        <ul className="menu menu-horizontal gap-8 text-xl">
          {navMenu.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="focus:backdrop-blur-sm focus:text-white"
              >
                <p>{link.label}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="focus:backdrop-blur-sm focus:text-white"
            >
              <Icon icon="solar:login-3-bold" />
              <p>Masuk</p>
            </Link>
          </li>
        </ul>
      </div>
      {/* Desktop View END */}
    </div>
  );
}
