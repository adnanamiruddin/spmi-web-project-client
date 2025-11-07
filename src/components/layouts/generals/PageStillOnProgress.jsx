import Image from "next/image";
import { useRouter } from "next/router";

export default function PageStillOnProgress() {
  const router = useRouter();

  return (
    <div className="bg-white flex flex-col justify-center items-center gap-3 py-12">
      <Image
        src="/icon-page-still-on-progress.png"
        alt="Not Found"
        width={500}
        height={500}
        className="w-1/4"
      />
      <p className="text-center font-semibold my-3 text-black text-2xl">
        Halaman Masih Dalam Tahap Pengembangan
      </p>
      <button
        className="text-white px-12 py-1.5 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-violet-500 hover:bg-violet-400 disabled:bg-violet-700 focus:ring-violet-500 focus:bg-violet-600"
        onClick={() => {
          router.push("/");
        }}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
