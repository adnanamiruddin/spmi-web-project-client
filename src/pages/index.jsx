import RadarChart from "@/components/layouts/generals/RadarChart";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const sampleData = [
  { id: 1, kriteria: "Kualitas pelayanan publik", nilai: 85, order: 1 },
  { id: 2, kriteria: "Inovasi dan efisiensi proses", nilai: 90, order: 2 },
  { id: 3, kriteria: "Kepuasan pengguna layanan", nilai: 75, order: 3 },
  { id: 4, kriteria: "Transparansi dan akuntabilitas", nilai: 95, order: 4 },
  { id: 5, kriteria: "Kepatuhan terhadap standar mutu", nilai: 80, order: 5 },
];

export default function HomePage() {
  return (
    <div>
      <Image
        priority
        src="/home-hero-image.png"
        alt="Sistem Penjaminan Mutu Indonesia"
        width={1000}
        height={1000}
        className="w-full object-cover"
      />
      <Image
        src="/home-hero-light-image.png"
        alt="Sistem Penjaminan Mutu Indonesia"
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
                alt="Sistem Penjaminan Mutu Indonesia"
                width={500}
                height={500}
                className="w-[70%] ms-auto"
              />
              <h1 className="mt-2 w-full text-right text-5xl text-violet-600 font-medium">
                Sistem Penjaminan <br /> Mutu Indonesia
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
          alt="Sistem Penjaminan Mutu Indonesia"
          width={500}
          height={500}
          className="absolute top-72 left-0 w-full object-contain"
        />
      </div>

      <div className="min-h-screen pt-96 pb-24 px-28 relative">
        <div className="flex justify-between items-center w-full">
          <p className="text-5xl text-violet-600 font-bold">Data Grafik</p>
          <p className="text-5xl text-violet-500">Statistik Penjaminan Mutu</p>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <div className="w-1/2 rounded-lg border border-violet-600">
            <div className="rounded-t-md bg-violet-600 p-4">
              <p className="text-white font-semibold">Unduh</p>
            </div>

            <div className="p-8">
              <p className="text-violet-600 font-semibold text-2xl text-center">
                Persentase Rata Nilai Standar Mutu Prodi
                <span className="font-normal">
                  <br />
                  Berdasarkan Tahun
                </span>
              </p>

              {/* CHART */}
              <div className="mt-6">
                <RadarChart data={sampleData} maxValue={100} height={420} />
              </div>
            </div>
          </div>

          <div className="w-1/2 rounded-md border border-violet-600"></div>
        </div>
      </div>
    </div>
  );
}
