import DashboardContainer from "@/components/utils/generals/dashboard-container";
import Image from "next/image";

export default function DashboardHomePage() {
  return (
    <DashboardContainer>
      <div className="w-full h-screen relative">
        <Image
          src="/dashboard-home-data-visualization-image.png"
          alt="Data Visualization"
          width={500}
          height={500}
          className="w-full object-contain absolute -left-16"
        />

        <div className="text-7xl">
          <div className="absolute top-[6rem] right-32 text-orange-900">
            <p className="font-semibold">
              235 <span className="text-5xl">data</span>
            </p>
            <p>Program Studi</p>
          </div>

          <div className="absolute top-[21rem] left-40 text-white">
            <p className="font-semibold">
              8 <span className="text-5xl">data</span>
            </p>
            <p>Standar Mutu</p>
          </div>

          <div className="absolute top-[37rem] right-32 text-white">
            <p className="font-semibold">
              18087 <span className="text-5xl">data</span>
            </p>
            <p>Standar Mutu</p>
          </div>
        </div>
      </div>

      <p>Home</p>
    </DashboardContainer>
  );
}
