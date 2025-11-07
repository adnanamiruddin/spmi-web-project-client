import LogoutButton from "@/components/layouts/generals/dashboard/LogoutButton";
import MoveRoleAccess from "@/components/layouts/generals/dashboard/MoveRoleAccess";
import Semester from "@/components/layouts/generals/dashboard/Semester";
import { formatDateToIndo } from "@/helpers/dateHelper";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LiveClock = () => {
  const [time, setTime] = useState("--:-- --");

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("hh:mm A"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
};

export default function DashboardHeader() {
  return (
    <div className="bg-violet-50 w-full py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link href="/dashboard/home">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-spmi.png"
            alt="Sistem Penjaminan Mutu Internal"
            width={500}
            height={500}
            className="w-44 object-contain"
          />
        </div>
        <p className="text-2xl text-violet-800">
          Sistem Penjaminan Mutu Internal
        </p>
      </Link>

      <div className="h-28 bg-violet-100 px-6 rounded-md flex flex-col justify-center gap-2 ms-auto me-2">
        <div className="flex items-center gap-2">
          <Icon icon="hugeicons:time-01" className="size-8" />
          <p className="text-lg">
            <LiveClock />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="majesticons:calendar-line" className="size-8" />
          <p className="text-lg mt-0.5">{formatDateToIndo(new Date())}</p>
        </div>
      </div>

      <div className="h-28 bg-violet-100 p-2 flex gap-1 rounded">
        <Semester />
        <MoveRoleAccess />
        <LogoutButton />
      </div>
    </div>
  );
}
