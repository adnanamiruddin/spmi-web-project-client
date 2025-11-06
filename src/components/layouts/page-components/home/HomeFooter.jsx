import { Icon } from "@iconify/react";
import Image from "next/image";

const FooterSection = ({ icon = null, text, textBold = false }) => {
  return (
    <div className="flex items-center gap-6 font-medium text-gray-400">
      {icon && <Icon icon={icon} className="text-3xl text-black" />}
      <p className={`text-xl ${textBold && "font-bold"}`}>{text}</p>
    </div>
  );
};

export default function HomeFooter() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src="/icon-spmi.png"
          alt="Sistem Penjaminan Mutu Internal"
          width={500}
          height={500}
          className="w-10"
        />
        <div className="text-violet-600 text-2xl">
          <p>Sistem Penjaminan Mutu Internal</p>
          <p className="font-bold">Universitas Fulan</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-y-8">
        <FooterSection
          icon="ic:round-maps-home-work"
          text="IKA Pusat dan Prodi"
        />
        <FooterSection text="Link" textBold />
        <FooterSection text="Bantuan" textBold />

        <FooterSection icon="solar:phone-bold" text="+62" />
        <FooterSection text="+62" />
        <FooterSection text="+62" />

        <FooterSection icon="ic:round-mail" text="info@fulan.ac.id" />
        <FooterSection text="info@fulan.ac.id" />
        <FooterSection text="info@fulan.ac.id" />
      </div>

      <div className="mt-8 border-t-[1.5px] border-gray-300 pt-4">
        <p className="text-gray-400">
          Copyright © 2021 Your Company. All rights reserved
        </p>
      </div>
    </div>
  );
}
