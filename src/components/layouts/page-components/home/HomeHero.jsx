import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <>
      <Image
        priority
        src="/home-hero-image.png"
        alt="Sistem Penjaminan Mutu Internal"
        width={1000}
        height={1000}
        className="w-full object-cover"
      />
      <Image
        src="/home-hero-light-image.png"
        alt="Sistem Penjaminan Mutu Internal"
        width={200}
        height={200}
        className="absolute top-0 right-0 w-full opacity-50"
      />

      <div className="absolute top-60 w-full px-48">
        <div className="flex justify-between">
          <div className="w-[35%]">
            <div>
              <Image
                priority
                src="/home-hero-logo-spmi.png"
                alt="Sistem Penjaminan Mutu Internal"
                width={500}
                height={500}
                className="w-[70%] ms-auto"
              />
              <h1 className="mt-2 w-full text-right text-5xl text-violet-600 font-medium">
                Sistem Penjaminan <br /> Mutu Internal
              </h1>
            </div>
            <p className="text-end font-times-new-roman mt-28 text-white">
              By NIFO
            </p>
          </div>

          <div className="w-[65%]">
            <p className="text-8xl text-right font-bold text-violet-500 opacity-80">
              Selamat <br /> Datang!
            </p>
            <Link
              href="/login"
              className="ms-auto mt-8 w-[65%] bg-violet-600 opacity-80 text-white flex justify-center items-center py-3 rounded-md gap-3 text-xl font-semibold hover:bg-violet-500 focus:bg-violet-700 transition-colors"
            >
              Masuk
              <Icon icon="solar:login-3-bold" />
            </Link>
          </div>
        </div>

        <Image
          src="/home-hero-big-logo-spmi.png"
          alt="Sistem Penjaminan Mutu Internal"
          width={500}
          height={500}
          className="absolute top-72 left-0 w-full object-contain"
        />
      </div>
    </>
  );
}
